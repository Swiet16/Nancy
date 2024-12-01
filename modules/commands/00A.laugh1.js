const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "omg without prefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐌𝐫.Aziz",
  description: "",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Wow Wow You Attack 🤣🤣🤣","Be calm plz😂😂😂\n Later you become parents😁","😭😭😭😭😭😭","Im ready😘😘😘😘😘","Now we are in relationships😁","🥹🥹🥹🥹🥹","You are So Heavy 😁😁😁","Dont worries 😂😂😂","I have a Smart way to make you feel calm 😋😋😋","just subscribe my channel","like share comment.i dont want to share you 🥹","You are so naughty 😂😂","Im in charging mod 🔋🙄","Oh come on 😂Install Tiktok","Dont delete Old Fb account 🙄😂 inside have more Sexy Gc " ,"Im Hot🔥🔥🔥🔥","What a sexy Look","Its not possible we make a Company 😋😋","Just play with me Ludo 🔥","Tomorrow i give you Gift","Its night now 🤣🤣🤣You dont know coz you always in phone","Lets play Taki Taki😘😘","If your papa know u have messenger\n Then What will Happned","You are so bad😁","😁😁😁😁😁😁Enough","Im your's now😁","Online Gf its ok\nOnline bf its ok\nBut dont make Online Kids😂","Im Going Other Gc😁😁","When u Sleep,Coz im so tired from you😁","You are Born to Distrub me😁😁","Im innocent 🤪🤪🤪","Can We make One Round😋😋😋😋😋","Im Bored To Senn you😁😁😁","After breakup Dont Post Sad😁😁","You make crazy 😂😂🤪","Today my birthday\nSent me 10000$ 😁😁","I have P0R!N,can i Sent😁😁","Rip😂😂😂","No One Talk you,\nThats you Msg me"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"
  
  if ((event.body.toLowerCase() == "oh") || (event.body.toLowerCase() == "wow")) {
    var msg = {
      body: `ㅤ\n     𓆩🅟𝗶𝗸a͜͡巛😍ᯤᯱᯱᯱ࿐\n╭══════════════❤╮\n ➥${rand}\n╰❤══════════════╯\nㅤ`
    }
    return api.sendMessage(msg, threadID, messageID);
    
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
