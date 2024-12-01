const fs = require("fs");
module.exports.config = {
	name: "Swiet16",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mr Aziz", 
	description: "Aziz Info",
	commandCategory: "no prefix",
	usages: "AzizOwn",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("18oct")==0 || event.body.indexOf("Azizjanu")==0 || event.body.indexOf("JanuAziz")==0 || event.body.indexOf("Jānu")==0) {
		var msg = {
				body: "ㅤ\n╭┳≛✿≛╤╤ ────────►\n✿≛ ᯓ​ 🅐𝘇𝗶𝘇 ≛巛❥►\n╰┻≛✿≛╧╧═𝐒𝘄𝗶𝗲𝘁𝟭𝟲─►\n    𝐁𝐞𝐢𝐧𝐠  𝐈𝐦𝐦𝐚 𝐊𝐢𝐧𝐠\n       ⁱᵐᵐᵃ ᵏⁱˡˡⁱⁿᵍ ᵖᵉʳˢᵒⁿ ʷʰᵒ\n      ʲᵘˢᵗ ᵐᵃᵏⁱⁿᵍ  ʷʳᵒⁿᵍ\n   ➢  ᯓ  𝐈ᴍ ᴀ 𝐑ᴀᴘᴘᴇʀ,巛😜\n   ➢        ᯓ   𝐘ᴏᴜᴛᴜʙᴇʀ巛🥰\n   ➢       ᯓ  𝐄ᴅɪᴛᴏʀ巛😍\n   ➢      ᯓ ᵛⁱˢⁱᵗ 𝐖𝐞𝐛𝐬𝐢𝐭𝐞巛\nhttps://𝐬𝐰𝐢𝐞𝐭𝟏𝟔.𝐟𝐚𝐬𝐡𝐢𝐨𝐧.𝐛𝐥𝐨𝐠\nㅤ",	
      attachment: fs.createReadStream(__dirname + `/noprefix/Aziz.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }