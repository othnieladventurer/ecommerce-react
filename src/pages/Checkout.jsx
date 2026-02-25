import { useCart } from "../context/Cart";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

export default function Checkout() {
    const { cartItems, addToCart, updateCartQuantity, removeItemCompletely } = useCart();
    const products = getProducts();

    const cartWithDetails = cartItems.map((item) => {
        const product = products.find((p) => p.id === item.id);

        return {
            ...product,
            quantity: item.quantity,
            subtotal: product.price * item.quantity
        };
    });

    const total = cartWithDetails.reduce(
        (sum, item) => sum + item.subtotal,
        0
    );

    if (cartItems.length === 0) {


        return (
            <div className="container text-center mt-5">
                <h2>Your Cart is Empty</h2>
                <Link to="/" className="btn btn-primary mt-3">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Checkout</h1>

            <div className="row">
                <div className="col-md-8">
                    {cartWithDetails.map((item) => (
                        <div key={item.id} className="card mb-3">
                            <div className="card-body d-flex align-items-center gap-3">

                                {/* Product Image */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover"
                                    }}
                                    className="rounded"
                                />

                                {/* Product Info */}
                                <div className="flex-grow-1">
                                    <h5>{item.name}</h5>
                                    <p className="mb-1">
                                        ${item.price.toFixed(2)} × {item.quantity}
                                    </p>
                                    <p className="fw-bold mb-0">
                                        Subtotal: ${item.subtotal.toFixed(2)}
                                    </p>
                                </div>

                                {/* Controls */}
                                <div className="d-flex align-items-center gap-3">

                                    {/* Quantity Controls */}
                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>

                                        <div className="px-3 fw-bold">
                                            {item.quantity}
                                        </div>

                                        <button
                                            className="btn btn-sm btn-outline-secondary"
                                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Remove Completely */}
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => removeItemCompletely(item.id)}
                                    >
                                        Remove
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-md-4">
                    <div className="card p-3">
                        <h4>Order Summary</h4>
                        <hr />
                        <h5>Total: ${total.toFixed(2)}</h5>
                        <button className="btn btn-success w-100 mt-3">
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}