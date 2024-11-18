import Image from 'next/image';
import React from 'react';

const Details = ({product}) => {
    return (
        <div className="container mx-auto p-4">
        {/* Product Image and Title */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-48 h-48">
            { product && <Image
              src={product.thumbnail}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded"
              priority
            />}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product?.title}</h1>
            <p className="text-sm text-gray-600">{product?.category}</p>
            <p className="text-lg font-semibold text-green-500">
              ${product?.price}{" "}
              <span className="line-through text-red-500">
                ${ product && (product.price / (1 - product.discountPercentage / 100)).toFixed(
                  2
                )}
              </span>
            </p>
            <p>Rating: {product?.rating} ⭐</p>
            <p className="text-sm text-gray-500">{product?.availabilityStatus}</p>
          </div>
        </div>
  
        {/* Product Description */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Description</h2>
          <p>{product?.description}</p>
        </div>
  
        {/* Dimensions and Additional Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold">Details</h2>
            <ul className="list-disc pl-4">
              <li>Brand: {product?.brand}</li>
              <li>SKU: {product?.sku}</li>
              <li>Weight: {product?.weight} oz</li>
              <li>
                Dimensions: {product?.dimensions.width}x
                {product?.dimensions.height}x{product?.dimensions.depth} cm
              </li>
              <li>Warranty: {product?.warrantyInformation}</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Shipping Info</h2>
            <p>{product?.shippingInformation}</p>
            <h2 className="text-xl font-bold mt-4">Return Policy</h2>
            <p>{product?.returnPolicy}</p>
          </div>
        </div>
  
        {/* Reviews */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Reviews</h2>
          {product?.reviews.map((review, index) => (
            <div key={index} className="border p-4 mt-2 rounded">
              <p>
                <strong>{review.reviewerName}</strong> ({review.rating}⭐):{" "}
                {review.comment}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
  
        {/* QR Code */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">Barcode and QR Code</h2>
          <div className="relative w-32 h-32">
  
          { product && <Image
              src={product.meta.qrCode}
              alt="QR Code"
              layout="fill"
              objectFit="contain"
            />}
          </div>
        </div>
      </div>
    );
};

export default Details;