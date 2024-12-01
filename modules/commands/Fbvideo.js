const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
    name: "fbvideo",
    version: "30.0.10",
    hasPermission: 0,
    credits: "ATF-Team",
    description: "Download Video From Facebook",
    commandCategory: "media",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "axios": "",
        "request": ""
    },
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID, senderID, body } = event;
    let text = args.join(" ");
    if (!text) {
        return api.sendMessage("Please enter a Facebook video link.", threadID, messageID);
    }
    const link = args.join(" ").trim().split("|")[0];
    const res = await axios.get(`https://dark-rulex-vip4.0xanupx0.repl.co/v2/fbget?url=${link}`);
    const url = res.data.data.medias[0].url;
    const callback = () => api.sendMessage({
        body: "",
        attachment: fs.createReadStream(__dirname + "/cache/fb.mp4")
    }, threadID, () => fs.unlinkSync(__dirname + "/cache/fb.mp4"), messageID);
    return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname + '/cache/fb.mp4')).on('close', () => callback());
};