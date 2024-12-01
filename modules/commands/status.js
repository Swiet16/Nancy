module.exports.config = {
  name: "status",
  version: "1.0.0",
  hasPermssion: 0,
  credits:  " AZIZ",
  description: "log",
  commandCategory: "System",
  usages: "",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `OFF` : rankup = `${rankup}`;
  resend == null ? resend = `OFF` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `ON` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `ON` : guard = `${guard}`;
  antiout == null ? antiout = `On` : antiout = `${antiout}`;
return api.sendMessage(`✩≻──STATUS─────\n\n╭───────────♥︎╮\n➥ Log: ${log}\n➥ Rankup: ${rankup}\n➥ Resend: ${resend}\n➥ Tag admin: ${tagadmin}\n➥ Antirobbery ${guard}\n➥ Antiout: ${antiout}\n╰♥︎───────────╯`, threadID, messageID);
}
