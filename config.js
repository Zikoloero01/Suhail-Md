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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349157439732";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_11_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDg4LFxuICAgICAgICA5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcwLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgNzUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxWUVMZHB6R2VMcjZpM3JFUkRmQmlUZUdYUmlSbXFMOUxFZEltNERNOXZjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJraFVncWpiRVJWR3lxSko2LXRVQTVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZmNGIwNjkzLWY1N2UtNGIzYi04YmU1LTgxODdhNTM4Yjk1MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICAyMTUsXG4gICAgICAxODMsXG4gICAgICAxODYsXG4gICAgICAxMDUsXG4gICAgICAyMTUsXG4gICAgICAxOTIsXG4gICAgICA2MCxcbiAgICAgIDM2LFxuICAgICAgMjE3LFxuICAgICAgMjMsXG4gICAgICAxMjcsXG4gICAgICAxMjksXG4gICAgICAxOTUsXG4gICAgICAxMTEsXG4gICAgICAyMSxcbiAgICAgIDgxLFxuICAgICAgNjksXG4gICAgICAxNDUsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMjUsXG4gICAgICA4OCxcbiAgICAgIDE4MCxcbiAgICAgIDEyMyxcbiAgICAgIDE0NCxcbiAgICAgIDE2OCxcbiAgICAgIDIwOSxcbiAgICAgIDE0MyxcbiAgICAgIDksXG4gICAgICAxODcsXG4gICAgICAyMzksXG4gICAgICAyMzcsXG4gICAgICAxMTYsXG4gICAgICAyNTIsXG4gICAgICAzNixcbiAgICAgIDk0LFxuICAgICAgNDYsXG4gICAgICA1NSxcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1UVcxTEFTQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NzQzOTczMjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR29kJ3MgQ2hvc2VuXCIsXG4gICAgXCJsaWRcIjogXCIxOTMzMzIyNTQzMjc2OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdseE1ZQkVMdStyYlVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmQmVJaUh1dGcxTmREbXJ2WUNtL3RsSWxxRmRqSDhmVVdzNzBxdWt2TUZRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVtVHFoRXdOTDQrN3M3Z2xmUCtUOWx5WWs0Z3RuNnZhTTQ2eklKL0dKNWM4MmkyTzZudlJhTWFZMmFqZXJwQUJ1UlZJbDhabzA3Z0pHWTJHSk96b0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVaWWVucytzalMyU3NXSWc3cE9JVzVSSjBYN1d4dmtLSU1sRzBYRFltUG5RUjdZN2dlbVY0TWR1dFZ6bVBKZFcrUUUrK3RmenBCNENmdkF2YlNVd0RBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNTc0Mzk3MzI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUwNzA3MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
