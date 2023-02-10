const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const configuration = new Configuration({
  organization: "",
  apiKey: "",
});
const openai = new OpenAIApi(configuration);


const sampleResponse = require("./sampleResponse")
app.post("/", async (req, res) => {
  // const { message, currentModel } = req.body;
  // const response = await openai.createCompletion({
  //   // model: "text-davinci-003",
  //   model: `${currentModel}`,
  //   prompt: `${message}`,
  //   max_tokens: 100,
  //   temperature: 0.5,
  // });

  // res.json({
  //   message: response.data.choices[0].text,
  // });

  res.json({
    message: sampleResponse.sampleResponse().choices[0].text,
  })
});

app.get("/models", async (req, res) => {
  const response = await openai.listEngines();
  res.json({
    models: response.data.data,
  });
});

const port = 3600;
app.listen(port, () => {
  console.log(`App is listening at localhost:${port}`);
});
