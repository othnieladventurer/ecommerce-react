// ./pages/Home.jsx
import { Link } from "react-router-dom";
import { getProducts } from "../data/products";
import  ProductCard from "../components/ProductCard"


export default function Home() {
    const products = getProducts();

    return (
        <div className="page">
            {/* Hero Section */}
            <div className="text-center py-5 bg-primary text-white">
                <h1 className="display-4 fw-bold mb-3">
                    Welcome to ShopHub
                </h1>
                <p className="lead mb-4">
                    Discover amazing products at unbeatable prices.
                </p>
            </div>

            {/* Products Section */}
            <div className="container-fluid py-5 bg-light">
                <h2 className="text-center mb-4">Our Products</h2>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {products.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}



