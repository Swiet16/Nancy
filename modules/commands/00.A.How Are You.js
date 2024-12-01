const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "How are you",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐌𝐫.Aziz",
  description: "",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 0,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["LITTLE BUSY🫣","IM SUPPER S3XY🫣\n➢HOW ARE YOU🫵","Im in CHARGING🪫🪫\nHOW ARE YOU","IM SO CUTE ","ALHAMDUILLAH❤\n➢HOW ARE YOU??","IM WONDERFUL\n➢How about you"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
 
 if ((event.body.toLowerCase() == "pek") || (event.body.toLowerCase() == "gelo")) {
     return api.sendMessage("ㅤㅤㅤㅤㅤ\n🤣🤣🤣You are not fine\n➢plz wakeup 🤣🤣♥︎ིྀིིིྀི\n", threadID);
   }; 
   mess = "{name}"
  
  if (event.body.indexOf("How are you") == 0 || (event.body.indexOf("how are you") == 0)) {
    var msg = {
      body: `ㅤ\n╭═════════════❤╮\n ➥${rand}\n╰❤═════════════╯\nㅤ`
    }
    return api.sendMessage(msg, threadID, messageID);
    
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
