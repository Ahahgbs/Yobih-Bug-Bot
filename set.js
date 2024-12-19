const fs = require('fs-extra');
if (fs.existsSync("set.env")) {
  require("dotenv").config({
    'path': __dirname + '/set.env'
  });
}
const path = require('path');
const databasePath = path.join(__dirname, "./database.db");
const DATABASE_URL = process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL;
module.exports = {
  'session': process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFwYnhmZ1Vsb1dDSk05SDNYeVlpLy9QSmN0Wmp6UEJsdkQvTGd2TUgxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiei9VNlp4WU1zNnNsWlNsU1dRcEZIdVJJQ0RaSVZONDBYdkdCZm9td0lIVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRXp2Q1BVRTJncGZqek1rd3Y1MERvWXphWWFiVEp0UmpVU3Y3VU1MK0ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXZNRUNZMHc4bTk2K3RaczFMNmFkUkxqUlFsbi9hTk44WDJreFNELzB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNOWJrVXJ5L3NiVEdaMGsycTAxdGs3VVZrcllXbXJLalNlRUs5KzRPbHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIwTGlhTnlaYStoenRBWlQ5amNmQzF5R3VxR29YYmp3bzhnUzUzenJXMW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0N3UTVtem9LUWo2WU5kdUo5S2R0Y3NhVHVIaW4vNXBLTnQvN3RwRnAyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVhSeWRha3F2VG4xQ2txbFVNSWdhQlRKQmlMdjhUTzdEK1RzckVBOXZHdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdkWWsxakc0M1BXQkJ1OTFiTk1NdFRCV2ZqSnhMT0srYWUxL2tJeG51RTlQK0tqMWRWK2VMMWhLZGh0ZjMvQzIzS1ZGZXlWV2svQ1VBZWRCYjVFRkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJrSjBKNUZRY2Q4bHViK0RGMXhSaFo1WUNFNll5Z0hUZlgybjdnVmxnUEpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBUkp4TUZjNFFVQzdTa2F0NW1ka0dBIiwicGhvbmVJZCI6IjRlZDk0NTllLTY3ODUtNDcxNi1hYWU0LWQ0NGJmZGM0MzVhYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0eG5kR2p4ZjJxa1dIWGpOR3RFYzFKVnpYNlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHV4VkUrbVF2K0tWTkErYkJHNUJvZE1SUHcwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE3MldUSDU0IiwibWUiOnsiaWQiOiI5MjM0MDMwMDY0ODg6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSStZNExZRkVPZkVrTHNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicnBnMTY2bFVRUnp6TWFYcmRUZEthZHYwMjNtbkZxRnR6bGI2VFZkTGV5TT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ3J4eUZSY21meHJ5T2YxaFNkRFU1MDM2V2ZjNFo5d21vM2VVUnlNYThQSkp5YWg4R0tDOEFZc2V2TzNTUW9oaXUwN3MydU55ZXJvU3JRd2ZST0pCQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9MWUJGcmNVc3JSZTFkZzAvR3UycEI2dGZEUjdaUm1iNEFZVC91QVVrRGhCaE9LckJ6amhSTzB3TUh1clJ2Mkh4aHhrVmtOTVpKUGJVRDFzN1hRekJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDAzMDA2NDg4OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTZZTmV1cFZFRWM4ekdsNjNVM1NtbmI5TnQ1cHhhaGJjNVcrazFYUzNzaiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDYxNTY2NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHaHUifQ==",
  'PREFIXE': process.env.PREFIX || '~',
  'OWNER_NAME': process.env.OWNER_NAME || "mungai",
  'NUMERO_OWNER': process.env.NUMERO_OWNER || 'yobih',
  'AUTO_READ_STATUS': process.env.AUTO_READ_STATUS || "non",
  'AUTO_DOWNLOAD_STATUS': process.env.AUTO_DOWNLOAD_STATUS || "non",
  'BOT': process.env.BOT_NAME || "Yobih_MD",
  'URL': process.env.BOT_MENU_LINKS || "https://telegra.ph/file/d0cd3c82fbbc120f38ac4.jpg",
  'MODE': process.env.PUBLIC_MODE || "yes",
  'PM_PERMIT': process.env.PM_PERMIT || 'no',
  'HEROKU_APP_NAME': process.env.HEROKU_APP_NAME || null,
  'HEROKU_APY_KEY': process.env.HEROKU_APY_KEY || null,
  'WARN_COUNT': process.env.WARN_COUNT || '3',
  'ETAT': process.env.PRESENCE || '',
  'DP': process.env.STARTING_BOT_MESSAGE || 'yes',
  'CHATBOT': process.env.PM_CHATBOT || 'no',
  'HEROKU': process.env.HEROKU || "yes",
  'ANTI_VV': process.env.ANTI_VIEW_ONCE || 'no',
  'ANTI_CMD_SPAM': process.env.ANTI_COMMAND_SPAM || 'no',
  'DATABASE_URL': DATABASE_URL,
  'DATABASE': DATABASE_URL === databasePath ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
  fs.unwatchFile(fichier);
  console.log("mise à jour " + __filename);
  delete require.cache[fichier];
  require(fichier);
});
