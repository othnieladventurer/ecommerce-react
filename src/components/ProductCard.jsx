import { Link } from "react-router-dom";
import { useCart } from "../context/Cart";

export default function ProductCard({ product }) {
    const { addToCart, cartItems } = useCart();
    const productInCart = cartItems.find((item) => item.id === product.id)

    const productQuantityLabel = productInCart ? ` (${productInCart.quantity})` : "";

    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                />

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>

                    <div className="mt-auto">
                        <p className="fw-bold text-primary">
                            ${product.price.toFixed(2)}
                        </p>

                        <div className="d-flex gap-2">
                            <Link
                                to={`/products/${product.id}`}
                                className="btn btn-secondary rounded-0 flex-fill"
                            >
                                View Details
                            </Link>

                            <button
                                type="button"
                                className="btn btn-primary rounded-0 flex-fill"
                                onClick={() => addToCart(product.id)}
                            >
                                Add to Cart {productQuantityLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}