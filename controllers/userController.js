import userModel from '../model/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await userModel.find();
      res.status(200).json({
        success: true,
        count: users.length,
        data: users
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await userModel.findById(req.params.id);
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async createUser(req, res) {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      req.body.password = password;
      const user = await userModel.create(req.body);
      res.status(201).json({
        success: true,
        data: user
      });
    }
    catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async login(req, res) {
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.set('Authorization', `Bearer ${token}`);
    res.status(204).json({});
  }

  static async updateUser(req, res) {
    try {
      const user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json({
        success: true,
        data: user
      });
    }
    catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        data: user
      });
    }
    catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

export default UserController;