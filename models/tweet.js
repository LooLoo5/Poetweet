module.exports = function (sequelize, DataTypes) {
    const Tweet = sequelize.define('Tweet', {
        keyword: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
    });
    return Tweet;
};
