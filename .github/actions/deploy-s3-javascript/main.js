const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    core.notice('Hello from my custom JavaScript Action!');

    // 1) Get some input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upliad files
    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${s3UdistFolderri} ${s3Uri} --region ${bucketRegion}`);
}

run();