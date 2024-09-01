import { When, Then } from "@cucumber/cucumber";

// When step definition
When("I make a GET request", async function () {
  const url = "http://app:5000/api/getWeather";
  const response = await fetch(url);
  // Store the response object on `this` for later use
  this.response = response;
});

// Then step definition
Then("the response status should be {int}", async function (statusCode) {
  // Access the `response` stored in `this` in the previous step
  const responseStatus = this.response.status;
  if (responseStatus !== statusCode) {
    throw new Error(`Expected status ${statusCode} but got ${responseStatus}`);
  }
});
