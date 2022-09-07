# seie

seie is short for `Setting Express in Express`

## setting up

- `npx seie --new "<project name| project dir>"`

- `npm run start` or `yarn start`

to use build "for typescript"

- `npm run build` or `yarn build`

### for testing

in `package.json` file

#### for JavaScript

add for jest

```json
"scripts": { "test": "jest" }
```

add for jasmine

```json
"scripts": { "test": "jasmine" }
```

#### for TypeScript

add for jest

```json
"scripts": {
    "jest": "jest",
    "test": "npm run build && npm run jest"
}
```

add for jasmine

```json
"scripts": {
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine"
}
```

## args

- `--default` or `-d`: to setting up the project on default choices
- `--new` or `-n`: to create a new project
