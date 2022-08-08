


let {USER_SUBSCRIPTIONS} =require( "./in-memory-db");



 exports.addPushSubscriber=(req, res) =>{
    const sub = req.body;

    console.log('Received Subscription on the server: ', sub);

    USER_SUBSCRIPTIONS.push(sub);
  

  return  res.status(200).json({message: "Subscription added successfully."});
}


