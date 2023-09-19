import Commerce from "@chec/commerce.js";
//require('dotenv').config();

const COMMERCE_PUBLIC_KEY='pk_test_54092dbf2c7b0cc22a4d08df9d570f41df508c0614b43';
let commerce = null;

function getCommerce(commercePublicKey) {
  
  if (commerce) {
    return commerce;
  } else {
    const publicKey = commercePublicKey || COMMERCE_PUBLIC_KEY;
    const devEnvironment = process.env.NODE_ENV === 'development';
    if (devEnvironment && !publicKey) {
      throw Error('Commerce public API key not found.');
    }
    commerce = new Commerce(publicKey, devEnvironment);
    return commerce;
  
  }
  
}
export default getCommerce;