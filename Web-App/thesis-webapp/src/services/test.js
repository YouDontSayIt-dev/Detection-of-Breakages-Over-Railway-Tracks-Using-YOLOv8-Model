const axios = require("axios");

axios({
  method: "POST",
  url: "https://detect.roboflow.com/railway-crack-detection/10",
  params: {
    api_key: "j4oHBD3msAlUlJvXwsHz",
    image:
      "https://i.cbc.ca/1.4511754.1517408760!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/cracked-rail.jpg",
  },
})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.message);
  });
