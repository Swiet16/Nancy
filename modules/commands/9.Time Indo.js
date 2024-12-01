module.exports.config = {
	name: "indo",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "See what time it is",
	commandCategory: "Other", 
	usages: "time", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time= moment.tz("Asia/Jakarta").format("LLL"); 
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    return api.sendMessage(`ㅤ\nㅤㅤ       ٭CLOCK INFOᯤᯱᯱᯱᯱᯱᯱ ᯤᯱᯱᯱ\n    ♥︎𝐓𝐈𝐌𝐄 𝐈𝐍 𝐈𝐍𝐃𝐎𝐍𝐄𝐒𝐈𝐀 \n╭──────────────♥︎╮\n➩  𝐃𝐀𝐓𝐄 & 𝐓𝐈𝐌𝐄  \n➥${time}\n╰♥︎──────────────╯  ★\n                                 ❤❤❤\n➢${name}࿐\n   ❍⌇─➭ENJOY ALL MOMENTS\n😘😘😘\n★\nㅤ`, event.threadID, event.messageID)
}