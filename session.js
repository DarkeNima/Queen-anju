//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5uUG01YlNNeWN6YXJkb0F6d0xqUjAzTTZGU3BXL1UxaU0rREtpMVhtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzlVbU9CTnpqVjlSME85b1gxSHllWW51aDg3UWhySTk0czRiWkg4eS93WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQjlQbFBncFRZUFh3eEZQVmpTbENzZ3dsWDN5YlU4Z3ltWGlsTi9kZ2xZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0NnNBc0ZLa3Q4bnZDT2JDTk1UV1FaM3ZWbUpYT29ZTlFqTUhwczhiMFRjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVLOGVhMGoxcU1WVWwrQW1OejBuWXRWNjdncmM5S01pWlFQaVRVaEplMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF4VzIzcHpUOFFxcjRjQ2tUK1d1cFdFbFJmNTRZem0yOUdmQS9LNGJGQ2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NTUGFQQkJBbnJ6RGJoWGF4YU81b2RldG94K3gybEV2ZEdZTkU0cWFFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmh2SkVZVHpjVzRXSTVPUE0xa1dDVmYzQ3VYMDFCb0w2R2hVZVZSdEpWbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZvelE4dlI1VGhSaEUralN6WFZ6WTBneUdwc3V6SkpQUzAwSGNwVk41K1ZGT0RHWTU5Y29wNldZWmdWR21JTlNWeVVvVUxKaEtTY3pzR0FRTnhBWkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJncWZJamJQcjhGL09qNW03T0lHbjJzS3BGNXQzakVsYXRKUzhXa3dkSEpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPSDB6THhMZFRucWR6R29UQnV3Qzd3IiwicGhvbmVJZCI6ImFlMzUxNWE3LTcwN2MtNDRiNy1hMzJhLTQxZWEyOGYzYzE4OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWb0V3S0tQc0FjcnQ1MEIyVkl6MTNYd3djSms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0VOYUZJUENJZFVma0Y0OGp1MHYwZmlWM01zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjI2VFlYR1Y5IiwibWUiOnsiaWQiOiI5NDc2ODA0Mzg0NDo5NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc4OTMzNTEyOTcwNDA5Ojk1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUENHNklnQ0VPZml3TUlHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQUlKbUxxWjBmYXRSREsrbU9wczRpSVJMdmZUdXRJSlpjYmRHSkxqVDJSVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTTBRVFdqMG5hRVhuU0phcEFGRU56ZHgrUEV0QXNHK0twdXU3ZGlGTFp1Y3R2SXUwai9tNkIxdjlpY1BmUW1taDVMQmpDMzBRcUk4THBPczNNdXFEQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImhNNkxLU2RWN2ozVEtKWHJsNEEwME8xejBRWS9DZnc4eDN3YjNsQW1NVGozSEdnU2ZzR01lb3djL2lNZjMvTy92ZHFkaUE3cHJnT3MxYVNGOFJIekFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjgwNDM4NDQ6OTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUNDWmk2bWRIMnJVUXl2cGpxYk9JaUVTNzMwN3JTQ1dYRzNSaVM0MDlrViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwMDg2MDA0LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFxQyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94768043844",
  PASSWORD: 
    process.env.PASSWORD || "2xfJp7yPDQGWkfM",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
}; 
