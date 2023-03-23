const Title = require("../models/title");




exports.updateTitle = async (req, res) => {
    const { name,_id } = req.body;
    console.log(name,_id);
    var myname= {name : name}
    
    if (req.file) {
      // categoryObj.categoryImage = "/public/" + req.file.filename;
      myname.categoryImage = req.file.filename;
    }
    const updatedCategory = await Title.findOneAndUpdate({ _id },myname, {
      new: true,
    });
      console.log(updatedCategory,"helle");
      return res.status(201).json({ updatedCategory });
    
  };


  exports.getCategories = async(req, res) => {
    try {
      const post = await Title.find();
      
      
      res.status(200).json(post[0]);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
  };



  