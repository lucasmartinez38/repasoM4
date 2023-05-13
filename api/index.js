const app = require('./src/app')
const PORT =  3001;
const { sequelize } = require('./src/db') 




app.listen(PORT, () =>{
    sequelize.sync({alter: true});
    console.log("List on port " + PORT)
})