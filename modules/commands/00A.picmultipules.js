const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Pic",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐌𝐫.Aziz",
  description: "Picture",
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

  var tl = ["I dont want to sent my 😁😁😁", " you will kidnap i know😁😁", "dont worry im believe im so Sexy😁😁", " im so hot 😋😋But never give you picture😁😁 ", " Always pic puc🙄🙄🙄", "Download from my fake account 🤣🤣", " You dont have my pics🙄I hate you", "Sent me special Picture 😁😋", " im going to be saved 😁just drop special picture😁😁 ", " these days i have pimples thats cant sent Picture 😢😢😁😁", "why you not take picture from Snapchat😁😁", " im Going to selfie from snapchat😁😁"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
 
 if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "😍")) {
     return api.sendMessage("ㅤㅤㅤㅤㅤ\nWow Yours Eyes like ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n➢Free wifi signal🤣🤣♥︎ིྀིིིྀི\n", threadID);
   }; 
   mess = "{name}"
  
  if (event.body.indexOf("pic") == 0 || (event.body.indexOf("Pic") == 0)) {
    var msg = {
      body: `ㅤㅤ\n╭═════════════❤╮\n⏤͟͟͞͞◯K͠e͟e͟p͟ E͟Y͟E͟S͟ o͢n͢ m͢e͢😜\n       ⬳  😘😘 ᴵᵀˢ ᴹᴱ ᴾᴵᴷᴬ ᯤᯱᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n   ᶜᴿᴱᴬᵀᴱᴰ ᵇʸ  𓆩♥︎🅢wi͜͡et⑯😍𓆪\n╰❤═════════════╯\n      ○${name}࿐\n      ➣${rand}\nㅤ`
    }
    return api.sendMessage(msg, threadID, messageID);
    
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
