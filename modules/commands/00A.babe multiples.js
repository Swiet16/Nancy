const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "babe no prefix",
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

  var tl = ["babe is Busy😂","Always babe😁😁\n Later you become parents","lets make Babe😂😂","Im ready to adopt you😁😁","Now we are in relationships","Lets make tuktok😂😂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
 
 if ((event.body.toLowerCase() == "pek") || (event.body.toLowerCase() == "gelo")) {
     return api.sendMessage("ㅤㅤㅤㅤㅤ\n🤣🤣🤣You are not fine\n➢plz wakeup 🤣🤣♥︎ིྀིིིྀི\n", threadID);
   }; 
   mess = "{name}"
  
  if (event.body.indexOf("babe") == 0 || (event.body.indexOf("Babe") == 0)) {
    var msg = {
      body: `ㅤㅤ\n╭═════════════❤╮\n⏤͟͟͞͞◯K͠e͟e͟p͟ E͟Y͟E͟S͟ o͢n͢ m͢e͢😜\n       ⬳  😘😘 ᴵᵀˢ ᴹᴱ ᴾᴵᴷᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅢wi͜͡et⑯😍𓆪\n╰❤═════════════╯\n      ○${name}࿐\n      ➣${rand}\nㅤㅤ`
    }
    return api.sendMessage(msg, threadID, messageID);
    
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
