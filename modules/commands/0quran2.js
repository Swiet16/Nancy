module.exports.config = {
	name: "quran2",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Koja Babu", //don't change the credits please
	description: "the Holy Book.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.ibb.co/x8WC0Bg/4ddf4aa5b820ccf5a453eee2ef5dbccf.jpg", "https://i.imgur.com/Pe8HXHh.jpeg", "https://i.imgur.com/lO0TxjY.jpeg"];
var callback = () => api.sendMessage({body:`➢ الْجَنّٰتِ ۚ لَهُمْ مَّا یَشَآءُوْنَ عِنْدَ رَبِّهِمْ ؕ ذٰلِكَ هُوَ الْفَضْلُ الْكَبِیْرُ۝\n\nالقرآن، الشُّوْرٰی، 42: 22\n\nاور جو لوگ ایمان لائے اور نیک اعمال کرتے رہے وہ بہشت کے چَمنوں میں ہوں گے، اُن کے لئے اُن کے رب کے پاس وہ (تمام نعمتیں) ہوں گی جن کی وہ خواہش کریں گے، یہی تو بہت بڑا فضل ہے۔\n\nAnd they who believe and persist in pious deeds will be in the Gardens of Paradise. There will be for them with their Lord (all those blessings) which they will long for. That is indeed a great bounty.\n\n(Credit :- Mr. Zues)≼≽
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };