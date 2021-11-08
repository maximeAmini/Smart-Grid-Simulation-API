var run = require('../database/connect-database')

module.exports= {
    getAll:(req,res)=> {
        const query = 'SELECT * FROM k1.client limit 10';

        run(query).then(rs=>{
            res.status(200).send(rs.rows)
        }).catch(e=>{
            console.log(e)
        })
    },
    getOne:(req,res)=> {
        var id_client = req.params.id_client;

        const query = 'SELECT * FROM k1.client WHERE id_client='+id_client;

        run(query).then(rs=>{
            res.status(200).send(rs.rows)
        }).catch(e=>{
            console.log(e)
        })
    },
} 