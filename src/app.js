import express from "express";
import getUrl from "./utils/secret.js";
import fetch from "node-fetch";

const app = express();

app.use(express.json());

async function getData() {
  const url = getUrl("Moscow");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

app.get("/api/getWeather", async (req, res) => {
  //   res.json({
  //     message: "API - 👋🌎🌍🌏",
  //   });
  const data = await getData();
  res.send(data);
});

export default app;
