const Menu = require("../models/Menu");

module.exports = {
  createData: (req, res) => {
    Menu.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.body.image,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },

  getData : (req,res) => {
      Menu.findAll()
      .then((result) => res.json(result))
      .catch((err) => {
          throw(err)
      })
  },

  getDatabyId : (req,res) => {
      Menu.findOne({where : {id:req.params.menuId}})
        .then((result) => res.json(result))
        .catch((err) => {
            throw(err)
        })
    },

    deleteDataById: (req,res) => {
        Menu.destroy({where:{id:req.params.menuId}})
        .then((result) => res.json(result))
        .catch((err) => {
            throw(err)
        })
    }, 
    editDataById : (req,res) => {
        Menu.update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
        },{where:{id:req.params.menuId}})
        .then((result) => res.json(result))
        .catch((err) => {
            throw err
        })
    }
};
