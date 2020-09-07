
const connection = "Server=regulus.cotuca.unicamp.br" +
                   "Database=BD19368;User Id=BD19368;Password=23hg56tkD;";
const sql = require("mssql");

sql.connection(connection)
.then (conn => console.log("SQL Server connection stablished uwu"))
.catch(err  => console.log("Sorry :c ...:" + err));