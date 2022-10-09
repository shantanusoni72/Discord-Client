function sendMessage(message) {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1028558180315303946/Yllb9CswR25cens3ZMkM0dPOCOactImf_e6fD4m8Uz6qxCK_QcKwoQHqpQdIsFJUgt9o");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "Shubhuuu",
      avatar_url: "",
      content: message
    }

    request.send(JSON.stringify(params));
    return "Message Sent!"
  }