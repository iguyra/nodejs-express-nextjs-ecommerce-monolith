export const addFirstProduct = (product) => {
  let productPrice = product.price;

  //create an empty array and push the item

  let newCart = {
    products: [],
    totalProductsCount: 1,
    totalProductsPrice: +productPrice,
  };

  const newProduct = createNewProduct(product, productPrice, 1);

  newCart.products.push(newProduct);

  localStorage.setItem("isavecart", JSON.stringify(newCart));
  return newCart;
};

// create a new product object
export const createNewProduct = (product, productPrice, qty) => {
  return {
    _id: product._id,
    image: product.image,
    price: productPrice,
    name: product.name,
    qty: qty,
    totalPrice: productPrice * qty,
  };
};

export const updateCart = (
  existingCart,
  product,
  qtytoBeAdded,
  newQty = false
) => {
  const updatedProducts = getUpdatedProducts(
    existingCart.products,
    product,
    qtytoBeAdded,
    newQty
  );

  const addPrice = (total, item) => {
    total.totalPrice += item.totalPrice;
    total.qty += item.qty;

    return total;
  };

  //loop through the updated proudct array and add the totALprice of each item to get the totalPrice
  let total = updatedProducts.reduce(addPrice, { totalPrice: 0, qty: 0 });

  const updatedCart = {
    products: updatedProducts,
    totalProductsCount: +total.qty,
    totalProductsPrice: +total.totalPrice,
  };
  localStorage.setItem("isavecart", JSON.stringify(updatedCart));
  return updatedCart;
};

//get updated products array
//update the product if its exist
//and add the new product to the existing cart
export const getUpdatedProducts = (
  existingProductsInCart,
  product,
  qtyToBeAdded,
  newQty = false
) => {
  const productExistIndex = isProductInCart(
    existingProductsInCart,
    product._id
  );
  console.log(
    "productExistIndex",
    productExistIndex,
    product._id,
    product.productId
  );

  //if product exist (index of that product is found in te array) update the product qunatity and totalPrice
  if (-1 < productExistIndex) {
    let updatedProducts = existingProductsInCart;
    let updatedProduct = updatedProducts[productExistIndex];

    //if we have the new quantity of the product avail, se that else add the qtyToBeAdded

    updatedProduct.qty = newQty ? +newQty : +updatedProduct.qty + qtyToBeAdded;
    updatedProduct.totalPrice = +updatedProduct.price * +updatedProduct.qty;
    // updatedProduct.totalPrice = updatedProduct.price * updatedProduct.qty;

    return updatedProducts;
  } else {
    //if the product is not found push the new product to the existing product array
    let productPrice = +product.price;
    const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
    existingProductsInCart.push(newProduct);
    return existingProductsInCart;
  }
};

//return index of the product if it exists
export const isProductInCart = (existingProductsInCart, productId) => {
  const returnItemThatExists = (item, index) => {
    if (productId === item._id) {
      return item;
    }
  };

  const newArray = existingProductsInCart.filter(returnItemThatExists);
  console.log("returnItemThatExists", productId, newArray);

  return existingProductsInCart.indexOf(newArray[0]);
};

export const updateQuantity = (product, productCount) => {
  const newQty = +productCount + 1;
  console.log(newQty);
  const productPrice = product.price;

  let newCart = {
    products: [],
    totalProductsCount: newQty,
    totalProductsPrice: +productPrice * newQty,
  };
  const newProduct = createNewProduct(product, productPrice, newQty);

  newCart.products.push(newProduct);
  localStorage.setItem("isavecart", JSON.stringify(newCart));
  console.log(newCart);

  return { newQty, newCart };
};
