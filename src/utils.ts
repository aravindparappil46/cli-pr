import {exec} from 'child_process';

export class Utils {
    
    getCurrentBranch() {
        return new Promise((resolve, reject) => {
            exec('git branch --show-current', (err, stdout, stderr) => {
                if (err) {
                    reject("Failed to fetch current git branch")
                }
                resolve(stdout.trim());
            });   
        });
    }

    getRepositoryName() {
        return new Promise((resolve, reject) => {
            exec('git config --get remote.origin.url', (err, stdout, stderr) => {
                if (err) {
                    reject("Failed to fetch repo name")
                }
                const repo = stdout.substr(stdout.lastIndexOf('/') + 1).replace('.git', '')
                resolve(repo.trim());
            });
        });
    }

    runAwsCommand(args: any) {
        const title = args.release + ' ' + args.jiraId + ' ' + args.title;
        const jiraURL = '<ADD YOUR JIRA BASE URL HERE>/' + args.jiraId;
        const description = '[Jira Link](' + jiraURL + ')\n\n' + args.description.trim();

        const cmd = 'aws codecommit create-pull-request' 
                    + ' --title ' + JSON.stringify(title)
                    + ' --description "' + description + '"'
                    + ' --targets "repositoryName=' + args.repo 
                    + ',sourceReference=' + args.source
                    + ',destinationReference=' + args.destination + '"'

        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error(err.message)
            }
            if (stderr) {
                console.error(stderr)
            }
            if (stdout) {
                console.log('\nSuccess!')
            }
        });
    }
}