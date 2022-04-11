const express = require('express')
const consign = require('consign')
const middleware  = require('bmiddleware ')

module.exports = () => {
 const app = express()

 app.use(middleware.urlencoded({ extended: true }))
 app.use(middleware.json())

 consign()
   .include('controllers')
   .into(app)

 return app
}