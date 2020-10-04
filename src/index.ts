import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import {Utils} from './utils';

class CliPr extends Command {
  static description = 'Interactively create pull requests for AWS CodeCommit repos';

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
    force: flags.boolean({char: 'f'}),
  }
  
  async run() {
    const utils = new Utils();

    const sourceBranch = await utils.getCurrentBranch();
    const repoName = await utils.getRepositoryName();

    let responses: any = await inquirer.prompt([
      {
        name: 'title',
        message: 'Enter title for pull request',
        type: 'input'
      },
      {
        name: 'repo',
        message: 'Enter the name of the repository',
        type: 'input',
        default: repoName
      },
      {
        name: 'source',
        message: 'What is the name of the branch you wish to merge?',
        type: 'input',
        default: sourceBranch
      },
      {
        name: 'destination',
        message: 'Which branch do you want to merge into?',
        type: 'list',
        choices: [{name: 'master'}, {name: 'hotfix'}],
      },
      {
        name: 'jiraId',
        message: 'What is the Jira issue ID?',
        type: 'input'
      },
      {
        name: 'release',
        message: 'What is the release number for this feature?',
        type: 'input'
      },
      {
        name: 'description',
        message: 'Enter description for the pull request',
        type: 'editor'
      }
    ]);

    utils.runAwsCommand(responses);
  }

}

export = CliPr
