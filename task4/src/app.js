
    const express = require('express')
    const app = express()

    const port = process.env.PORT || 3000

    
    const path = require ("path")
    const publicDirectory =  path.join(__dirname , '../public')
    app.use (express.static (publicDirectory))

/////////////////////////////////////////////////////////////////////////////////////////////////////////

    app.set('view engine', 'hbs');

      const viewsDirectory = path.join (__dirname , "../temp1/views" )
      app.set( "views" , viewsDirectory)

      //////////////////////////////////////////////////////////////////

      var hbs = require ('hbs')

      const partialsPath = path.join (__dirname , "../temp1/partials")

      hbs.registerPartials(partialsPath)

      ///////////////////////////////////////////////////////////////////

    app.get('/' , (req , res) => {
        res.render('index' , {
            title: "HOME",
            desc : "welcome Hello and come in, dear customers! Your presence brings us delight because we are built to provide for your needs. Enjoy your stay here!"
        })
    })
   
    app.get('/checkweather' , (req , res) => {
        res.render('checkweather' , {
         
            latitude : 26.4674387635,
            longitude : 29.753934765,
            country :"Egypt",
            status:"clear",
            temp :"33"

        })
        
    })





    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })
    
////////////////////////////////////////////////////////////////////////////////
