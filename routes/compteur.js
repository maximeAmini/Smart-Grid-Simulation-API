var run = require('../connect-database')

module.exports= {
    getAll:(req,res)=> {
        const query = 'SELECT * FROM k1.compteur limit 10';

        run(query).then(rs=>{
            res.status(200).send(rs.rows)
        }).catch(e=>{
            console.log(e)
        })
    },
    getOne:(req,res)=> {
        var id_compteur = req.params.id_compteur;

        const query = 'SELECT * FROM k1.compteur WHERE id_compteur='+id_compteur;

        run(query).then(rs=>{
            res.status(200).send(rs.rows)
        }).catch(e=>{
            console.log(e)
        })
    },
} 