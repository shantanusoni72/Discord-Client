function readyMessage(message, check) {
    if (message != "") {
      if (check.checked) {
        var res = null
        for(let i = 0; i < 5; i++) {
          res = sendMessage(message)
          setTimeout(5000)
        }
        return res
      } else {
        return sendMessage(message)
      }
    }
  }