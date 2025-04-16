ARG VARIANT="20-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN apt-get update && apt-get upgrade -y

RUN npm install -g @vue/cli

RUN npm install -g firebase-tools
