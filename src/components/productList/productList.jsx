import React, { useState } from 'react';

const ProductComponent = () => {
  const [products, setProducts] = useState([{productName:'product8', quantity:7}]);
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addProduct = () => {
    if (productName.trim() === '' || isNaN(quantity) || +quantity <= 0) {
      setErrorMessage('Invalid product or quantity.');
      return;
    }

    const existingProduct = products.find(
      (product) => product.productName === productName
    );

    if (existingProduct) {
      existingProduct.quantity += +quantity;
    } else {
      const newProduct = {
        productName,
        quantity: +quantity,
      };
      setProducts([...products, newProduct]);
    }

    setProductName('');
    setQuantity('');
    setErrorMessage('');
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const editProduct = (index) => {
    const newQuantity = prompt('Enter new quantity:');
    if (newQuantity !== null && !isNaN(newQuantity) && +newQuantity > 0) {
      const updatedProducts = [...products];
      updatedProducts[index].quantity = +newQuantity;
      setProducts(updatedProducts);
    }
  };

  
  return (
    <div>
      <h1>Product and Quantity Component</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <input value={product.productName} />
            <input value={product.quantity} onChange={handleQuantity}/>
            <button onClick={() => editProduct(index)}>Edit</button>
            <button onClick={() => deleteProduct(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <button onClick={addProduct}>Add</button>
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default ProductComponent;
