const conn = require('./Database/conn');

module.exports = {

    getAllAreas: async function() {
        let sql = await conn.getConn();
        return await sql.query(`EXEC getAreas 1`);
    }
};