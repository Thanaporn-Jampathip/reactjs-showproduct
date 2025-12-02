import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center'>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          imageUrl={p.imageUrl}
          name={p.name}
          price={p.price}
          category={p.category}
          inStock={p.inStock}
        />
      ))}
    </div>
  );
};

export default ProductList;
