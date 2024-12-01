module.exports.config = {
	name: "emoji",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Aziz",
	description: "Change emoji in group",
	commandCategory: "Group",
	usages: "emoji [emoji]",
	cooldowns: 3
};
 
module.exports.run = async function({ api, event, args }) {
	const emoji = args.join(" ")
	api.changeThreadEmoji(`${args.join(" ")}`, event.threadID, event.messagaID);
}