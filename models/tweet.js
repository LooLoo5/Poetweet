module.exports = function (sequelize, DataTypes) {
    const Tweets = sequelize.define('Tweets', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
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
