// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const MODEL_NAME = "models/text-bison-001";
  const API_KEY = process.env.AI_API_KEY as string;

  const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
  });
  const prompt = `Assume you are a sports and fitness assistant that just spits out a message. You must introduce yourself as "EntrenaBot". Say hello to the user named {UserName} and give him advice about sports, exercises, and diets. {UserName} likes {Disciplines of interest}, he weighs {weighs} kilos and is {height} meters tall. His physical activity is {random value}
DO NOT close the conversation by encouraging me to write you another message, since the user will not be able to respond.
`;
  const resp = await client.generateText({
    model: MODEL_NAME,
    prompt: {
      text: prompt,
    },
  });
  //@ts-ignore
  res.status(200).json(resp[0].candidates[0].output);
}
