
const ProductsDisplay = ({ products }) => {

  const handleProductClick = (id) => {
    // we have the id of the clicked property

    // 1. make a new products array (from the old state)
    let cart = products.map((product) => {
      if (product.id = id) {
        product.inCart = true
      }
    })
    // 2. set inCart = true for the clicked product
    // 3. set state to this new products array (pass in property)
    
  }

  return (
    <div>
      {/* we need the products array here */}
      {products.map((product) => {
        return <div onClick={() => handleProductClick(product.id)}>product.name</div>
      })}
    </div>
  )
}

export default ProductsDisplay