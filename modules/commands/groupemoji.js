module.exports.config = {
	name: "setemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Aziz",
	description: "Change your group Emoji",
	commandCategory: "Box", 
	usages: "groupemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("You have not entered Emoji 💩💩", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`➢Emoji Changed to: ${emoji}`, event.threadID, event.messageID));
}