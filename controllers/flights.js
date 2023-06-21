const Flight = require('../models/flights')


module.exports = {
  index,
  new: newFlight,
}




async function index(req,res){
  const flightDetails = await Flight.find({})
  res.render('flights/index', {flights: flightDetails, vmi: 'hahaha'})  
}


function newFlight(req,res){
  res.render('flights/new' , {errosMgg: ''})
}


