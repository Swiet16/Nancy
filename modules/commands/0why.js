const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "why,whom",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐌𝐫.Aziz",
  description: "why.whom",
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

  var tl = ["What what 😳😳","I know You Kangroo\n Sorry its just joke 🤣🤣","Too Much You 😋😋😋","Take For me Pepsi 😋🙄","Okay Bye We Breakup😢😢","You know That Tomorrow my Birthday 🙄🙄","Im Happy without You okay 🙄🙄","Tomorrow i go to shop buy my 8G Net","Why you dont know How play Airplane ✈️🛫","Petrol is finished","Battry low now 🪫🪫🪫", " I want to go school and ask why you passd This student🫣","You dont know Im Owner Here", "When me born 🫣You was sleeping"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
 
 if ((event.body.toLowerCase() == "wait") || (event.body.toLowerCase() == "Wait")) {
     return api.sendMessage("ㅤㅤㅤㅤㅤ\nWow Wow always busy\n➢plz Don't say lie🤣🤣♥︎ིྀིིིྀི\n", threadID);
   }; 
   mess = "{name}"
  
  if (event.body.indexOf("whom") == 0 || (event.body.indexOf("Why") == 0)) {
    var msg = {
      body: `○${name}࿐\n      ➣${rand}\nㅤ`
    }
    return api.sendMessage(msg, threadID, messageID);
    
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
