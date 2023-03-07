const Products = require("../models/productModel");

// Filter, sorting and paginating
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {

    const queryObj = { ...this.queryString }; //queryString = req.query

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);
    
    let queryStr = JSON.stringify(queryObj);
    
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );
    // console.log(queryStr);
    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
   
    // console.log(test.title, typeof test.title);
    this.query.find(JSON.parse(queryStr));
    
      // console.log(JSON.parse(queryStr));
     
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 8;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    // console.log(this.query)
    return this;
  }
}

const productCtrl = {
  getProducts: async (req, res) => {
    try {
      const features = new APIfeatures(Products.find(), req.query)
        .filtering()
        .sorting()
        // .paginating();
        
        // res.json({
        //   features: features.query,
        // });
      const products = await features.query;
      res.json({
        status: "success",
        result: products.length,
        products: products,
      });

    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        stock,
        description,
        content,
        images,
        category,
        timebought,
      } = req.body;
      if (!images) return res.status(400).json({ msg: "No image upload" });
      const product = await Products.findOne({ product_id });
      if (product)
        return res.status(400).json({ msg: "This product already exists." });
      const newProduct = new Products({
        product_id,
        title: title.toLowerCase(),
        price,
        stock,
        description,
        content,
        images,
        category,
        timebought,
      });

      await newProduct.save(); 
      res.json({ msg: "Created a product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Products.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { title, price,stock, description, content, images, category } = req.body;
      if (!images) return res.status(400).json({ msg: "No image upload" });
      await Products.findOneAndUpdate(
        { _id: req.params.id },
        {
          title: title.toLowerCase(),
          price,
          stock,
          description,
          content,
          images,
          category,
        }
      );
      console.log(req.params);
      res.json({ msg: "Updated a Product" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  Comment: async (req, res) => {
    try {
      const { id } = req.params;
      const { value } = req.body;
      const product = await Products.findById(id);
      product.comments.push(value);
    await Products.findOneAndUpdate(id, product, {
        new: true,
      });
      res.json({msg:" Created Comment Successfully"});
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = productCtrl;
