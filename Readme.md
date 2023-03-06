
# Console-log-remover

This is an NPM package built to remove the ```console.log()``` present in the code just by exacuting a single command in the CLI






## Features

- Removes the semicolon succeeding (If present)
- Does not remove ```console.logs``` from error staements
- Does not remove from all files and directories in .gitignore
- Also to ignore the ```console.logs``` present in certain files or folders add it to a file named .logignore






## Deployment

### Deploying it locally (global)

Clone this repo:
```
  git clone https://github.com/Gathin23/console-log-remover.git
```

Add dependencies:
```
  npm i
```

To pack the package:
```
  npm pack
```

Install the package globally:
```
npm i -g ./console-log-remover-1.0.0.tgz
```

To run:
```
rmlogs
```