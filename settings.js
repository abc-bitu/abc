const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.ppenv' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=pJZyFZzT#rMZ6Ve8A7fO6iYkhzVZxLTJx9wHucP4GRE0u8CoOAC8' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
};
