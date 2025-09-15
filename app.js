const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const generateText1  = require("./controllers/textController1");
const generateText2  = require("./controllers/textController2");
const generateText3  = require("./controllers/textController3");
const generateText4  = require("./controllers/textController4");
const generateText5  = require("./controllers/textController5");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post('/api/generate-text1',generateText1 );
app.post('/api/generate-text2',generateText2 );
app.post('/api/generate-text3',generateText3 );
app.post('/api/generate-text4',generateText4 );
app.post('/api/generate-text5',generateText5 );

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// npm install express dotenv multer @google/genai