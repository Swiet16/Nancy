const fs = require("fs");
module.exports.config = {
	name: "😖😩😫☹️",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mr.Zues", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs12",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😩")==0 || event.body.indexOf("😫")==0 || event.body.indexOf("😖")==0 || event.body.indexOf("☹️")==0) {
		var msg = {
				body: " w̲̅o̲̅m̲̅e̲̅n̲̅ r̲̅a̲̅p̲̅3 t̲̅h̲̅e̲̅ b̲̅r̲̅a̲̅i̲̅n̲̅ o̲̅f̲̅\n          😉😉🅼🅴🅽 👈😂😂",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }