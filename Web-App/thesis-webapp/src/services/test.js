const axios = require("axios");
const fs = require("fs");

const image = fs.readFileSync("../assets/broken_rail.png", {
  encoding: "base64",
});

axios({
  method: "POST",
  url: "https://detect.roboflow.com/railway-crack-detection/10",
  params: {
    api_key: "j4oHBD3msAlUlJvXwsHz",
  },
  data: image,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then(function (response) {
    const outputData = JSON.stringify(response.data, null, 2);
    fs.writeFileSync("output.json", outputData);
    console.log("Output data has been written to output.json");
  })
  .catch(function (error) {
    console.log(error.message);
  });
