module.exports.config = {
    name: "imgur2",
    version: "30.0.10",
    hasPermssion: 0,
    credits: "Aziz",
    description: "imgur upload",
    commandCategory: "imgur",
    usages: "[reply to image]",
    cooldowns: 5,
   "axios": "",}
}; 
 
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
    if(!linkanh) return api.sendMessage('Please reply to image.', event.threadID, event.messageID)
const res = await axios.get(`https://dark-rulex-vip4.0xanupx0.repl.co/imgur?link=${encodeURIComponent(linkanh)}`);
var anup = res.data.uploaded.image;
    return api.sendMessage(`${anup}`, event.threadID, event.messageID);
 
}