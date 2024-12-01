module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 1, 
	credits: "MrAziz",
	description: "Restart the Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`ㅤ    𓆩🅟𝗶𝗸a͜͡巛😍ᯤᯱᯱᯱ࿐ \n‎╭═════════════❤╮\n➢Muuah💋💋Aziz\n➤I Restarting 😜😜\n➢Just Wait😁Don't Flirt\n‎╰❤═════════════╯\nㅤ‎`, threadID, () => process.exit(1));
}