module.exports.config = {
	name: "Ai",
	version: "1.0.9",
	hasPermssion: 0,
	credits: "AZIZ",
	description: "Talk with AI Pika",
	commandCategory: "Ai",
	usages: "[text/message/chat]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const Chatbot  =  require("discord-chatbot");

if (!args[0]) {api.sendMessage("Please enter a message!",event.threadID, event.messageID)}
  else{
 var mess = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
const chatbot  =  new  Chatbot({name: "pika", gender: "fun"});
    const res = await chatbot.chat(mess).catch(e => console.log(e));

 if(res === "My dear great") {
    api.sendMessage(`I made by master AZIZ, also known as winnerr`, event.threadID, event.messageID)
    return;
              }   
      if(res === "I born In Aziz Phone") {
    api.sendMessage(`I live here in Everyone Heart`, event.threadID, event.messageID)
    return;
              } 
      if(res === "My favorite anime is <em>Ghost in the Shell</em>") {
    api.sendMessage(`My favorite anime is Zero no Tsukaima, what about you?`, event.threadID, event.messageID)
    return;
              }     
      if(res === "I can't think of any. You suggest anime.") {
    api.sendMessage(`I suggest you to watch Boku no Pico, 10/10 wholesome.`, event.threadID, event.messageID)
    return;
              }     
            if(res === "I was created by Aziz") {
    api.sendMessage(`I was created by AZIZ`, event.threadID, event.messageID)
    return;
              }     
              
              if(res === "I obey AZIZ") {
    api.sendMessage(`I obey Aziz`, event.threadID, event.messageID)
    return;
              }     
 api.sendMessage(res, event.threadID, event.messageID)
  }
}