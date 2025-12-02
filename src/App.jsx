import React from "react";
import ProductList from "./components/ProductList";
import data from "./data/productData";

function App() {
  return (
    <div className="min-h-screen mb-10">
      <div className="flex items-center justify-center h-30 bg-gray-500 shadow-md mb-10">
        <p className="text-2xl font-bold text-white">
          ระบบแสดงสินค้า (Product Display System)
        </p>
      </div>
      <div>
        <ProductList products={data} />
      </div>
    </div>
  );
}

export default App;
