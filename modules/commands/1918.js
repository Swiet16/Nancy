const API = "https://api.botcahx.biz.id/api/photooxy/naruto?apikey=Admin&text="
module.exports.config = {
	name: "logo18",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MrZues",
	description: "naruto logo",
	commandCategory: "text maker",
	usages: "naruto<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤ 🅛𝗲𝘁 𝐈\n➢  𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲 𝘆𝗼𝘂𝗿\n➭ 🄻🄾🄶🄾࿐\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤  𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑\n➢ 🅛𝗼𝗴𝗼\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return  api.sendMessage(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤Error! An error occurred\n➢Please try again later ${err.error} ${err.message}\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, event.threadID, event.messageID);
        })
};