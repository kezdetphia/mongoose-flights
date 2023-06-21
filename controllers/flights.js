const Flight = require('../models/flights')


module.exports = {
  index,
  new: newFlight,
  create,
}




async function index(req,res){
  const flightDetails = await Flight.find({})
  res.render('flights/index', {flights: flightDetails, vmi: 'hahaha'})  
}


function newFlight(req,res){
  res.render('flights/new' , {errosMgg: ''})
}

async function create(req,res){
  try{
    await Flight.create(req.body)
    res.redirect('/flights')
  } catch(err){
    res.render('flights/new', {errorMsg: err.message})
  }
}
