cli-pr
======

Interactively create pull requests right from your terminal!

Currently only supports AWS CodeCommit.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-pr.svg)](https://npmjs.org/package/@aravindparappil/cli-pr)
[![Downloads/week](https://img.shields.io/npm/dw/cli-pr.svg)](https://npmjs.org/package/@aravindparappil/cli-pr)
[![License](https://img.shields.io/npm/l/cli-pr.svg)](https://github.com/aravindparappil46/cli-pr/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @aravindparappil/cli-pr
$ create-pr COMMAND
running command...
$ create-pr (-v|--version|version)
@aravindparappil/cli-pr/1.1.0 darwin-x64 node-v14.4.0
$ create-pr --help [COMMAND]
USAGE
  $ create-pr COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g cli-pr
$ create-pr 
running command...
$ create-pr (-v|--version|version)
cli-pr/0.0.1 darwin-x64 node-v14.4.0
$ pr --help [COMMAND]
USAGE
  $ create-pr
...
```
If you are running the `create-pr` command from within a directory that is linked to an AWS CodeCommit repo already, you will get defaults for repo name & source branch
