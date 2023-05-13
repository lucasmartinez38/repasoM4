const { Sequelize } = require('sequelize')
const userModel = require('./models/user.model');
const postModel = require('./models/post.model');

const sequelize = new Sequelize(
  `postgres://postgres:Norma38--@localhost:5432/repaso`,
  {
    logging: false,
  },
  );
  userModel(sequelize);
  postModel(sequelize);
  console.log(sequelize.models);
  ////////////////////////////////////////
  const {Post, User} = sequelize.models
  User.hasMany(Post)
  Post.belongsTo(User)

//crear conexxion para la base de datos



module.exports = { sequelize, ...sequelize.models };