#!/usr/bin/env node
const { execSync } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const runCommand = (command) => {
    try {
        execSync(`${command}`, { stdio: "inherit" });
        return true;
    } catch (error) {
        console.log(`Failed to run command: ${command}. ` + error);
        return false;
    }
};

rl.question("Enter the name for your app: ", (appName) => {
    const gitCheckoutCommand = `git clone --depth 1 https://github.com/LisovetsAlex/webindows-app-template ${appName}`;
    const installDepsCommand = `cd ${appName} && npm install`;

    console.log("Creating app template: " + appName);
    const checkOut = runCommand(gitCheckoutCommand);
    if (!checkOut) {
        console.log("Failed to create app template: " + appName);
        process.exit(-1);
    }

    console.log("Installing dependencies... ");
    const install = runCommand(installDepsCommand);
    if (!install) {
        console.log(
            "Failed to install dependencies for app template: " + appName
        );
        process.exit(-1);
    }
    console.log("Done!");

    rl.close();
});
