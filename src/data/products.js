const products = [
  {
    id: 1,
    name: "Classic Leather Sneakers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Comfortable and stylish leather sneakers perfect for everyday wear."
  },
  {
    id: 2,
    name: "Modern Headphones",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    description: "High-quality headphones with deep bass and noise cancellation."
  },
  {
    id: 3,
    name: "Vintage Wristwatch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1662528567080-cec1df648e6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdCUyMHdyaXN0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    description: "Classic vintage wristwatch with analog design and leather strap."
  },
  {
    id: 4,
    name: "Elegant Sunglasses",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1703035045008-3326452e0e1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish UV-protective sunglasses for sunny days."
  },
  {
    id: 5,
    name: "Travel Backpack",
    price: 89.99,
    image: "https://plus.unsplash.com/premium_photo-1679201743425-bf162354c3ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHRyYXZlbCUyMGJhY2twYWNrfGVufDB8fDB8fHww",
    description: "Durable travel backpack with multiple compartments and ergonomic design."
  },
  {
    id: 6,
    name: "Wireless Bluetooth Speaker",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1623732900752-75cb69c5963a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdCUyMGJsdWV0b290aCUyMHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
    description: "Portable Bluetooth speaker with rich sound and long battery life."
  },
];

export function getProducts() {
  return products;
}




export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}


