const { User } = require('../db')
const axios = require('axios')


///////MAPEO DE LA API PARA LIMPIAR PROPIEDADES//////////
const cleanArray = (arr) =>
arr.map((ele) => {
  return {
    id: ele.id,
    name: ele.name,
    email: ele.email,
    phone: ele.phone,
    created:false,
  };
});


////////////POST USER///////////////////////
const createUser = async (name, email, phone) => 
  await User.create({name, email, phone});
///////////////BUSQUEDA POR ID///////////////////////////////
getUserById = async (id, source) => {
    const user = 
    source === "api" 
    ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
    : await User.findByPk(id);
    return user 
};
///////////////////GET DE TODOS LOS USUARIOS/////////////////////////////

const getAllUsers = async ()=>{
  const dbUsers = await User.findAll();
  const apiUserRaw = (
    await axios.get(`https://jsonplaceholder.typicode.com/users`)).data;
    ///aca viene el arr limpio para igualar propiedades
    const apiUsers = cleanArray(apiUserRaw) 
  return [... dbUsers, ...apiUsers];  
};
////////////////////////////////////////////////////////////
const searchUserByName = async (name) => {
    const dbUserByName = await User.findAll({where: { name } });
    const apiUserRaw = (await axios.get(`https://jsonplaceholder.typicode.com/users`))
      .data;
    const apiUsers = cleanArray(apiUserRaw); 
    const filteredApi = apiUsers.filter((user) => user.name === name)
    return [...filteredApi, ...dbUserByName];
}







module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  searchUserByName,
};