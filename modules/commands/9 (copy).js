module.exports.config = {
  name: "Text1",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrzuesXxX",
  description: "text generator",
  commandCategory: "image",
  usages: "[text]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var juswa = args.join(" ");
  if (!juswa) return api.sendMessage(`Add text lmao`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://api.reikomods.repl.co/textpro/halloween?text=${encodeURIComponent(juswa)}`).then(res =>
    {
      //let status = res.data.status,
       // url = res.data.result.image_url
      var result = res.data.result;
      let callback = function ()
      {
        api.sendMessage(
        {
          body: `Your wish is my command`,
          attachment: fs.createReadStream(__dirname + `/cache/covidtk.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/covidtk.png`), event.messageID);
      };
      request(encodeURI(result)).pipe(fs.createWriteStream(__dirname + `/cache/covidtk.png`)).on("close", callback);
    })
  }
}