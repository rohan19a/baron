const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
const token = process.env.DISCORD_BOT_SECRET;


//prints when bot is online
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

//sets status
client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Recking Libtards',
            type: "STREAMING",
            url: "https://www.twitch.tv/videos/323763410"
        }
    });
});

//reacts to wills messages with "chillay" emote
client.on("message", message => {
  if (message.author.id === "422481968660348969") {
    message.react("514548011469111311")
  }
});

//Greets new member
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`Welcome to Seal Team 69, ${member}`);
  let role1 = member.guild.roles.find(r => r.name === "Soldiers");
  member.addRole(role1)
  member.send("Welcome to the Official Seal Team 69 Discord Server");
});


//timeout for soldiers
client.on("message", (message) => {
  if (message.content.startsWith("!timeout")) {
    let role = message.guild.roles.find(r => r.name === "Time-Out");
    if (message.member.roles.has(role.id)) {
      const embed = new RichEmbed()
        .setTitle('Error 69420')
        .setColor(0xFF0000)
        .setDescription('when in timeout you cannot give timeouts');
      message.channel.send(embed);
    }
    let role3 = message.guild.roles.find(r => r.name === "Soldiers");
    if (message.member.roles.has(role3.id)) {
      const embed = new RichEmbed()
        .setTitle('Error 69420')
        .setColor(0xFF0000)
        .setDescription('Sorry chief, but youre not high enough rank to  timeout people. This command must be done by an varsity or above');
      message.channel.send('Not Correct Rank');
    }
    let role2 = message.guild.roles.find(r => r.name === "Varsity");
    if (message.member.roles.has(role2.id)) {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
      var member= message.mentions.members.first();
      member.setNickname('Timeout')
        .then(console.log)
        .catch(console.error);
      let role = message.guild.roles.find(r => r.name === "Time-Out");
      let role1 = message.guild.roles.find(r => r.name === "Soldiers");
        member.removeRole(role1)
          .then(console.log)
          .catch(console.error);
        member.addRole(role)
            .then(console.log)
            .catch(console.error);
    }
  }
});

//ending timeout for soldiers
client.on("message", (message) => {
  if (message.content.startsWith("!end")) {
    let role = message.guild.roles.find(r => r.name === "Time-Out");
    if (message.member.roles.has(role.id)) {
      const embed = new RichEmbed()
        .setTitle('Error 69420')
        .setColor(0xFF0000)
        .setDescription('tf you thinking you in timeout you trying to get out? nice try');
      message.channel.send(embed);
    }
    let role3 = message.guild.roles.find(r => r.name === "Soldiers");
    if (message.member.roles.has(role3.id)) {
      const embed = new RichEmbed()
        .setTitle('Error 69420')
        .setColor(0xFF0000)
        .setDescription('Sorry chief, but youre not high enough rank to end the timeout for people. This command must be done by an varsity or above');
      message.channel.send(embed);
    }
    let role2 = message.guild.roles.find(r => r.name === "Varsity");
    if (message.member.roles.has(role2.id)) {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
      var member= message.mentions.members.first();
      let role = message.guild.roles.find(r => r.name === "Time-Out");
      let role1 = message.guild.roles.find(r => r.name === "Soldiers");
        member.removeRole(role)
          .then(console.log)
          .catch(console.error);
        member.addRole(role1)
            .then(console.log)
            .catch(console.error);
    }
  }
});

//timeout for varsity and private first class
client.on("message", (message) => {
  if (message.content.startsWith("!yeet")) {
    let role = message.guild.roles.find(r => r.name === "Time-Out");
    if (message.member.roles.has(role.id)) {
      const embed = new RichEmbed()
        .setTitle('Error 69420')
        .setColor(0xFF0000)
        .setDescription('A person in timeout cannot start a timeout');
      message.channel.send(embed);
    }
    let role3 = message.guild.roles.find(r => r.name === "Soldiers");
    if (message.member.roles.has(role3.id)) {
      const embed = new RichEmbed()
        .setTitle('Error 69420')
        .setColor(0xFF0000)
        .setDescription('Sorry chief, but youre not high enough rank to timeout people. This command must be done by an admin or above');
      message.channel.send(embed);
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    let role1 = message.guild.roles.find(r => r.name === "Private First Class");
    if (message.member.roles.has(role1.id)) {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
      var member= message.mentions.members.first();
      member.setVoiceChannel('521489555145228316')
        .then(() => console.log(`Moved ${member.displayName}`))
        .catch(console.error);
      member.setNickname('Timeout')
        .then(console.log)
        .catch(console.error);
      let role1 = message.guild.roles.find(r => r.name === "Private First Class");
      let role = message.guild.roles.find(r => r.name === "Time-Out");
        member.removeRole(role1)
          .then(console.log)
          .catch(console.error);       
        member.removeRole(role2)
          .then(console.log)
          .catch(console.error);
        member.addRole(role)
          .then(console.log)
          .catch(console.error);
        member.removeRole(role1)
          .then(console.log)
          .catch(console.error);
    }
  }
});

//end timeout for varsity and private first class
client.on("message", (message) => {
  if (message.content.startsWith("!unyeet")) {
    let role = message.guild.roles.find(r => r.name === "Time-Out");
    if (message.member.roles.has(role.id)) {
      const embed = new RichEmbed()
        .setTitle('Error 69420')
        .setColor(0xFF0000)
        .setDescription('A person in timeout cannot end a timeout');
      message.channel.send(embed);
    }
    let role3 = message.guild.roles.find(r => r.name === "Soldiers");
    if (message.member.roles.has(role3.id)) {
      const embed = new RichEmbed()
        .setTitle('Error 69420')
        .setColor(0xFF0000)
        .setDescription('A soldier cannot end the timeout of a role above him, user must have the role admin or above to preform this action');
      message.channel.send(embed);
    }
    let role2 = message.guild.roles.find(r => r.name === "Private First Class");
    if (message.member.roles.has(role2.id)) {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
      var member= message.mentions.members.first();
      member.setVoiceChannel('521489101543702544')
        .then(() => console.log(`Moved ${member.displayName}`))
        .catch(console.error);
      member.setNickname('')
        .then(console.log)
        .catch(console.error);
      let role1 = message.guild.roles.find(r => r.name === "Private First Class");
      let role2 = message.guild.roles.find(r => r.name === "Varsity");
      let role = message.guild.roles.find(r => r.name === "Time-Out");
        member.removeRole(role)
          .then(console.log)
          .catch(console.error);        
        member.addRole(role2)
          .then(console.log)
          .catch(console.error);
        member.addRole(role1)
          .then(console.log)
          .catch(console.error);
        member.removeRole(role)
          .then(console.log)
          .catch(console.error);
    } 
  }
});

client.on("message", (message) => {
  const channel = message.guild.channels.find(ch => ch.name === 'general');
  if (message.channel.id != '521489559712956416') {
    if (message.content.startsWith("-")) {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if (message.author == '234395307759108106' && message.channel.id != '521489559712956416') {
      message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!promote")) {
    let role = message.guild.roles.find(r => r.name === "Admin");
    if (message.member.roles.has(role.id)) {
      var member= message.mentions.members.first();
      let role3 = message.guild.roles.find(r => r.name === "Soldiers");
      if (member.roles.has(role3.id)) {
        let role4 = message.guild.roles.find(r => r.name === "Varsity");
        member.addRole(role4)
          .then(console.log)
          .catch(console.error);
        member.removeRole(role3)
          .then(console.log)
          .catch(console.error);
        const embed = new RichEmbed()
          .setTitle('Promoted')
          .setColor(0xFF0000)
          .setDescription( member + ' ' + 'has been promoted to Varsity by ' + message.author);
        message.channel.send(embed);
        return;
      }
      let role6 = message.guild.roles.find(r => r.name === "Varsity");
      if (member.roles.has(role6.id)) {
      let role5 = message.guild.roles.find(r => r.name === "Private First Class");
      member.addRole(role5)
          .then(console.log)
          .catch(console.error);
      member.removeRole(role6)
        .then(console.log)
        .catch(console.error);
        const embed = new RichEmbed()
          .setTitle('Promoted')
          .setColor(0xFF0000)
          .setDescription( member + ' ' + 'has been promoted to  Private First Class from Varsity by ' + message.author);
        message.channel.send(embed);
        return;
      }
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!demote")) {
    let role = message.guild.roles.find(r => r.name === "Admin");
    if (message.member.roles.has(role.id)) {
      var member= message.mentions.members.first();
      let role5 = message.guild.roles.find(r => r.name === "Private First Class");
      if (member.roles.has(role5.id)) {
        let role6 = message.guild.roles.find(r => r.name === "Varsity");  
        member.addRole(role6)
            .then(console.log)
            .catch(console.error);
        member.removeRole(role5)
          .then(console.log)
          .catch(console.error);
        const embed = new RichEmbed()
          .setTitle('Demoted')
          .setColor(0xFF0000)
          .setDescription( member + ' ' + 'has been Demoted to Varsity From Private First Class by' + message.author);
        message.channel.send(embed);
        return;
      }
      let role7 = message.guild.roles.find(r => r.name === "Varsity");
      if (member.roles.has(role7.id)) {
        let role8 = message.guild.roles.find(r => r.name === "Soldiers");  
        member.addRole(role8)
            .then(console.log)
            .catch(console.error);
        member.removeRole(role7)
          .then(console.log)
          .catch(console.error);
        const embed = new RichEmbed()
          .setTitle('Demoted')
          .setColor(0xFF0000)
          .setDescription( member + ' ' + 'has been Demoted to a Soldier from Varsity by' + message.author);
        message.channel.send(embed);
        return;
      }
    }
  }
});


client.login("NTExNjc1Njg3NjAyNDg3MzIz.DvBk8A.FH96ik_6wGsK01jVkWKuytRVKgs");
