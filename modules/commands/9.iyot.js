const fs = require("fs");
module.exports.config = {
	name: ".iyot",
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
	if (event.body.indexOf(".Iyot")==0 || event.body.indexOf(".horny")==0 || event.body.indexOf(".Horny")==0 || event.body.indexOf(".iyot")==0) {
		var msg = {
				body: "Lets we try darling let's iyot",
				attachment: fs.createReadStream(__dirname + `/medit/Rape18.gif`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }