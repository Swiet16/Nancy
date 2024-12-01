
module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙈𝙧Aziz",
  description: "guide",
  commandCategory: "Noprefix",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["pre","Prefix","prefix", "command mark", "What is the prefix of the pika?","PREFIX"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
		const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤  🅜𝘆 🅢𝘁𝗮𝗿𝘁𝗲𝗿   𓆩𓊈${global.config.PREFIX}𓊉𓆪\n➢𝗙𝗼𝗿 𝗠𝗼𝗿𝗲 〖 ${global.config.PREFIX}𝗵𝗲𝗹𝗽 〗\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`)
      }
      else return out(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤  🅜𝘆 🅢𝘁𝗮𝗿𝘁𝗲𝗿  ☛${global.config.PREFIX}𓆪\n➢𝗙𝗼𝗿 𝗠𝗼𝗿𝗲 ➱${global.config.PREFIX}𝗵𝗲𝗹𝗽 ​𓆪࿐ \n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            give me your brain and put it in your head\ndo you know if it's the noprefix command?", event.threadID)
}
