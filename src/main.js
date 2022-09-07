import chalk from "chalk"
import fs, { promises as fsPromises } from 'fs';
import Listr from "listr"
import { ncp } from "ncp"
import path from "path"
import { promisify } from "util"
import { install, projectInstall } from "pkg-install";
const { exec } = require('child_process');

const access = promisify(fs.access)
const copy = promisify(ncp)

const copyTemplateFiles = async options => {
    const makeDir = async () => {
        await fsPromises.mkdir(options.newProject);
    };

    let targetDirector

    if (fs.existsSync(`${options.newProject}`)) {
        targetDirector = `${options.targetDirectory}/${options.newProject}`
    } else {
        await makeDir();
        targetDirector = `${options.targetDirectory}/${options.newProject}`
    }

    return copy(options.templateDirectory, targetDirector, {
        clobber: false
    })
}

export const createProject = async options => {
    options = {
        ...options,
        targetDirectory: options.targetDirectory || process.cwd()
    }

    const folder = options.db === "" ? options.language : `${options.language}+/${options.db}`

    const templateDir = path.resolve(
        new URL(import.meta.url).origin,
        "../../templates",
        folder.toLowerCase()
    )
    options.templateDirectory = templateDir

    console.log(templateDir)

    try {
        await access(templateDir, fs.constants.R_OK)
    } catch (err) {
        console.error(chalk.red("Invalid template name") + " " + chalk.red.bold("ERROR"))
        process.exit(1)
    }

    const tasksArr = [
        {
            title: "Copy project files",
            task: () => copyTemplateFiles(options)
        },
        {
            title: "Install dependencies",
            task: () => projectInstall({
                cwd: `${options.targetDirectory}/${options.newProject}`,
                prefer: options.package_manager
            })
        }
    ]

    if (options.testing !== "") {
        tasksArr.push({
            title: "setting up unit testing",
            task: () => {
                if (options.testing === "Jest") {
                    if (options.language === "JavaScript") {
                        return install({
                            "supertest": "*",
                            "jest": "*",
                        }).then(() => {
                            exec(`npx ts-jest config:init`)
                        })
                    } else if (options.language === "TypeScript") {
                        return install({
                            "supertest": "*",
                            "jest": "*",
                            "ts-jest": "*",
                            "@types/jest": "*",
                            "@types/supertest": "*"
                        }).then(() => {
                            exec(`npx ts-jest config:init`)
                        })
                    }
                } else if (options.testing === "Jasmine") {
                    if (options.language === "JavaScript") {
                        return install({
                            "supertest": "*",
                            "jasmine": "*",
                        }).then(() => {
                            exec(`npx jasmine init`)
                        })
                    } else if (options.language === "TypeScript") {
                        return install({
                            "supertest": "*",
                            "jasmine": "*",
                            "jasmine-ts": "*",
                            "@types/jasmine": "*",
                            "@types/supertest": "*"
                        }).then(() => {
                            exec(`npx jasmine init`)
                        })
                    }
                }
            }
        })
    }

    const tasks = new Listr(tasksArr)

    await tasks.run()

    console.log(chalk.green(`Project ready`) + " " + chalk.green.bold("DONE"))
    return true
}