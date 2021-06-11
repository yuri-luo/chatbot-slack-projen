import { App } from '@aws-cdk/core';
import { ChatbotSlackDemoStack } from './chatbot-slack-demo-stack';

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new ChatbotSlackDemoStack(app, 'ChatBotSlackDemoStack', {
  env: devEnv,
});

app.synth();
