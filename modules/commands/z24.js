const fs = require("fs");
module.exports.config = {
	name: "😡",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Aziz", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🤬😡😠😤",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😡")==0 || event.body.indexOf("😠")==0 || event.body.indexOf("🤬")==0 || event.body.indexOf("😤")==0) {
		var msg = {
				body: "➢🅖🅞 and rest in (𝗳𝗿𝗶𝗱𝗴𝗲😚) 𝗥𝗲𝗳𝗿𝗶𝗴𝗲𝗿𝗮𝘁𝗼𝗿,\n your will cool soon babe😴🥀",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌬️", event.messageID, (err) => {}, true)
		}
  if ( event.body.indexOf("Chand")==0 || event.body.indexOf("CHAND")==0 || event.body.indexOf("chand")==0) {
		var msg = {
				body: "➢Always chand Chand\n➢He Is My Crush",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
   }
  if (event.body.indexOf("Aziz")==0 || event.body.indexOf("Winnerr")==0 || event.body.indexOf("Win")==0 || event.body.indexOf("WINNERR")==0 || event.body.indexOf("Admin")==0 || event.body.indexOf("King")==0 || event.body.indexOf("AZIZ")==0 || event.body.indexOf("Power")==0 || event.body.indexOf("aZIZ")==0 || event.body.indexOf("win")==0 || event.body.indexOf("WiN")==0 || event.body.indexOf("@Aziz")==0 || event.body.indexOf("aziz")==0) {
		var msg = {
				body: "➢💋💖Aziz is my  Love\n➢My Develover 😍💋"
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
   }
event;
	if (event.body.indexOf("🤢")==0 || event.body.indexOf("🤮")==0 || event.body.indexOf("🤒")==0 || event.body.indexOf("🤧")==0) {
		var msg = {
				body: "➢🅖🅞 𝗘𝗮𝘁 𝗗𝗶𝘀𝗽𝗿𝗶𝗻𝗲 \n  𝗧𝗮𝗯𝗹𝗲𝘁😁😁😁\n𝘁𝗵𝗲𝗻 𝘀𝗼𝗼𝗻 𝘆𝗼𝘂 𝗕𝗲 𝗼𝗸𝗮𝘆\n➢Care Your Health😚💋",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💊", event.messageID, (err) => {}, true)
      }
	if (event.body.indexOf("😽")==0 || event.body.indexOf("💋")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("😘")==0) {
		var msg = {
				body: "ㅤ\n😋😋😋😋ᯤᯱᯱᯱᯱᯱᯱᯱ\n𝗔𝘆𝗲𝗲  S͠O Y͠U͠M͠M͠M͠Y͠  𝗞I͠S͠S͠ \n                🤤🤤🤤🤤🤤🤤\nㅤ",
				
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
  }
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }