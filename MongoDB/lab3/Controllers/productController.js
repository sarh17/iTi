const Products = require ('../Models/productSchema')

async function addProduct(data)
{
  let created = await Products.create(data)
  return created;

}

async function getAllProduct()
{
  let res = await Products.find()
  return res;

}

async function updateProduct(id,data)
{
  let updated = await Products.updateOne({_id: id},data)
  return updated;

}

async function deleteProduct(id)
{
  let deleted = await Products.findByIdAndDelete(id)
  return deleted ;

}

module.exports={addProduct, updateProduct,getAllProduct,deleteProduct}