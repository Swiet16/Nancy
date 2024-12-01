module.exports.config = {
	name: "group",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
    description: "Parent group settingst.",
	commandCategory: "box",
	usages: "[name/emoji/admin/image/info]",
	cooldowns: 1,
	dependencies: {
		"request":"",
		"fs-extra":""
}
};

module.exports.run = async({api, event, args}) => {
	const fs = global.nodemodule["fs-extra"];
	const request = global.nodemodule["request"];
	 if (args.length == 0) return api.sendMessage(`╭────────────────♥︎╮\n➤YOU CAN USE\n➥emoji ⥤[icon]\n➥gcname [Gc name Change]\n➥set [rep any image]\n➥gcadmin [tag]\n➥/groupinfo => All group INFORMATION\n╰♥︎───────────────╯
`, event.threadID, event.messageID);


	if (args[0] == "name") {
var content = args.join(" ");
var c = content.slice(4, 99) || event.messageReply.body;
api.setTitle(`${c } `, event.threadID);
 }
	if (args[0] == "emoji") {
const name = args[1] || event.messageReply.body;
api.changeThreadEmoji(name, event.threadID)

 }
if(args[0] == "me"){
	 if (args[1] == "admin") {
		const threadInfo = await api.getThreadInfo(event.threadID)
		const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
		if(!find) api.sendMessage("Pika needs to throw admin to use ?", event.threadID, event.messageID)
	  else if(!global.config.ADMINBOT.includes(event.senderID)) api.sendMessage("Cunt powers ?", event.threadID, event.messageID)
     else api.changeAdminStatus(event.threadID, event.senderID, true);
     }
} 
if (args[0] == "admin") {

if (args.join().indexOf('@') !== -1){
	 namee = Object.keys(event.mentions)}
else namee = args[1]
if (event.messageReply) {namee = event.messageReply.senderID}

const threadInfo = await api.getThreadInfo(event.threadID)
const findd = threadInfo.adminIDs.find(el => el.id == namee);
const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

if (!finddd) return api.sendMessage("You are not a box admin ?", event.threadID, event.messageID);		
if(!find) {api.sendMessage("Don't throw the admin using the cock?", event.threadID, event.messageID)}
if (!findd) {api.changeAdminStatus(event.threadID, namee, true);}
else api.changeAdminStatus(event.threadID, namee, false)
 }

if (args[0] == "image") {

if (event.type !== "message_reply") return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ You must reply to a certain audio, video, or photo", event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(`Please reply only one audio, video, photo!`, event.threadID, event.messageID);
	 var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));	
      return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      };
if (args[0] == "info") {
		var threadInfo = await api.getThreadInfo(event.threadID);
		let threadMem = threadInfo.participantIDs.length;
	var gendernam = [];
	var gendernu = [];
	var nope = [];
	for (let z in threadInfo.userInfo) {
		var gioitinhone = threadInfo.userInfo[z].gender;

		var nName = threadInfo.userInfo[z].name;

		if (gioitinhone == 'MALE') {
			gendernam.push(z + gioitinhone);
		} else if (gioitinhone == 'FEMALE') {
			gendernu.push(gioitinhone);
		} else {
			nope.push(nName);
		}
	}
	var nam = gendernam.length;
	var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	var listad = '';
	var qtv2 = threadInfo.adminIDs;
	for (let i = 0; i < qtv2.length; i++) {
const infu = (await api.getUserInfo(qtv2[i].id));
const name = infu[qtv2[i].id].name;
		listad += '•' + name + '\n';
	}
	let sex = threadInfo.approvalMode;
	var pd = sex == false ? 'Turn off' : sex == true ? 'Turn on' : 'Kh';
	var pdd = sex == false ? '❎' : sex == true ? '✅' : '⭕';
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
 ╰┻≛✿≛╧╧═───────►\n\n\nㅤ`,
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
}