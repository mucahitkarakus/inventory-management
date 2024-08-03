"use client";

import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Header from "@/app/(components)/Header";
import CreateProductModal from "./CreateProductModal";


const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

const products = [
  {
    productId: "d35623ee-bef6-42b2-8776-2f99f8bb4782",
    name: "Globe Fimbry",
    price: 999.99,
    rating: 4.5,
    stockQuantity: 20
  },
  {
    productId:"8ac1ac77-7358-425e-be16-0bdde9f02e59",
    name: "Smooth Phlox",
    price: 699.99,
    rating: 4.0,
    stockQuantity: 35
  },
  {
    productId: "1afc136b-4d9f-4e8e-aace-8e1df908a404",
    name: "Lemmon's Beggarticks",
    price: 199.99,
    rating: 4.2,
    stockQuantity: 50
  },
  {
    productId:"af84cc12-4fea-4f58-aece-f2ce92ca9580",
    name: "Thladiantha",
    price: 249.99,
    rating: 4.1,
    stockQuantity: 15
  },
  {
    productId: "86e3bb1c-2f5d-4774-98f3-4df7cddd0a0f",
    name: "Wax Myrtle",
    price: 79.99,
    rating: 4.8,
    stockQuantity: 60
  },
  {
    productId: "26b017c6-06d8-443f-9b4a-d6b1cee6f4c0",
    name: "Mouse",
    price: 49.99,
    rating: 4.7,
    stockQuantity: 45
  },
  {
    productId: "440c9e80-6bf8-4eb3-b2d2-f81936d67de3",
    name: "Monitor",
    price: 299.99,
    rating: 4.3,
    stockQuantity: 25
  },
  {
    productId: "98255f4e-40a6-470f-89a5-0792729f8947",
    name: "Printer",
    price: 129.99,
    rating: 4.0,
    stockQuantity: 30
  },
  {
    productId: "2a339fb2-f9f3-43bc-a85a-b217a0a38f12",
    name: "Webcam",
    price: 89.99,
    rating: 4.5,
    stockQuantity: 40
  },
  {
    productId:  "8a8391b2-b4ac-4847-b652-66ffd8d65875",
    name: "Router",
    price: 149.99,
    rating: 4.4,
    stockQuantity: 20
  },
  {
    productId: "be2157fb-7454-405e-9511-bf7ba81b7726",
    name: "External Hard Drive",
    price: 129.99,
    rating: 4.6,
    stockQuantity: 22
  },
  {
    productId: "fdf1ba3d-fa06-4ce5-90ff-d081c5d37176",
    name: "USB Flash Drive",
    price: 29.99,
    rating: 4.7,
    stockQuantity: 75
  },
  {
    productId: "afded6df-058f-477d-9878-e0e0b1d3dff3",
    name: "Camera",
    price: 499.99,
    rating: 4.5,
    stockQuantity: 18
  },
  {
    productId: "daa29167-82a7-474b-9687-b8b903e7ec69",
    name: "Projector",
    price: 399.99,
    rating: 4.2,
    stockQuantity: 12
  },
  {
    productId: "ccb83982-71f3-4497-bad8-7e64c6920dc6",
    name: "Speakers",
    price: 89.99,
    rating: 4.3,
    stockQuantity: 55
  }
];

return (
    <div className="mx-auto pb-5 w-full">
      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input
            className="w-full py-2 px-4 rounded bg-white"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <Header name="Products" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Create
          Product
        </button>
      </div>

      {/* BODY TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.productId}>
                <td className="px-6 py-4 whitespace-nowrap">
                 {product.productId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.stockQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
};

export default Products;