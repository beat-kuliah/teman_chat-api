/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create(req,res){
    User.create({
      username: req.param('username'),
      password: req.param('password')
    }).then(user => {
      return res.ok(user);
    }).catch(err => res.serverError(err));
  },
  find(req,res){
    User.find()
      .then(users => res.ok(users))
      .catch(err => res.notFound(err));
  },
  update(req,res){

    let attributes = {};

    if(req.param('username')){
      attributes.username = req.param('username')
    }

    if(req.param('password')){
      attributes.password = req.param('password')
    }

    User.update({
      id : req.params.id
    },attributes)
      .then(users => {
        res.ok(users);
      }).catch(err => res.serverError(err))

  },
  delete(req,res){
    User.destroy({
      id: req.params.id
    }).then(user => res.ok(user))
      .catch(err => res.serverError(err));
  }

};

