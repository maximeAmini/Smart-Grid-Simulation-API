var run = require('../connect-database')

module.exports= {
    getAll:(req,res)=> {
        const query = 'SELECT * FROM k1.capteur limit 10';

        run(query).then(rs=>{
            res.status(200).send(rs.rows)
        }).catch(e=>{
            console.log(e)
        })
    },
    addIndex: (req,res)=> { 
        var id_cmp = req.body.id_cmp
        var index_cmp = req.body.index_cmp
        var date = req.body.date

        var data = (id_cmp+","+index_cmp+","+"'"+date+"'").toString()
        const query = 'INSERT INTO k1.capteur (id_cmp,index_cmp,date) VALUES ('+data+')';

        run(query).then(()=>{
            res.status(200).send('okey')
        }).catch(e=>{
            console.log(e)
        })
    },
} 