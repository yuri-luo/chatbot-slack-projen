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
  gitignore: ['lambda/docker-event/dist', 'lambda/test-event/dist', '.idea'],
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
});

project.eslint.addRules({
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],
});

project.synth();
