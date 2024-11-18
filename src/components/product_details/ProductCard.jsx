import Image from 'next/image';
import Link from 'next/link';


const ProductCard = ({ product }) => {
  return (
    <div className="card bg-white p-4 shadow-lg rounded-lg border ">
    
      <div className="w-full h-48 relative">
        
              { product && <Image
                  src={product.thumbnail}
                  alt={product.title}
                  height={200}
                  width={200}
                  className="rounded-md"
              />}
      </div>

   
      <h3 className="text-xl font-semibold mt-2">{product?.title}</h3>

    
      <p className="text-lg font-bold text-red-500 mt-1">${product?.price}</p>

      
      <p className="text-sm text-gray-500 mt-1">Category: {product?.category}</p>

      
      <div className="mt-4">
        <Link href={`/product_details/${product?.id}`}>
          <button className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
