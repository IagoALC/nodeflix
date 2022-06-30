import categoriesModel from "../model/Category.js";

class CategoryController {
  static async getAllCategories(req, res) {
    try {
      const categories = await categoriesModel.find({});
      res.status(200).json({
        status: "success",
        data: categories,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  static async getCategoryById(req, res) {
    try {
      const category = await categoriesModel.findById(req.params.id);
      if (!category) {
        res.status(404).json({
          status: "error",
          message: "Category not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          data: category,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  static async createCategory(req, res) {
    try {
      const category = await categoriesModel.create(req.body);
      res.status(201).json({
        status: "success",
        data: category,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  static async updateCategory(req, res) {
    try {
      const category = await categoriesModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!category) {
        res.status(404).json({
          status: "error",
          message: "Category not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          data: category,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const category = await categoriesModel.findByIdAndDelete(req.params.id);
      if (!category) {
        res.status(404).json({
          status: "error",
          message: "Category not found",
        });
      } else {
        res.status(200).json({
          status: "success",
          data: category,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
}

export default CategoryController;