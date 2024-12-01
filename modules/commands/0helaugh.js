const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ha without prefix",
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

  var tl = [ "Hahah🤣🤣🤣I can't stop laughing to seen You","Stop It 🤣🤣Crazy Crazy 😂😂","Wow You Still Alive 🙄🤣🤣","I dont know fight ,I Have only Porn 😂😂","Just lick Spoon And Eat all Food 🤣🤣🤣","Can You sleep without Say Good Night ","Im Going To chubby 😂If Im Human ","Im Slowly Slowly Understand Automatic 🤣🤣🤣","Stop na...Eles I rape you😂😂" ];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"
  
  if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "He")) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
    
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
