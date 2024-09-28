import { useState } from "react";
import { Menu, Search, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Puma Future Rider Trainers",
    price: "$89.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Sports Sneakers Off White & Red",
    price: "$119.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Black Sun Glasses",
    price: "$29.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Gray Dress",
    price: "$34.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Short Frock",
    price: "$24.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Blue Women's Handbag",
    price: "$49.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 7,
    name: "Prada Women Bag",
    price: "$299.99",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 8,
    name: "Corset Leather With Skirt",
    price: "$69.99",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const popularBlogs = [
  {
    id: 1,
    title: "My Amazing Blog Title 1",
    author: "John Doe",
    likes: 150,
    comments: 22,
  },
  {
    id: 2,
    title: "My Amazing Blog Title 2",
    author: "Jane Smith",
    likes: 120,
    comments: 18,
  },
  {
    id: 3,
    title: "My Amazing Blog Title 3",
    author: "Bob Johnson",
    likes: 90,
    comments: 14,
  },
];

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">React Store</h1>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <aside
          className={`md:w-1/4 ${isFilterOpen ? "block" : "hidden"} md:block`}
        >
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-4">Filter</h2>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Min"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Max"
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <h3 className="font-bold mb-2">Categories</h3>
            <div className="space-y-2">
              {["BEAUTY", "FRAGRANCES", "FURNITURE", "GROCERIES"].map(
                (category) => (
                  <label key={category} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {category}
                  </label>
                )
              )}
            </div>
            <h3 className="font-bold mt-4 mb-2">Keywords</h3>
            <div className="space-y-2">
              {["APPLE", "WATCH", "FASHION", "TREND", "SHOES", "SHIRT"].map(
                (keyword) => (
                  <label key={keyword} className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {keyword}
                  </label>
                )
              )}
            </div>
            <button className="w-full bg-black text-white p-2 rounded mt-4">
              Reset Filters
            </button>
          </div>
        </aside>

        <main className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-bold">{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button className="p-2 rounded-full bg-black text-white">
              <ChevronLeft className="h-4 w-4" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`p-2 rounded-full ${
                  page === 1 ? "bg-black text-white" : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-full bg-black text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
