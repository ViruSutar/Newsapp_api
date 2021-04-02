const Sequelize =require('sequelize')

const db=new Sequelize({
    dialect:'mysql',
    database:'assignmentdb',
    username:'developer',
    password:'developer'
})

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}

const Users=db.define('Users',{
    id:COL_ID_DEF,
    username:{
        type:Sequelize.DataTypes.STRING(30),
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequelize.DataTypes.STRING(55),
        allowNull: false,
        unique:true
    },
    password:{
        type: Sequelize.DataTypes.STRING(500),
		field: 'password',
		allowNull: false,
    }

})

const Articles=db.define('Articles',{
    id:COL_ID_DEF,
    title:{
        type:Sequelize.DataTypes.STRING(255),
        allowNull: false,
    },
    description:{
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
    },
    image: {
        type: Sequelize.DataTypes.BLOB('long'),
      }
})

Users.hasMany(Articles)
Articles.belongsTo(Users)

module.exports={
    db,
    Articles,
    Users
}