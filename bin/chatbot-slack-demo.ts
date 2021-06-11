#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ChatbotSlackDemoStack } from '../src/chatbot-slack-demo-stack';

const app = new cdk.App();
new ChatbotSlackDemoStack(app, 'ChatbotSlackDemoStack');
