const sql = require('mssql')
const conn = require('./Database/conn');

module.exports = {

    getAllEmployees: async function() {
        let sql = await conn.getConn();
        return await sql.query(`EXEC getAllEmployees`);
    },

    updateEmployee: async function(employee) {
        var request = new sql.Request(await conn.getConn());
        request.input('jsonEmpleado', sql.NVarChar('max'), JSON.stringify(employee));
        let result = await request.execute('updateEmployee');
        console.log(result.rowsAffected);
        return result.rowsAffected;
    },
    createEmployee: async function(employee) {
        var request = new sql.Request(await conn.getConn());
        request.input('jsonEmpleado', sql.NVarChar('max'), JSON.stringify(employee));
        let result = await request.execute('createEmployee');
        console.log(result.rowsAffected);
        return result.rowsAffected;
    }    
};