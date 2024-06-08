const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348082175239";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_49_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDg3LFxuICAgICAgICA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4LFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMaDROOElENmpoQjJUL1p3VFlwcDE3ZGZHb1pGaXluc1RyR3ZGR01CNitRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwSnZHUzNpVlFRV1k2S1Y5Y1lZT0VRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMxNGVjYmZlLWMwMzMtNDM3ZS04MDkzLWY3ODQ2NTA0NTdiZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICA1MCxcbiAgICAgIDE5OSxcbiAgICAgIDc0LFxuICAgICAgMjE4LFxuICAgICAgMyxcbiAgICAgIDc3LFxuICAgICAgMjMzLFxuICAgICAgNjQsXG4gICAgICAxOTMsXG4gICAgICA3OCxcbiAgICAgIDEyMixcbiAgICAgIDEwNixcbiAgICAgIDcxLFxuICAgICAgMzcsXG4gICAgICAyMjQsXG4gICAgICAxMSxcbiAgICAgIDEwNyxcbiAgICAgIDk3LFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgOTAsXG4gICAgICAxODQsXG4gICAgICA0OCxcbiAgICAgIDE4NCxcbiAgICAgIDMwLFxuICAgICAgODAsXG4gICAgICA5LFxuICAgICAgMjAsXG4gICAgICAxNzEsXG4gICAgICAxMDEsXG4gICAgICAxNyxcbiAgICAgIDM0LFxuICAgICAgMjAxLFxuICAgICAgMTA5LFxuICAgICAgMTgsXG4gICAgICAxLFxuICAgICAgMTEsXG4gICAgICAyMDcsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJOUkxOSEJKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDgyMTc1MjM5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR29kJ3MgQ2hvc2VuXCIsXG4gICAgXCJsaWRcIjogXCI5Mjc4MDIwMjMyODE4MDoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM2x4TVlCRUxTbWtiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZCZUlpSHV0ZzFOZERtcnZZQ20vdGxJbHFGZGpIOGZVV3M3MHF1a3ZNRlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWDJKSzFiQm41cUlBSVpaVHVoWEVkZFg0UzYxdEVNakhJTEtCcUlBWTQ1emNTdEsvdHN2MkpYK1A5a0h5OWVqTzQ0eElvYm4yZDZCWVpSWEVFdmtIQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYjJkc3N0eStVQ1dHN0VKeC9saWlQNzZYZ1p6RVVoMFV2K0lKVGFxZVlhUVBRRnpxOHpKbGJ2SGF2ZHJBTFBrY2U3UEpnMVZ2YVFDbk5WNytVdGlJZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MjE3NTIzOToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzg1MDkzOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
