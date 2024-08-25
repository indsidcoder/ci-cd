import "dotenv/config"; // For loading environment variables from a .env file

function getEnv() {
  // eslint-disable-next-line no-undef
  return process;
}

// Function to get the base URL based on environment
function getBaseUrl() {
  const env = getEnv().env.NODE_ENV || "DEV";

  switch (env) {
    case "DEV":
      return `https://api.openweathermap.org/data/2.5/weather`;
    default:
      throw new Error("Unknown environment");
  }
}

// Function to create the external URL link
const getUrl = (param) => {
  const baseUrl = getBaseUrl();

  if (getEnv().env.API_URL) return `${getEnv().env.API_URL}?q=${param}`;

  const key = getEnv().env.API_KEY;

  if (key) {
    return `${baseUrl}?q=${param}&APPID=${key}`;
  }
};

export default getUrl;
