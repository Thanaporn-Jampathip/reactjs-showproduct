import React from "react";

const ProductCard = (props) => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Stock Badge */}
        <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold text-white ${
          props.inStock ? "bg-emerald-500" : "bg-red-500"
        }`}>
          {props.inStock ? "มีของ" : "หมด"}
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-xs font-semibold rounded-lg">
          {props.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <p className="font-bold text-xl text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {props.name}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-blue-600">{props.price}</span>
          <span className="text-sm text-gray-500">บาท</span>
        </div>

        {/* Add to Cart Button */}
        <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          props.inStock 
            ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg active:scale-95" 
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}>
          {props.inStock ? "เพิ่มลงตะกร้า" : "สินค้าหมด"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;