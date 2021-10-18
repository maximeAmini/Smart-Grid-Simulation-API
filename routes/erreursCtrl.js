var run = require('../connect-database')

module.exports= {
    addError: (req,res)=>{
        var id_cmp = req.body.id_cmp
        var type = req.body.type
        var discr = req.body.discr
        var date = req.body.date

        // Run the async function
        var data = (id_cmp+","+type+","+"'"+discr+"'"+",false,"+"'"+date+"'").toString()
        const query = 'INSERT INTO k1.erreurs (id_cmp,type,discr,corrected,date) VALUES ('+data+')';

        run(query).catch(e=>{console.log(e)})

        res.status(200).send('okey')
    }
}