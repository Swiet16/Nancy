const fs = require("fs");
module.exports.config = {
	name: ".kill",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mr.Zues", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😋",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(".kil")==0 || event.body.indexOf(".KILL")==0 || event.body.indexOf(".Kill")==0 || event.body.indexOf(".kill")==0) {
		var msg = {
				body: "😈👿😈👿Ready For Die😈😈👿",
				attachment: fs.createReadStream(__dirname + `/noprefix/kill.gif`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("⛏️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }