const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
// users have many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// posts belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// users vote on many posts
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
// posts have many users who voted on them
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});

// a vote belongs to a single user
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

// a vote belongs to a single post
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

// a user has many votes
User.hasMany(Vote, {
    foreignKey: 'user_id'
});

// a post has many votes
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Vote };