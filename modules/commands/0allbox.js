module.exports.config = {
  name: 'allbox',
  version: '1.0.0',
  credits: 'MrAziz',
  hasPermssion: 2,
  description: '[Ban/Unban/Del/Remove] List[Data]',
  commandCategory: 'Admin',
  usages: '[page number/all]',
  cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, args, Threads, handleReply }) {
  const { threadID, messageID } = event;
  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/karachi").format("HH:MM:ss L");
  var arg = event.body.split(" ");
  var idgr = handleReply.groupid[arg[1] - 1];
  var groupName = handleReply.groupName[arg[1] - 1];
  switch (handleReply.type) {
    case "reply":
      {
        if (arg[0] == "ban" || arg[0] == "Ban") {
          const data = (await Threads.getData(idgr)).data || {};
          data.banned = 1;
          data.dateAdded = time;
          await Threads.setData(idgr, { data });
          global.data.threadBanned.set(idgr, { dateAdded: data.dateAdded });
          return api.sendMessage(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➢𝗡𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 \n➢    𝗙𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻«\n➢Group of Friends Have been\n➢ Banned For Using Me\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, idgr, () =>
            api.sendMessage(`${api.getCurrentUserID()}`, () =>
              api.sendMessage(` ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤🅑𝗮𝗻𝗻𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹\n➢${groupName}\n➢TID:${idgr}\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, threadID, () =>
                api.unsendMessage(handleReply.messageID))));
        }

        if (arg[0] == "unban" || arg[0] == "Unban" || arg[0] == "ub" || arg[0] == "Ub") {
          const data = (await Threads.getData(idgr)).data || {};
          data.banned = 0;
          data.dateAdded = null;
          await Threads.setData(idgr, { data });
          global.data.threadBanned.delete(idgr, 1);
          return api.sendMessage(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤🅝𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗳𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻«\n➢𝗧𝗵𝗶𝘀 🅖𝗰 Have Been 𝗥𝗲𝗺𝗼𝘃𝗲𝗱 𝗣𝗶𝗸𝗮\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, idgr, () =>
            api.sendMessage(`${api.getCurrentUserID()}`, () =>
              api.sendMessage(` ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤🅤𝗻𝗮𝗻𝗻𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹\n➢${groupName}\n➢TID:${idgr}\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ `, threadID, () =>
                api.unsendMessage(handleReply.messageID))));
        }

        if (arg[0] == "del" || arg[0] == "Del") {
          const data = (await Threads.getData(idgr)).data || {};
          await Threads.delData(idgr, { data });
          console.log(groupName)
          api.sendMessage(` ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤🅑𝗮𝗻𝗻𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹\n➢${groupName}\n➢TID:${idgr}\n➢𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗧𝗵𝗲 𝗗𝗮𝘁𝗮✅\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, event.threadID, event.messageID);
          break;
        }

        if (arg[0] == "out" || arg[0] == "Out") {
          api.sendMessage(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤ ➢🅝𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗳𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻\n➢𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗳𝗿𝗼𝗺 🅖𝗰\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`, idgr, () =>
            api.sendMessage(`${api.getCurrentUserID()}`, () =>
              api.sendMessage(` ㅤ\𝗻╭┳≛✿≛╤╤ ────────►\𝗻➤🅞𝘂𝘁  𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹\𝗻➢${groupname}\𝗻➢𝗧𝗜𝗗:${idgr}\𝗻╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\𝗻ㅤ `, threadID, () =>
                api.unsendMessage(handleReply.messageID, () =>
                  api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr)))));
          break;
        }
      }
  }
};
module.exports.run = async function ({ api, event, args }) {
  switch (args[0]) {
    case "all":
      {
        var threadList = [];
        var data, msg = "";
        /////////
        try {
          data = await api.getThreadList(100, null, ["INBOX"]);
        } catch (e) {
          console.log(e);
        }
        for (const thread of data) {
          if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: thread.messageCount });
        }
        /////////////////////////////////////////////////////
        //===== 𝗖𝗿𝗮𝘇𝘆 𝗜𝗺 =====//
        threadList.sort((a, b) => {
          if (a.messageCount > b.messageCount) return -1;
          if (a.messageCount < b.messageCount) return 1;
        })

        var groupid = [];
        var groupName = [];
        var page = 1;
        page = parseInt(args[0]) || 1;
        page < -1 ? page = 1 : "";
        var limit = 100;
        var msg = "🎭DS GROUP [Data]🎭\n\n";
        var numPage = Math.ceil(threadList.length / limit);

        for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
          if (i >= threadList.length) break;
          let group = threadList[i];
          msg += `${i + 1}. ${group.threadName}\n🔰𝐓𝐈𝐃: ${group.threadID}\n💌𝐌𝐞𝐬𝐬𝐚𝐠𝐞𝐂𝐨𝐮𝐧𝐭: ${group.messageCount}\n`;
          groupid.push(group.threadID);
          groupName.push(group.threadName);
        }
        msg += `--Page ${page}/${numPage}--\nDy ${global.config.PREFIX}allbox page number/all\n\n`

        api.sendMessage(msg + 'ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤Reply 𝗢𝘂𝘁, 𝗕𝗮𝗻, 𝗨𝗻𝗯𝗮𝗻\n Del[data] the order number\n to 𝗢𝘂𝘁, 𝗕𝗮𝗻, 𝗨𝗻𝗯𝗮𝗻, Del[data] that 🅖𝗰 \n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ', event.threadID, (e, data) =>
          global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: data.messageID,
            groupid,
            groupName,
            type: 'reply'
          })
        )
      }
      break;

    default:
      /*
          var threadList = [];
          var data, msg = "";
          /////////
          try {
              data = await api.getThreadList(1000, null, ["INBOX"]);
          } catch (e) {
              console.log(e);
          }
          for (const thread of data) {
              if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: thread.messageCount });
          }
          /////////////////////////////////////////////////////
          //===== sắp xếp từ cao đến thấp cho từng nhóm =====//
          threadList.sort((a, b) => {
              if (a.messageCount > b.messageCount) return -1;
              if (a.messageCount < b.messageCount) return 1;
          })

          var groupid = [];
          var groupName = [];
          var page = 1;
          page = parseInt(args[0]) || 1;
          page < -1 ? page = 1 : "";
          var limit = 10;
          var msg = "🎭DS NHÓM [Data]🎭\n\n";
          var numPage = Math.ceil(threadList.length / limit);

          for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
              if (i >= threadList.length) break;
              let group = threadList[i];
              msg += `${i+1}. ${group.threadName}\n🔰𝐓𝐈𝐃: ${group.threadID}\n💌MessageCount: ${group.messageCount}\n\n`;
              groupid.push(group.threadID);
              groupName.push(group.threadName);
          }
          msg += `--Trang ${page}/${numPage}--\nDùng ${global.config.PREFIX}allbox + số trang/all\n\n`

          api.sendMessage(msg + '🎭Reply Out, Ban, Unban, Del[data]+ số thứ tự để Out, Ban, Unban, Del[data] thread đó!', event.threadID, (e, data) =>
              global.client.handleReply.push({
                  name: this.config.name,
                  author: event.senderID,
                  messageID: data.messageID,
                  groupid,
                  groupName,
                  type: 'reply'
              })
          );
          break;
  }*/

      const { threadID, messageID } = event;
      var threadList = [];
      var data, msg = "";
      i = 1;
      /////////
      try {
		  //var listUserID = event.participantIDs.filter(ID => ID);
        data = global.data.allThreadID;
		
      } catch (e) {
        console.log(e);
      }
      for (const thread of data) {
        var nameThread = await global.data.threadInfo.get(thread).threadName || " ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤The name doesn't 𝗲𝘅𝗶𝘀𝘁 \n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ";
         threadList.push(`${i++}. ${nameThread} \n🔰𝐓𝐈𝐃: ${thread}`);
		  //console.log(`${nameThread}`);
      }
 
	   return api.sendMessage(threadList.length != 0 ? api.sendMessage(`ㅤ\n╭┳≛✿≛╤╤ ────────►\n➤There is currently ${threadList.length} group\n${threadList.join("\n")}\n╰┻≛✿≛╧╧═𝗜𝗺 🅟𝗶𝗸𝗮─►\nㅤ`,
          threadID,
          messageID
        ) : "There is currently no group!", threadID, messageID);
      
      }
  };
