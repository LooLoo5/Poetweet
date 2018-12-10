module.exports = function (sequelize, DataTypes) {
    const Tweets = sequelize.define('Tweets', {
        lineOne: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1],
        },
        lineTwo: {
            type: DataTypes.TEXT,
            // allowNull: false,
            len: [1],
        },
        lineThree: {
            type: DataTypes.TEXT,
            // allowNull: false,
            len: [1],
        },
    });
    Tweets.associate = function () {
    };
    return Tweets;
};
