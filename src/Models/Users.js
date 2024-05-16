import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('vinc02', 'vinc02', '12345', {
    host: '10.10.12.93',
    dialect: 'mariadb'
});

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    // freezeTableName: true, // Giữ tên bảng là 'user',
    timestamps: false
});

export default User;
