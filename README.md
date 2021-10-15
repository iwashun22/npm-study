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