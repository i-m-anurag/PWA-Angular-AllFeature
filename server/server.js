let express =require("express");
let { addPushSubscriber } = require("./add-push-subscriber.route");
let { sendNewsletter } = require( "./send-newsletter.route");
const bodyParser = require("body-parser");
var cors = require('cors')

 

const webpush = require("web-push");


// ! paste you public private key here and angular comment of notification
// *TODO: paste you keys here

const vapidKeys = {
  "publicKey": 'BBOEkq6GqakZMYt7VsKrnyxXAA58ZiJCWTj5xu1jBdq52lAcYYwW1pRU-WFAYu1PT4sMeu0wbNcoBeeifPjLr68',
  "privateKey":'8eLHnV_hoMSCtTgohc6mo9Rn8DtrNoFjJZqmJ1x-CZE'
};



webpush.setVapidDetails(
  "mailto:dummy@dummy.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const app = express();

app.use(bodyParser.json());
app.use(cors())
// REST API

app.route("/api/notifications").post(addPushSubscriber);

app.route("/api/newsletter").post(sendNewsletter);

// launch an HTTP Server
const httpServer = app.listen(9000, () => {
  console.log(
    "HTTP Server running at http://localhost:" + httpServer.address().port
  );
});
