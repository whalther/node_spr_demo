const conn = require('./Database/conn');

module.exports = {

    getAllSubAreas: async function() {
        let sql = await conn.getConn();
        return await sql.query(`EXEC getSubAreas 1`);
    }
};