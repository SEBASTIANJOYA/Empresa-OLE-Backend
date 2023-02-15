const User = require("../models/user");

const loginUser = async (req, res, next) => {
  
  try {
    
    const login = await User.findOne({
      name_user: req.body.name_user,
      password: req.body.password,
    });
    
    if (login!=null) {
      res.send({ result: true,id:login._id,name:login.name,user:login.name_user,email:login.email });
    } else {
      res.send({ result: false });
    }
  
  } catch (error) {
    res.send({ error: error });
  }
  
};

module.exports = { loginUser };
