"use client"

import { useEffect, useState } from "react"
import Link from "@/components/Link"
import { useQuery } from "@tanstack/react-query"
import { productsAPI } from "../../api/products"
import { useCartStore } from "../../store/cartStore"
import { Search, ShoppingCart, Minus, Plus, Package } from "lucide-react"
import Dropdown from "@/components/Dropdown"

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>()

  const { items: cartItems, addItem, updateQuantity } = useCartStore()

  const { data: productsData, isLoading } = useQuery({
    queryKey: ["products", currentPage, searchTerm, selectedCategory],
    queryFn: () =>
      productsAPI.getAll({
        page: currentPage,
        per_page: 12,
        search: searchTerm,
        category: selectedCategory,
      }),
  })

  useEffect(() => {
    console.log("product data: ", productsData)
  }, [productsData])

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => productsAPI.getCollections(),
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 pt-[100px]">
        <div className="mb-5 ml-3">
          <h1 className="text-5xl font-bold mb-0 bg-gradient-to-r from-primary-900 to-primary-800 bg-clip-text text-transparent">
            Products
          </h1>
          <p className="text-gray-600 text-lg">Find toys that bring smiles to your kids.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="card sticky top-24 rounded-2xl shadow-lg border border-gray-100 md:overflow-hidden z-30">
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Filters
                </h2>

              <div className="">
                {/* Search */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Search Products
                  </label>
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-500 transition-colors" />
                    <input
                      type="text"
                      placeholder="Type to search..."
                      className="input w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Categories
                  </label>

                  {/* Mobile Dropdown */}
                  <div className="lg:hidden">
                    <Dropdown
                      options={[
                        { value: "all", label: "All Categories" },
                        ...(categories?.map((category) => ({
                          value: category.id,
                          label: category.name,
                          badge: category.product_count,
                        })) || []),
                      ]}
                      value={selectedCategory || "all"}
                      onChange={(value) => setSelectedCategory(value === "all" ? undefined : Number(value))}
                      placeholder="Select a category"
                    />
                  </div>

                  {/* Desktop Button List */}
                  <div className="hidden lg:block space-y-2">
                    <button
                      onClick={() => setSelectedCategory(undefined)}
                      className={`block w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                        !selectedCategory
                          ? "bg-primary-500 text-white shadow-md transform scale-[1.02]"
                          : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary-200"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        All Categories
                        {!selectedCategory && <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Active</span>}
                      </span>
                    </button>
                    {categories?.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`block w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                          selectedCategory === category.id
                            ? "bg-primary-500 text-white shadow-md transform scale-[1.02]"
                            : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary-200"
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          <span>{category.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            selectedCategory === category.id
                              ? "bg-white/20"
                              : "bg-gray-100 text-gray-600"
                          }`}>
                            {category.product_count}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-96">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-primary-200 rounded-full"></div>
                  <div className="w-16 h-16 border-4 border-primary-600 rounded-full absolute top-0 left-0 animate-spin border-t-transparent"></div>
                </div>
                <p className="text-xl text-gray-500 mt-6 font-medium">Loading products...</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <p className="text-gray-700 font-medium">
                    Showing <span className="text-primary-600 font-bold">{productsData?.data.length || 0}</span> of{" "}
                    <span className="text-primary-600 font-bold">{productsData?.total || 0}</span> products
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                  {productsData?.data.map((product) => {
                    const cartItem = cartItems.find((item) => item.product_id === product.id)

                    return (
                      <div
                        key={product.id}
                        className="card rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group bg-white transform hover:-translate-y-1"
                      >
                        <a href={`/products/${product.slug}`} className="block">
                          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                            {product.images[0] ? (
                              <img
                                src={product.images[0].src || "/placeholder.svg"}
                                alt={product.images[0].alt || product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <Package className="w-16 h-16" />
                              </div>
                            )}
                            {product.stock_status === "instock" ? (
                              <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                In Stock
                              </span>
                            ) : (
                              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                Out of Stock
                              </span>
                            )}
                          </div>
                        </a>

                        <div className="p-0">
                          <a href={`/products/${product.slug}`}>
                            <h3 className="font-bold md:text-md md:text-lg mb-0 mt-3 line-clamp-2 text-gray-800 group-hover:text-primary-600 transition-colors">
                              {product.name}
                            </h3>
                          </a>

                          <div className="flex items-baseline gap-2 mb-5">
                            <span className="text-2xl md:text-3xl font-bold text-primary-600">${product.price}</span>
                          </div>

                          {/* Conditional rendering based on cart */}
                          {cartItem ? (
                            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
                              <button
                                onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                                className="w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-lg hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all shadow-sm active:scale-95"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="flex-1 text-center font-bold text-lg text-gray-800">
                                {cartItem.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                                className="w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-lg hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all shadow-sm active:scale-95"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() =>
                                addItem({
                                  product_id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  quantity: 1,
                                  image: product.images[0]?.src || "",
                                })
                              }
                              disabled={product.stock_status !== "instock"}
                              className="rounded-xl w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3 shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-1 md:gap-2"
                            >
                              <ShoppingCart className="w-5 h-5" />
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Pagination */}
                {productsData && productsData.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-12">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all active:scale-95"
                    >
                      Previous
                    </button>
                    <div className="px-6 py-3 bg-white rounded-xl shadow-md border border-gray-100">
                      <span className="font-semibold text-gray-700">
                        Page <span className="text-primary-600">{currentPage}</span> of{" "}
                        <span className="text-primary-600">{productsData.totalPages}</span>
                      </span>
                    </div>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, productsData.totalPages))}
                      disabled={currentPage === productsData.totalPages}
                      className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all active:scale-95"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


