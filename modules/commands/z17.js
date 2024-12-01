const fs = require("fs");
module.exports.config = {
	name: "☺️😌😇",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mr.Zues", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("☺️")==0 || event.body.indexOf("☺️")==0 || event.body.indexOf("😊")==0 {
		var msg = {
				body: "🅢𝘄𝗲𝗲𝘁 𝗦𝗺𝗶𝗹𝗲 💋\n Can I 𝗛𝗨𝗚 𝘆𝗼𝘂 𝗕𝗮𝗯𝗲 🥰",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("☺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }