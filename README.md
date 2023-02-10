# ChatGPT API Tutorial

![ChatGPT API Logo](https://github.com/d3vkk/chatgpt-replica/blob/master/client/public/chatgpt-logo.jpg)

ChatGPT Replica

## Set Up

In order for the app to be fully functional, you will need ChatGPT API Keys:

1. [Sign up for an OpenAI account](https://openai.com)
2. Log into your OpenAI account
3. Click on the `View API Keys` button in the top-right corner of the page
4. Click on the `Create an API Key` button to generate a new API key
5. Insert API keys in `server/index.js`

   ```js
   const configuration = new Configuration({
     organization: "",
     apiKey: "",
   });
   ```

## API Endpoints

There are two endpoints: Making requests & Models.

Refer to [OpenAI Documentation for more information](https://platform.openai.com/docs/api-reference/introduction)

## Contribution

To contribute, [use this guide](https://github.com/d3vkk/open-source/blob/master/CONTRIBUTING.md)

## Usage

Star this repo for future reference

[Open in browser-based Visual Studio Code](https://vscode.dev/github/d3vkk/chatgpt-replica)

Fork or clone this repo
```
git clone https://github.com/d3vkk/chatgpt-replica.git
```

© 2023-present Donald K • Under MIT License
