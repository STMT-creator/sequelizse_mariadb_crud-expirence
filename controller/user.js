import express from 'express';
import User from '../models/User.js';
/**
 * CRUD 작명을 잘해야한다.
 * C = Create => addUser
 * R = Read => getUser
 * U = Update => editUser
 * D = Delete => delUser
 */

const addUser = async (req, res) => {
  try {
    const { name, age, married } = req.body;
    const user = await User.create({ name, age, married });
    console.log(name, age, married);
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      order: [['id', 'DESC']]
    });
    res.status(201).json(users);
  } catch(err) {
    console.log(err)
  }
}

export default { addUser, getUsers };
