//base 
const { Client } = require("cassandra-driver");


module.exports= async function run(request) {
    const client = new Client({
      cloud: {
        secureConnectBundle: "database/secure-connect-capteur.zip",
      },
      credentials: {
        username: "GCjWvAYiyFoybGwXeDGJsfXp",
        password: "3PuxkDvaKjxLZ9HR6ca02_f8Ez_ZMJol0f1bKQSalR3ETFtsYjJoAxAym48iEcxtDpaD0AmIOXH4OLFimvUKQgEjQvE7Y4juy23ORGfdsviiaK0CJ0UTp3apkl,oko+X",
      },
    });
  
    await client.connect();
  
    // Execute a query
    const rs = await client.execute(request);

    await client.shutdown();
    return await rs
}
  
// "SELECT * FROM k1.capteur"
//INSERT INTO k1.capteur (id_cap,id_cmp,index_cmp,date)VALUES (2,2,2552,'11/02/2022')