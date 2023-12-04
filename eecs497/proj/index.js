import OpenAI from 'openai';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function getOpenAIResponse() {
    try {
        const completion = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "user", content: "Hello World"}
            ]
        });
        console.log(completion.data.choices[0].message);
    } catch (error) {
        console.error('Error:', error);
    }
}

// You can call this function to test, or trigger it via an Express route
getOpenAIResponse();

// Express server setup (if needed)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
