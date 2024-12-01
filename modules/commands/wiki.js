module.exports.config = {
	name: "wiki",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙈𝙧Aziz",
	description: "wikipedia search",
	commandCategory: "information",
	usages: "[en] [Information to look for]",
	cooldowns: 1,
	dependencies: {
        "wikijs": ""
    }
}

module.exports.languages = {
    "en": {
        "missingInput": `ㅤ\n╭┳≛✿≛╤╤ ────────►\n🅔𝗻𝘁𝗲𝗿 𝗪𝗵𝗮𝘁 𝗬𝗼𝘂 𝗡𝗲𝗲𝗱 𝗧𝗼\n➢  𝗦𝗲𝗮𝗿𝗰𝗵࿐\n➢How to use?\n➢${global.config.PREFIX}𝗪𝗶𝗸𝗶\n➢𝗦𝗼 𝗜𝘁𝘀 𝗰𝗮𝗻 𝗦𝗲𝗮𝗿𝗰𝗵 𝗙𝗼𝗿 𝘆𝗼𝘂\n➢Created By : 🅐𝘇𝗶𝘇\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`,
        "returnNotFound": "Can't find %1"
    }
}

module.exports.run = ({ event, args, api, getText }) => {
    const wiki = (global.nodemodule["wikijs"]).default;
    let content = args.join(" ");
    let url = 'https://en.wikipedia.org/w/api.php';
    if (args[0] == "en") {
        url = 'https://en.wikipedia.org/w/api.php'; 
        content = args.slice(1, args.length);
    }
    if (!content) return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
    return wiki({ apiUrl: url }).page(content).catch(() => api.sendMessage(getText("ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤ 𝗡𝗼𝘁 𝗙𝗼𝘂𝗻𝗱\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ", content), event.threadID, event.messageID)).then(page => (typeof page != 'ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤  Undecided \n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ') ? Promise.resolve(page.summary()).then(val => api.sendMessage(val, event.threadID, event.messageID)) : '');

          }