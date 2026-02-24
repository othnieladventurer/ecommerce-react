import { Link } from "react-router-dom";
import { getProducts } from "../data/products";


export default function ProductCard({ product }) {
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
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



