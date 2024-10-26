const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="sayanbera358@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+919339361276";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_26_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDgyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgODksXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNENG5oc0dZdWE0bTgwZmUzSjVrWkttcWRveGU5Nkx5bDdLaENhc2hBYTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlpEYXJjRmE4UnotMU1Razg3TkUyVmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWJkOWUyZTktOWE4MC00Nzg5LThhN2ItNjcxZDM2MGRjNWEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDExMSxcbiAgICAgIDQwLFxuICAgICAgMTE5LFxuICAgICAgMTU4LFxuICAgICAgMTMxLFxuICAgICAgMzYsXG4gICAgICAxODksXG4gICAgICA1NCxcbiAgICAgIDIyOCxcbiAgICAgIDI1NSxcbiAgICAgIDEyLFxuICAgICAgMTk5LFxuICAgICAgMTUwLFxuICAgICAgOTksXG4gICAgICAxNyxcbiAgICAgIDc2LFxuICAgICAgMTI4LFxuICAgICAgMjE0LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMjgsXG4gICAgICAxNzYsXG4gICAgICA5OCxcbiAgICAgIDMzLFxuICAgICAgNTgsXG4gICAgICAxODcsXG4gICAgICA0MyxcbiAgICAgIDI3LFxuICAgICAgMTEwLFxuICAgICAgNzAsXG4gICAgICAxMTQsXG4gICAgICAxMDcsXG4gICAgICAxNzQsXG4gICAgICAxNTIsXG4gICAgICAyMjUsXG4gICAgICAxMjksXG4gICAgICAxNzUsXG4gICAgICAxNDAsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjQ4OEMxRVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTU5MzI0Njc4MzoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpPSk9cIixcbiAgICBcImxpZFwiOiBcIjM3NTE2OTU4ODA2MDgzOjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tpcHZJa0JFTU9IODdnR0dCSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzlNNXg3M2FiZlo3SnZPNlFGOG15cGo3cDNkc1l3cCtweGF4WEIzZGQzVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHL2JReE0yYUxaK1RnUUl2bTc2cUFqbkgzUDJyVzNob2Zja0pkdDNmRDNJZFo3RVpIZmxsZ3ZsTjFzeXd5akVrN21oQlYxTXRib21JQlBpREpSeE5CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKV0hQTHA5eXBYVVdCblo1R0NBWWdkcUdCSEdZdHlidUhIc2NzcGE5RFM0NDJrbXF5Lzd6WVp4eG1FWDFsdnZIRFZsU2FhS2NudVlNNWVQeENUZ1hqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk1OTMyNDY3ODM6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5OTM4Mzc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGYvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQZi8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
