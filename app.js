const express = require('express');

const app = express();

app.get('/me', (request, response)=>{
    console.log(request.method)
    response.status(200).json({
        name: 'Anmy',
        edad: 32,
       pais: 'Venezuela'})
})

app.post('/metas',(request, response)=>{
    response.status(200).json({Hobbies: 'Program, dance, Go to the beach',
    verb: request.method
    })
})

app.put('/business', (request, response)=>{
    // console.log(request.method)
    response.status(200).json({ Metas: 'Learning Sql, Node, Desarrollar una api',
    verb: request.method
    })
})

app.patch('/metas', (request, response)=>{
    // console.log(request.method)
    response.status(200).json({ Metas: 'Tolbox, Global, Google',
    verb: request.method
    })
})


const port = 9000
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})