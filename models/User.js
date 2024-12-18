import Sequelize from 'sequelize';

// primay ket : not null + unique                
class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: () => new Date()
            }
        }, {
            sequelize, // db connection
            timestamps: false,
            underscored: false,
            paranoid: false,
            modelName: 'User', // model의 실제 이름
            tableName: 'users', // table(표)의 이름
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
}

export default User;