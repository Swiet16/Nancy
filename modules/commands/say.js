module.exports.config = {
	name: "say",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙈𝙧Aziz",
	description: "text to voice",
	commandCategory: "media",
	usages: `ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤please add a language \n➢or leave it blank\n➢How to use?\n➢𓆩${global.config.PREFIX}say࿐\n➢Example:\n${global.config.PREFIX}say fil im pretty\n\n➢Note: please use a shortcut Words\n➩ <ru, en, ko, ja, fil>\n➢voice available\n➫𝗳𝗶𝗹 = filipino\n➬𝗷𝗮 = japan\n➬𝗿𝘂 = russia\n➬𝗸𝗼 = korea\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`,
	cooldowns: 5,
	dependencies: {
		"path": "",
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, args }) {
	try {
		const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
		const { resolve } = global.nodemodule["path"];
		var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
		var languageToSay = (["ru","en","ko","ja","fil"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : global.config.language;
		var msg = (languageToSay != global.config.language) ? content.slice(3, content.length) : content;
		const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
		await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`, path);
		return api.sendMessage({ attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path), event.messageID);
	} catch (e) { return console.log(e) };
      }