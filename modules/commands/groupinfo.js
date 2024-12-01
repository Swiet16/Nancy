const fs = require("fs");
const request = require("request");
module.exports.config = {
	name: "groupinfo",
	version: "1.0.0", 
	hasPermssion: 1,
	credits: "MrAziz",
	description: "View your box information",
	commandCategory: "Box", 
	usages: "groupinfo", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	let threadInfo = await api.getThreadInfo(event.threadID);
	var memLength = threadInfo.participantIDs.length;
	let threadMem = threadInfo.participantIDs.length;
	var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
     	var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
	var nam = gendernam.length;
    var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let u = threadInfo.nicknames;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	let sex = threadInfo.approvalMode;
			var pd = sex == false ? 'Turned off' : sex == true ? 'Turned on' : 'Kh';
			var callback = () =>
				api.sendMessage(
					{
						body: `ㅤㅤ\n
╭────༺😜༻────╮
  ➤; 𝗚𝗿𝗼𝘂𝗽 𝗜𝗻𝗳𝗼𝗺𝗮𝘁𝗶𝗼𝗻.↶
       ᵀᴴᴱ ᵇᴼᵀ ᴱᴰᴵᵀᴱᴰ ᵇʸ ᴬᶻᴵᶻ
╰──────♡──────╯ 
╭ᯤᯱᯱᯱᯱᯱᯱᯱᯤᯱᯱᯱ✿≛╤╤────────►
✿≛ 🅖𝗖 𝗡𝗮𝗺𝗲
  ${threadName}\n✿≛ Group ID:
     ${id}\n✿≛ Approval: ${pd}\n✿≛ 🅔moji: ${icon}\n✿≛ 🅣Otal ${threadMem} members\n✿≛🅜ales🦸‍♂️: ${nam}\n✿≛ 🅕emales🦸‍♀️: ${nu} \n✿≛ With ${qtv} Kangroo\n✿≛ 🅣otal Msgs: ${sl} msgs
 ╰┻≛✿≛╧╧═───────►\n\n\nㅤㅤ`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());
}