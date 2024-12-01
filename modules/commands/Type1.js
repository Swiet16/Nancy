module.exports.config = {
	name: "type",
	version: "1.1.1",
	hasPermssion: 2,
	credits: "AZIZ",
	description: "Imitate Your Chat",
	commandCategory: "Imitation",
	usages: "[text/message/chat]",
	cooldowns: 4
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("🙄Enter Text", event.threadID, event.messageID)
	else api.sendMessage(`ㅤ\n╭═════════════❤╮\n➢${say} 
╰❤═════════════╯\nㅤ`, event.threadID, event.messageID);
}
