module.exports.config = {
  name: 'bard',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'Deku',
  description: 'Bard',
  commandCategory: '....',
  usages: '[prompt]',
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
 const b = require('axios');
  let txt = args.join(" ");
  const res1 = await api.getUserInfo(event.senderID)
var name = res1[event.senderID].name
try {
  if (!txt){ return api.sendMessage(`Hi ${name}, I'm Bard. I can give real-time information.`, event.threadID, event.messageID)
}
api.sendMessage(`🔍"${txt}"`,event.threadID, event.messageID);
  const res = await b.get(`https://api.orochiai.repl.co/bard?text=${txt}`);
let resu = res.data;
api.sendMessage(resu, event.threadID, event.messageID)
    } catch (err){
return api.sendMessage("Error", event.threadID, event.messageID)
     }  
}