const { AwsCdkTypeScriptApp } = require('projen');
const project = new AwsCdkTypeScriptApp({
  cdkVersion: '1.97.0',
  cdkVersionPinning: true,
  defaultReleaseBranch: 'main',
  name: 'chatbot-slack-projen',
  authorEmail: 'yuri.luo@104.com.tw',
  authorName: 'Yuri Luo',
  description: 'Aws Chatbot message by slack on AWS CDK',
  repository: 'https://github.com/104corp/chatbot-slack-projen',
  keywords: ['Chatbot', 'Slack'],
  gitignore: [],
  buildWorkflow: false,
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-chatbot',
    '@aws-cdk/aws-cloudwatch',
    '@aws-cdk/aws-cloudwatch-actions',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-sns',
    '@aws-cdk/aws-lambda',
  ],
  devDeps: ['@types/aws-lambda@^8.10.72', 'eslint-config-prettier', 'eslint-plugin-prettier', '@types/js-yaml@^3.12.5'],
  deps: ['js-yaml@^3.14.1'],
  eslint: true,
  dependabot: false,
  releaseWorkflow: false,


  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") this app uses. */
  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
});
project.synth();
