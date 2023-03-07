
# Console-log-remover

## Overview

This is an NPM package built to remove the ```console.log()``` present in the code just by executing a single command in the CLI

## Installation
```
npm i -g console-log-remover
```

To run the log remover in any project:
``` 
rmlogs
```










## Features

- Removes the succeeding semicolon (If present)
- Does not remove ```console.log()``` from error staements
- Does not remove from all files and directories in .gitignore
- Also to ignore the ```console.log()``` present in certain files or folders create and add it to a file named .logignore






## Deployment

### Deploying it locally from Github

Clone this repo:
```
  git clone https://github.com/avantgard3labs/console-log-remover.git
```

Install dependencies:
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
