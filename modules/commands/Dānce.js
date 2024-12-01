const fs = require("fs");

module.exports.config = {

	name: "dance",

    version: "1.0.1",

	hasPermssion: 0,

	credits: "MR AZIZ", 

	description: "no prefix",

	commandCategory: "No command marks needed",

	usages: "...",

    cooldowns: 5, 

};



module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {

	var { threadID, messageID } = event;

	if (event.body.indexOf("*dnçé")==0 || (event.body.indexOf("™×")==0 || (event.body.indexOf("Dānce")==0 || (event.body.indexOf("|π")==0)))) {

		var msg = {

				body: "➢Come I show you Dānce😜",

				attachment: fs.createReadStream(__dirname + `/noprefix/dance.mp4`)

			}

			api.sendMessage(msg, threadID, messageID);

		}

	}

	module.exports.run = function({ api, event, client, __GLOBAL }) {



          }