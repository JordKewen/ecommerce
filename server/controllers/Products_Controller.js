const Products = require('../models/Products_Schema');
class ProductsController {
        async addProduct(req,res){
                let {img_url,img_id, name, description, price, type} = req.body;
                console.log('CLOUDINARRYYYYYYYYYYYY',req.body)
                try{
                    const products = await Products.create({img_url,img_id,name,description,price,type});
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.status(200).json(products);
                }
                catch(err){
                    //console.log(err)
                    res.status(500).json(err)
            }            
        }
        async displayProducts(req,res){
            // console.log('sosososososososososososososososos',req)
            try{
                const products = await Products.find({})
                res.status(200).json(products)
            }
            catch(err){
                console.log(err)
                res.status(500).json(err)
            }
        }
        async deleteProduct(req,res){
            try{
                const product = await Products.deleteOne({_id:req.body._id})
                res.status(200).json(product)
            }
            catch(err){
                //console.log(err)
                res.status(500).json(err)
            }
        }
        async productInfo(req,res){
            console.log('AAAAAAA', req.params.productinfo)
            let productinfo = req.params.productinfo;
            try{
                const product = await Products.findOne({_id:productinfo})
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.status(200).json(product)
                console.log('PROD RIGHT HERE=======>',product)
            }
            catch(err){
                console.log(err)
                res.send(500).json(err)
            }
        }
        async getProductsByType(req, res) {
            //console.log("==========================", req.params);
            let { type } = req.params;
            try {
              const products = await Products.find({ type: type });
             // console.log("products=======", products);
              res.status(200).json(products)
            } catch (e) {
             // console.log(e);
              res.send(500).json(err)
            }
          }
    }






module.exports = new ProductsController();