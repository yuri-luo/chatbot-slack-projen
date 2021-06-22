FROM public.ecr.aws/lambda/nodejs:14

COPY src /var/task/src
COPY package.json tsconfig.json /var/task/

# Install NPM dependencies for function
RUN npm install && npm run build

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "dist/dockerEventLambda.handler" ]
