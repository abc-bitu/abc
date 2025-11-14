const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.ppenv' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=VI5HSI6L#TVra0ciOQOlZlR4y95GItUJOn3ivo0zSinIJ89Q-wVU' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
};
