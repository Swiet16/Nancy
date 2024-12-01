const axios = require("axios");
const fs = require("fs");
const { loadImage, createCanvas, registerFont } = require("canvas");

module.exports.config = {
    name: "fbcover2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐌𝐫.Aziz",
    description: "banner",
    commandCategory: "game",
    usages: "",
    cooldowns: 5
  };

module.exports.handleReply = async function({ api, event, handleReply }) {
    if (event.senderID != handleReply.author) return api.sendMessage('Chrysanthemum', event.threaID);
    let pathImg = __dirname + `/cache/avatar_5.png`;
    const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
    switch(handleReply.step) {
        case 1: {
            if(isNaN(event.body)) return api.sendMessage('ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤ 𝗘𝗻𝘁𝗲𝗿 𝗮 𝗡𝘂𝗺𝗯𝗲𝗿 \n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ', event.threadID, event.messageID)   
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤𝗖𝗵𝗼𝘀𝗲 a 𝗰𝗵𝗮𝗿 𝗪𝗶𝘁𝗵 𝗜𝗗 ${event.body},\n➢please reply to this msg\➢ to enter the main name\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, event.threadID, (err, info) => {
                global.client.handleReply.push({
                    step: 2,
                    name: this.config.name,
                    author: event.senderID,
                    idchart: event.body,
                    messageID: info.messageID
                });
            });
        }
        case 2: {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤𝗨 𝗰𝗵𝗼𝗼𝘀𝗲 𝗨𝗽𝗽𝗲𝗿 𝗻𝗮𝗺𝗲 ${event.body},\n➢ please reply to this \n➢msg to enter the name\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, event.threadID, (err, info) => {
                global.client.handleReply.push({
                    step: 3,
                    name: this.config.name,
                    author: event.senderID,
                    idchart: handleReply.idchart,
                    tenchinh: event.body,
                    messageID: info.messageID
                });
            });
        }
        case 3: {
            api.unsendMessage(handleReply.messageID);
            const tenchinh = handleReply.tenchinh
            const idchart = handleReply.idchart
            const subname = event.body
            registerFont(__dirname + `/cache/m1.ttf`, {
                family: "AUMS"
            });
            let img = await loadImage("https://i.imgur.com/Ch778s2.png");
            let avatar = await loadImage(`${lengthchar[idchart].imgAnime}`);
            let canvas = createCanvas(img.width, img.height);
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = lengthchar[idchart].colorBg;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(img, 512, 512, canvas.width, canvas.height);
            ctx.drawImage(avatar, 100, -290, 1500, 1600);
            ctx.textAlign = "start";
            ctx.font = "270px AUMS";
            ctx.fillStyle = "#fdfdfd";
            ctx.fillText(tenchinh, 1800, 500);
            ctx.beginPath();
            ////////////////////////////////////////
            ctx.textAlign = "start";
            ctx.font = "90px AUMS";
            ctx.fillStyle = "#fdfdfd";
            ctx.fillText(subname, 1800, 600);
            ctx.restore();
            ctx.save();
            ctx.beginPath();
            const imageBuffer = canvas.toBuffer();
            fs.writeFileSync(pathImg, imageBuffer);
            return api.sendMessage({
            body: `ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤ 🅨𝗼𝘂𝗿 𝗖𝗼𝘃𝗲𝗿 𝗣𝗶𝗰𝘁𝘂𝗿𝗲\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`,
            attachment: fs.createReadStream(pathImg)
            }, event.threadID, event.messageID);
        }
    }
}


module.exports.run = async function({ api, event }) {
    if (!fs.existsSync(__dirname + `/cache/m1.ttf`)) {
        let getfont = (await axios.get(`https://github.com/J-JRT/Font/blob/mainV2/ArialUnicodeMS.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/cache/ArialUnicodeMS.ttf`, Buffer.from(getfont, "utf-8"));
    };
    return api.sendMessage("Reply This Message To Select number", event.threadID, (err, info) => {
        global.client.handleReply.push({
            step: 1,
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        });
    });
    }