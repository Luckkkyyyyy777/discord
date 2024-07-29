const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to V𝕀ꋊΛꌦ#1010
  const date = new Date();
  const options = {
    timeZone: 'Asia/Calcutta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1267406990641201202') // make your bot in discord.com/developers and paste the application ID here
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/deathhammer_') //Must be a youtube video link 
    .setState('700')
    .setName('ChoLucky')
    .setDetails(`쵸럭키 열혈팬`) //[${formatTime()}] and this for showing time of stream.
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1180754783343231046/1267129405591912461/2024-07-28_233944.png?ex=66a85278&is=66a700f8&hm=d50250e98f07e03b53121ded47e91aa33ae5ac483aa248c07082bea32bd1f3f0&') //You can put links in tenor or discord and etc. 
    .setAssetsLargeText('so good') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1180754783343231046/1267473451573182567/channels4_profile.jpg?ex=66a8ea23&is=66a798a3&hm=17ddaf55174bc4a876c18020110b6727e27ed764f019c4217af4eceedfa49c2c&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('왁타버스') //Text when you hover the Small image
    .addButton('CIDER BANG 듣기', 'https://www.youtube.com/watch?v=IhIDFiYWMbc&list=RDIhIDFiYWMbc&start_radio=1')
    .addButton('교멤사이퍼 듣기', 'https://www.youtube.com/watch?v=MYnaLe-nkPk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `쵸로키 열혈팬 되기`; //[${newTime}] set this for time 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);



// put your token in secrets