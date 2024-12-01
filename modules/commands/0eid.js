module.exports.config = {
	name: "eid",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝐌𝐫.Aziz",
	description: "",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("May 4, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
    
    return api.sendMessage(`Time remaining until 𝙀𝙞𝙙 𝙪𝙡 𝙁𝙞𝙩𝙧\n» ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds«\n𝐁𝐞𝐬𝐭 𝐖𝐢𝐬𝐡𝐞𝐬 𝐅𝐨𝐫 𝐀𝐥𝐥 𝐌𝐲 𝐌𝐮𝐬𝐥𝐢𝐦 𝐁𝐫𝐨𝐭𝐡𝐞𝐫𝐬!\n\n(Credit :- Mr.Aziz)`, event.threadID, event.messageID);
}