const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_26_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgMixcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgODksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTQzlCUlhqdEtaVVpsaUY2clFVSjRjRnVZeTErY0lCQmpZWDZ0NndBbXNRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQwMzc5MTA2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTNDQTQ5RUM2NDQ2ODNBMkNDMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI2MDIzNjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2hpelptdjNTZWVHZmp0YmcySDlmd1wiLFxuICBcInBob25lSWRcIjogXCIzOTgzMjViZC01MDhiLTRmOTYtOTI1ZC1hNzczNzdmMTQ5ZjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMjUyLFxuICAgICAgNzQsXG4gICAgICAxOTIsXG4gICAgICA3MSxcbiAgICAgIDk3LFxuICAgICAgMTAzLFxuICAgICAgNTcsXG4gICAgICAxMzEsXG4gICAgICAxMTgsXG4gICAgICAxNDMsXG4gICAgICAyMzUsXG4gICAgICAxNDEsXG4gICAgICAxODYsXG4gICAgICA2OSxcbiAgICAgIDE1LFxuICAgICAgNjksXG4gICAgICA4MixcbiAgICAgIDEyNCxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDE0NCxcbiAgICAgIDc4LFxuICAgICAgOTEsXG4gICAgICAxNTMsXG4gICAgICAxMzcsXG4gICAgICAxNTQsXG4gICAgICA4MSxcbiAgICAgIDIxMixcbiAgICAgIDEwOCxcbiAgICAgIDE5MyxcbiAgICAgIDUxLFxuICAgICAgMjAsXG4gICAgICAyMDUsXG4gICAgICAxOSxcbiAgICAgIDEyNyxcbiAgICAgIDExLFxuICAgICAgMjE0LFxuICAgICAgMTIyLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxENU5HUFFWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MDM3OTEwNjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU1ODQzMTA2NDYzODk1OjEyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlUgTiBHIFNpbHZhIPCfkplcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOL3h4VFFROGRPVnVnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdWRWVoL25SeG9qOFYzUC9qKzlCY1BWWHYrNWtwMTcweXNFNmRmSE15aXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwienZLRmNyWGRNQ24vdTZIa0FkVis0NE1Sa1NyS05GQXB6aGQzZXl4d3hjaDh3dGZ5MFl1aXY3S0ZIR0pwY0owQXJNMEJib3ZMSFR1Y3lPL0MxLzcxQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVVpiWlAxcWh4V1ZPNTNLUDUyVk91ckYyZFFwUUJFYnNoVHRSSFVkUlE5OWVlVklPNE5TNUNYOUJsSDBIUGk0SDlicTJ0OHA0YXo5NGRNSHhTME5JRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NDAzNzkxMDY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI2MDIzNTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPbmlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9uaS5qc29uIjogIntcImtleURhdGFcIjpcIlplNVN3RmZXRVI3N2JicGtFRjlIbzRiRGl2cUFjeVo1YURNa2licVMwbGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEwMTk2OTU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI2MDIzNTgzNjhcIn0iCn0="  // PUT your SESSION_ID 


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
