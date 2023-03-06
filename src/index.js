const fs = require("fs");
const glob = require("glob");

function RemoveLogs() {
    const regex =
        /(?<!error\s)\bconsole.log((?:[^)(]+|((?:[^)(]+|([^)(])))))(?!\serror)(;?)/g;

    const options = {
        cwd: process.cwd(),
        ignore: ["node_modules/**"],
    };
}
