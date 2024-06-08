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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_39_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDkxLFxuICAgICAgICA1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA1LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkwvWlBkKzNxQ3VwbDRSdWlQbFBaQWRIaC9rUUI4QVYrTVZtdlNWUW1nNUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5iUUhmQVg0UTF1blo0WVZoWFJWYUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzJmMTM3MDEtODkyYi00OTc4LTkxMzctZjcwMTE5MDJjOGUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAxMDEsXG4gICAgICA2NCxcbiAgICAgIDE4MSxcbiAgICAgIDEyNCxcbiAgICAgIDE5MSxcbiAgICAgIDk3LFxuICAgICAgMTY1LFxuICAgICAgMTY0LFxuICAgICAgMTczLFxuICAgICAgMjksXG4gICAgICA3OSxcbiAgICAgIDEwMCxcbiAgICAgIDk0LFxuICAgICAgMTc5LFxuICAgICAgMTU0LFxuICAgICAgMTc1LFxuICAgICAgMjQsXG4gICAgICAxNjksXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDI0MixcbiAgICAgIDQwLFxuICAgICAgMzMsXG4gICAgICA3LFxuICAgICAgMjAyLFxuICAgICAgMTQxLFxuICAgICAgMjEyLFxuICAgICAgOTksXG4gICAgICAxNjMsXG4gICAgICAxMDIsXG4gICAgICAxMzAsXG4gICAgICAyMyxcbiAgICAgIDc0LFxuICAgICAgODksXG4gICAgICAxNTUsXG4gICAgICAxNjEsXG4gICAgICAxNTEsXG4gICAgICAyNDcsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVk5FQjE3MkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODIxNzUyMzk6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdvZCdzIENob3NlblwiLFxuICAgIFwibGlkXCI6IFwiOTI3ODAyMDIzMjgxODA6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJemx4TVlCRU9hRmtiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZCZUlpSHV0ZzFOZERtcnZZQ20vdGxJbHFGZGpIOGZVV3M3MHF1a3ZNRlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUElENEFkajJueWdNVnE1SmREdnozWWp5WThBSE5CMGd1SVpQMkZVTWE3d2xMZHhQM3kwNWZGZ1Y0T2FZandKbWNSV1BsbWF5QXY4NUxiS0Y0Z0RMQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiejVyb2h3Yzl6NzRvNHR0Tit1YXFrVUNwYjcvZzJDcno5aGtndnBWbU83Y0VZeUtKdnBnMlA1ckU4TGN6TzNKL283QkNnVjlvN2dlRUxWUk1ENlpNalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MjE3NTIzOTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODQ2NzYyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
