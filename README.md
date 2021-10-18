# node package manager

## Initialization
```
npm init
```

This is a command that build a package.json file.
You can keep press the enter or input the description if you want to.
If you want to skip that process you can run commad `npm init -y` instead.

## Configuration
```
npm config
```

You can change the default setting by this.
For example, the "author" in package.json file is blank but if you run command `npm config set init-author-name "<Your Name>"`, it will be set to your name as default.

There's `npm config get <key>` which you can get the information of that

## Install
```
npm install
```

This command will help you to get a part of dependencies.
By using command `npm install <option> --save`.
Now this `--save` is to save in dependencies in your package.json file.
If there's dependencies in the file, other users can install those by only type command `npm install`

If you want to install a certain version of something, you can select it by this.
Example: `npm install typescript@4.1.3`

There's also the dev-dependencies which is the part only using in development, not for source.
The command option will be change to `--save-dev`.
Other users can choose whether to install both of dependencies and dev-dependencies or only dependencies.
`npm install --production`: command that only install dependencies.

## Uninstall
```
npm uninstall
npm remove 
npm rm
```

Every commands here are same, it will uninstall the package from your file.
In case you want to uninstall from dependencies you can use command `npm rm <option> --save`.

## Using yarn

`yarn` is the package manager just like npm, but it's more faster and efficient to build up. In `yarn`, every commands look the same to npm, except for installing it will change to...
```sh
yarn add
# not install
```