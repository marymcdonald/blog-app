const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Blog = require ('../models/blog');

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
]

beforeEach(async () => {
  await Blog.deleteMany({})
  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()
  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
});

afterAll(async () => {
  await mongoose.connection.close()
});

test('all blogs are returned', async () => {
  const response = await api.get('/api/blogs');
  expect(response.body).toHaveLength(initialBlogs.length);
});


test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/blogs');


  const titles = response.body.map(r => r.title);
  expect(titles).toContain(
    'blorg'
  );
});