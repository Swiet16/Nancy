const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝙈𝙧Aziz",
    description: "",
    commandCategory: "admin",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Karachi").format("DD/MMM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤  🅐𝘁𝘁𝗲𝗻𝘁𝗶𝗼𝗻\n➢[ User Reply ]\n➢  『𝗧𝗶𝗺𝗲』\n➢${gio}\n--------------\n≫   『Reply』\n➢ 𓆩${body}࿐\n➢User Name ${name}\n➢From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤ 𝐌𝐬𝐠 𝐅or You\n➢[ User Reply ]\n--------------\n➢  『𝗧𝗶𝗺𝗲』\n➢${gio}\n➢ 『Reply』 \n➢${body}\n➢User Name: ${name} \n➢From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤ Msg From Owner\n➢『𝗧𝗶𝗺𝗲\n➢${gio}\n➢『Message』\n☛${body}࿐\n➢ 𝗢𝘄𝗻𝗲𝗿 🅐𝘇𝗶𝘇♡\n--------------\n➢(Reply to this 𝗠𝗲𝘀𝘀𝗮𝗴𝗲\n if you want to respond\n to this Announce)\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `ㅤ\n╭┳≛✿≛╤╤ ────────►𝗠𝘀𝗴 𝗙𝗿𝗼𝗺 𝗢𝘄𝗻𝗲𝗿\n➤${body}\n➢『𝗧𝗶𝗺𝗲』\n➢${gio}\n➢ 𝗢𝘄𝗻𝗲𝗿 🅐𝘇𝗶𝘇 \n➢(Reply to this 𝗠𝗲𝘀𝘀𝗮𝗴𝗲\n if you want to respond\n to this Announce\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/karachi").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤  🅐𝘁𝘁𝗲𝗻𝘁𝗶𝗼𝗻\n➢[ User Reply ]\n➢  『𝗧𝗶𝗺𝗲』\n➢${gio}\n--------------\n≫   『Reply』\n➢ 𓆩${body}࿐\n➢User Name ${name}\n➢From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `ㅤㅤ\n╭┳≛✿≛╤╤ ────────►\n➤  🅐𝘁𝘁𝗲𝗻𝘁𝗶𝗼𝗻\n➢[ User Reply ]\n➢  『𝗧𝗶𝗺𝗲』\n➢${gio}\n--------------\n≫   『Reply』\n➢ 𓆩${body}࿐\n➢User Name ${name}\n➢From Group ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`Send to ${can} thread, not send to ${canNot} thread`, threadID);
}