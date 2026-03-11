"use client"

import { useState } from "react"
import Link, { navigate, useParams } from "@/components/Link"
import { useQuery } from "@tanstack/react-query"
import { productsAPI } from "../../api/products"
import { useCartStore } from "../../store/cartStore"
import { ShoppingCart, Minus, Plus, Package, ChevronRight, Star } from "lucide-react"

interface ProductDetailProps {
  slug: string
}

export default function ProductDetail(props: any) {
  const { slug } = useParams(`/${props.currentPageSlug}`)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const addItem = useCartStore((state) => state.addItem)

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => productsAPI.getBySlug(slug),
    enabled: !!slug,
  })

  const primaryCategoryId = product?.categories?.[0]?.id

  const { data: relatedProducts } = useQuery({
    queryKey: ["related-products", primaryCategoryId, product?.id],
    queryFn: () =>
      productsAPI.getAll({
        category: primaryCategoryId,
        per_page: 4,
        exclude: [product?.id],
      }),
    enabled: !!primaryCategoryId && !!product?.id,
  })

  const handleAddToCart = () => {
    if (product) {
      addItem({
        product_id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.images[0]?.src || "",
      })
      setQuantity(1)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-[100px]">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center h-96">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary-200 rounded-full"></div>
              <div className="w-16 h-16 border-4 border-primary-600 rounded-full absolute top-0 left-0 animate-spin border-t-transparent"></div>
            </div>
            <p className="text-xl text-gray-500 mt-6 font-medium">Loading product...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-[100px]">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product not found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <a href="/products" className="btn btn-primary rounded-xl px-8 py-3">
              Back to Products
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 pt-[100px]">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm">
          <a href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
            Home
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <a href="/products" className="text-gray-600 hover:text-primary-600 transition-colors">
            Products
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                {product.images[selectedImage] ? (
                  <img
                    src={product.images[selectedImage].src || "/placeholder.svg"}
                    alt={product.images[selectedImage].alt || product.name}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <Package className="w-20 h-20 mb-4" />
                    <span>No image available</span>
                  </div>
                )}
              </div>
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all transform hover:scale-105 ${
                      index === selectedImage
                        ? "border-primary-500 shadow-lg"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt || product.name}
                      className="w-full h-full object-cover bg-gray-100"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(128 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Price and Stock */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary-600">${product.price}</span>
                </div>
                {product.stock_status === "instock" ? (
                  <span className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-200">
                    In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold border border-red-200">
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div className="prose prose-sm max-w-none mb-8">
                <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border-2 border-gray-200 rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors active:scale-95"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <div className="w-16 text-center">
                    <span className="text-lg font-bold text-gray-900">{quantity}</span>
                  </div>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    disabled={product.manage_stock && quantity >= product.stock_quantity}
                    className="w-12 h-12 flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                {product.manage_stock && (
                  <span className="text-sm text-gray-600 font-medium">
                    {product.stock_quantity} available
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.stock_status !== "instock"}
              className="w-full btn btn-primary py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart
            </button>

            {/* Categories */}
            {product.categories && product.categories.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map((category) => (
                    <a
                      key={category.id}
                      href={`/products?category=${category.id}`}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts && relatedProducts.data.length > 0 && (
          <div className="mb-16">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Products</h2>
              <p className="text-gray-600">You might also like these items</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.data.map((item) => (
                <a
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                    <img
                      src={item.images[0]?.src || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.stock_status === "instock" ? (
                      <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        In Stock
                      </span>
                    ) : (
                      <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors mb-3 min-h-[3.5rem]">
                      {item.name}
                    </h3>
                    <p className="text-3xl font-bold text-primary-600">
                      ${item.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

