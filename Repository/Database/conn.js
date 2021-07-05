const sql = require('mssql')
module.exports = {
     getConn: async function(){
        const sqlConfig = {
            user: 'suproot',
            password: 'sup@12.wz',
            database: 'supratestdb',
            server: 'supraservertest.database.windows.net',
            pool: {
              max: 10,
              min: 0,
              idleTimeoutMillis: 30000
            },
            options: {
              encrypt: true, // for azure
              trustServerCertificate: false // change to true for local dev / self-signed certs
            }
          }
          return await sql.connect(sqlConfig)
    }
}