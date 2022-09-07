import arg from "arg"
import inquirer from "inquirer"
import { createProject } from "./main"

const parseArgumentsIntoOptions = rawArgs => {
    const args = arg(
        {
            "--default": Boolean,
            "-d": "--default",
            "--new": String,
            "-n": "--new"
        },
        {
            argv: rawArgs.slice(2)
        }
    )
    return {
        skipPrompts: args["--default"] || false,
        newProject: args["--new"],
    }
}

const promptForMissingOptions = async options => {
    const defaultLanguage = "JavaScript"
    const defaultDB = ""
    const defaultTesting = ""
    const defaultPackageManager = "npm"

    if (options.skipPrompts){
        return {
            ...options,
            language: options.language || defaultLanguage,
            db: options.db || defaultDB,
            testing: options.testing || defaultTesting,
            package_manager: options.package_manager || defaultPackageManager,
        }
    }

    let questions = []
    if (!options.language) {
        questions = [
            {
                type: "list",
                name: "language",
                message: "Which language you want to use in this project",
                choices: ["JavaScript", "TypeScript"],
                default: defaultLanguage
            },
            {
                type: "list",
                name: "db",
                message: "Which DataBase that you want to use",
                choices: ["None", "MongoDB", "PostgreSQL", "MySQL"],
                default: defaultDB
            },
            {
                type: "list",
                name: "testing",
                message: "which Unit Testing that you want to use",
                choices: ["None", "Jasmine", "Jest"],
                default: defaultTesting
            },
            {
                type: "list",
                name: "package_manager",
                message: "Which package manager would you to use?",
                choices: ["npm", "yarn"],
                default: defaultPackageManager
            }
        ]
    }

    const answers = await inquirer.prompt(questions)
    return {
        ...options,
        language: options.language || answers.language,
        db: options.db || answers.db === "None" ? "" : answers.db,
        testing: options.testing || answers.testing === "None" ? "" : answers.testing,
        package_manager: options.package_manager ||  answers.package_manager
    }
}

export const cli = async args => {
    let options = parseArgumentsIntoOptions(args)
    options = await promptForMissingOptions(options)
    
    await createProject(options)
}
