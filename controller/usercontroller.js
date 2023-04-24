const User = require('../model/user')
module.exports.create = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

module.exports.getBySameAge = async (req, res) => {
  try {
    const { age } = req.params;
    const users = await User.find({ age });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting users by age' });
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting all users' });
  }
};


module.exports.updateByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndUpdate({ email }, req.body, { new: true });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user' });
  }
};

module.exports.getAllUsersByAgeDscAsc = async function(req, res) {
 const sortOrder = req.params.sortOrder === 'asc' ? 1 : -1;
 const data = await User.find({}, null, {sort: {age: sortOrder}});
 console.log(data);
res.json(data);

  };
