const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Fire no prefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐌𝐫.Aziz",
  description: "fire emojii",
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

  var tl = ["Im Scared from Fire Its Can Burn 🔥","Sent This fire To your Ex-box-","Now a days girls Put Fire on Boyfriend Brain","Why so Hot 🔥.Im Yet Cool","You dont know I dont like To much 🔥Hotness\nIts make me horney 😋😋","Dont take my Exams of Yummy","I Did again 😋😋😋😋😋Its more Yummy 😋","Supper Yum 😋😋","Why Im getting hot seen This Sexy Emoji😋😋","Im Sexy 😋😋Come Purpose me","Do you know I have 2x Messenger ","Lets make 18 Rounds 😋🔥🔥🔥🤪🥰🥰😘😘","Tomorrow We marry then i make for you Stylish fire food 🔥","Im tired 🥵🥵🥵Lets make me Calm"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  
  if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "🥵")) {
    var msg = {
      body: `○${name}࿐\n      ➣${rand}\nㅤㅤ`
    
}
    return api.sendMessage(msg, threadID, messageID);
 
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
