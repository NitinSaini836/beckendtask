const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');

// Create a user
// post request http://localhost:7000/users on this api with below json data
  // "name": "",
  // "email": "",
  // "age": ,
  // "parentage": "",
  // "education": [
  //     {
  //         "degree": "",
  //         "institution": "",
  //         "year": "",
  //
  //     }
  // ],
router.post('/users', userController.create);

// Get all users
http://localhost:7000/users
router.get('/users', userController.getAll);

// Get users by Same age
http://localhost:7000/users/18 api to get the user by age
router.get('/users/:age', userController.getBySameAge);
//Get users by age Ascending and descending
//http://localhost:7000/users/age/asc api for ascending order of age
//http://localhost:7000/users/age/dsc api for descending order of age
router.get('/users/age/:sortOrder', userController.getAllUsersByAgeDscAsc);
// Update a user by email
//http://localhost:7000/users/email api to test update by Email
router.put('/users/:email', userController.updateByEmail);

module.exports = router;
