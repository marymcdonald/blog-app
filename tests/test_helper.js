const Blog = require('../models/blog');

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

module.exports = {
  initialBlogs, blogsInDb
}