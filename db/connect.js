var mysql = require('mysql');

var dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'tiger',
  database: process.env.DB_DATABASE || 'u989381751_honest',
};

var connection;

function handleDisconnect() {
  // Recreate the connection, since
  // the old one cannot be reused.
  connection = mysql.createConnection(dbConfig);

  // The server is either down
  // or restarting (takes a while sometimes).
  connection.connect(function(err) {              
    if(err) {                                     
      console.log('error when connecting to db:', err);
      // We introduce a delay before attempting to reconnect,
      // to avoid a hot loop, and to allow our node script to
      // process asynchronous requests in the meantime.
      // If you're also serving http, display a 503 error.
      setTimeout(handleDisconnect, 2000); 
    }                                     
  });                                     
                                          
  connection.on('error', function(err) {
    console.log('db error', err);
    // Connection to the MySQL server is usually
    // lost due to either server restart, or a
    // connnection idle timeout (the wait_timeout
    // server variable configures this)
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}

handleDisconnect();

module.exports = connection;