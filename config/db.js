import { Sequelize} from "sequelize";
const db=new Sequelize('hoteles','root','123456',{
    dialect: 'mariadb',
    dialectOptions:{
        host:'127.0.0.1',
        port:'3307',
        timestamps:false,
        underscore:false,
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        },
    operatorsAliases:false
    }
});

export default db;