const express = require('express');
const router = express.Router();
const Person = require('../person');


//POST route to add a person
router.post('/', async (req, res) => {

  try{
    const data = req.body // Assuming the request body contains the person data
  
    //create a new Person document using the mongoose model
    const newPerson = new Person(data)
  
    //save the new person to the database 
    const response = await newPerson.save();
    console.log(response)
    console.log('data saved');
    res.status(200).json(response);
  }
  
  catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
  })

  //GET method to get a  person

  router.get('/',async (req, res) =>{
  try{
    const response = await Person.find();
    console.log('data saved');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
})

//Worktype
router.get('/:workType', async(req, res)=>{
  try{
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){

      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error: 'Invalid work type'});
    }
  

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
})

//Update 

router.put('/:id', async(req, res)=>{
  try{
    const personId = req.params.id; //Extract id from the url parameter
    const updatedPersonData = req.body; //update data for the person

    const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
      new: true, // Return the updated document
      runValidators:true, //Run Mongoose validation
    })

    if(!response){
      return res.status(404).json({error: 'Person not found'})
    }

    console.log('data updated');
    res.status(200).json(response);


  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
})
  

//Delete
router.delete('/:id', async(req, res)=>{
  try{
    const personId = req.params.id; //Extract id from the url parameter
    //Assuming you have a peson model
    const response = await Person.findByIdAndRemove(personId);
    if(!response){
      return res.status(404).json({error: 'Person not found'})
    }

    console.log('data deleted');
    res.status(200).json({messege: 'person Deleted Sucessfully'});

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
  }
})

module.exports = router;