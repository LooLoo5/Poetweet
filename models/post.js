module.exports = function (sequelize, DataTypes) {
    const Poems = sequelize.define('Poems', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1],
        },
        twitter: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    });
    Poems.associate = function () {
    };
    return Poems;
};
