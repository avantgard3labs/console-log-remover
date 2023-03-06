const fs = require('fs');
const glob = require('glob');

function RemoveLogs() {
  const regex = /(?<!error\s)\bconsole\.log\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)(?!\s*error)(;?)/g;

  const options = {
    cwd: process.cwd(),
    ignore: ['node_modules/**'],
  };

  // Read the contents of the user's .gitignore file (if it exists)
  const gitignorePath = `${process.cwd()}/.gitignore`;
  if (fs.existsSync(gitignorePath)) {
    const gitignoreData = fs.readFileSync(gitignorePath, 'utf8');
    const gitignoreLines = gitignoreData.split('\n').map(line => line.trim()).filter(line => !!line && !line.startsWith('#'));
    options.ignore.push(...gitignoreLines);
  }
  
  // Read the contents of the user's .consoleLogIgnorer file (if it exists)
  const consoleLogIgnorerPath = `${process.cwd()}/.logignore`;
  if (fs.existsSync(consoleLogIgnorerPath)) {
    const consoleLogIgnorerData = fs.readFileSync(consoleLogIgnorerPath, 'utf8');
    const consoleLogIgnorerLines = consoleLogIgnorerData.split('\n').map(line => line.trim()).filter(line => !!line && !line.startsWith('#'));
    options.ignore.push(...consoleLogIgnorerLines);
  }

  glob('**/*.js', options, (err, files) => {
    if (err) {
      console.error(`Error globbing files: ${err}`);
      return;
    }

    for (const file of files) {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}: ${err}`);
          return;
        }

        const modifiedData = data.replace(regex, '');

        fs.writeFile(file, modifiedData, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing file ${file}: ${err}`);
            return;
          }

          
        });
      });
    }
  });
}

module.exports = RemoveLogs;