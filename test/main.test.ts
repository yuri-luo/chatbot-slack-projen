import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { ChatbotSlackDemoStack } from '../src/chatbot-slack-demo-stack';

test('Test to have cloudFormation Resources', () => {
  const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  };

  const app = new App();
  const stack = new ChatbotSlackDemoStack(app, 'testCloudFormationResources', { env });

  expect(stack).toHaveResource('AWS::Chatbot::SlackChannelConfiguration');
  expect(stack).toHaveResource('AWS::CloudWatch::Alarm');
  expect(stack).toHaveResource('AWS::Lambda::Function');
});
