let { USER_SUBSCRIPTIONS } =require( "./in-memory-db");

const webpush = require("web-push");

exports.sendNewsletter=(req, res) =>{
  console.log("Total subscriptions", USER_SUBSCRIPTIONS.length);

  // sample notification payload
// ! Here i am creating a object the is suitable for fire notification on chrome browser. different browser need different format
  const notificationPayload = {
    notification: {
      title: "Angular News",
      body: "Newsletter Available!",
      icon: "assets/main-page-logo-small-hat.png",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: 1515496004613,
        primaryKey: 1,
      },
      actions: [
        {
          action: "explore",
          title: "Go to the site",
        },
      ],
    },
  };


  // * Sending notification to all the subscribers of this web
  Promise.all(
    USER_SUBSCRIPTIONS.map((sub) => {
      webpush.sendNotification(sub, JSON.stringify(notificationPayload));
    })
  )
    .then(() => {
     return res.status(200).json({
        message: "Newsletter sent successfully. ",
      });
    })
    .catch((err) => {
      console.log("Error sending notification", err);
    return  res.sendStatus(500);
    });
  //TODO
}

