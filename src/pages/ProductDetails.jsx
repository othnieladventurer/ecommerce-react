import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../data/products";
import { useCart } from "../context/Cart";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  
  useEffect(() => {
    const foundProduct = getProductById(Number(id)); // ensure number

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct); // 🔥 IMPORTANT
  }, [id, navigate]);

  if (!product) {
    return <div className="container mt-5">Loading...</div>;
  }

  const productInCart = cartItems.find((item) => item.id === product.id)

  const productQuantityLabel = productInCart ? ` (${productInCart.quantity})` : "";



  return (
    <div className="container mt-5">
      <div className="row">
        
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>

          <h4 className="text-primary mb-3">
            ${product.price.toFixed(2)}
          </h4>

          <p className="text-muted">{product.description}</p>

          <button className="btn btn-primary rounded-0 mt-3"  onClick={() => addToCart(product.id)}>
            Add to Cart {productQuantityLabel}
          </button>

          
        </div>

      </div>
    </div>
  );
}