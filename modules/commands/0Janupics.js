module.exports.config = {
    name: "janu",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Aziz",
    description: "janu pics💋",
    commandCategory: "nsfw",
    usages: "",
    cooldowns: 3,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/UpW5OJJ.jpeg",
    "https://i.imgur.com/PEK3eF3.jpeg","https://i.imgur.com/kx6R6iq.jpeg"];
    var callback = () => api.sendMessage({ body: `Janu pics`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg") }, event.threadID, (err, info) => fs.unlinkSync(__dirname + "/cache/5.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};