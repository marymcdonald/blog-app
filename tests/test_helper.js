const Blog = require('../models/blog');
const User = require('../models/user');

const initialBlogs = [
  {
    title: "blorg",
    author: "Izzy Miller",
    url: "www.izzy.co",
    likes: 1,
  },
  {
    title: "Wait but Why",
    author: "Tim Urban",
    url: "www.waitbutwhy.com",
    likes: 2,
  },
];

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}


const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, blogsInDb, usersInDb
}