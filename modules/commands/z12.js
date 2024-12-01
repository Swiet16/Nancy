const fs = require("fs");
module.exports.config = {
	name: "😈👿👹🫤",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Mr.Zues", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs13",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👿")==0 || event.body.indexOf("👹")==0 || event.body.indexOf("😈")==0 || event.body.indexOf("🫤")==0) {
		var msg = {
				body: "➢😂s̲̅a̲̅n̲̅a̲̅ a̲̅l̲̅l̲̅ h̲̅a̲̅v̲̅e̲̅ d̲̅e̲̅v̲̅i̲̅l̅\nDΣ∇IL ΣMΩJI",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }