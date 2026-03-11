"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShoppingCart, Eye, Box, SidebarOpen } from "lucide-react"
import { useCartStore } from "@/store/cartStore";

interface Product {
  id: number
  name: string
  price: string
  images: string
  category: string
  slug: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps | any) => {
  const { items: cartItems, addItem, updateQuantity } = useCartStore();
  const cartItem = cartItems.find((item) => item.product_id === product.id)
  return (
    <Link to={`/products/${product.slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="group overflow-hidden transition-all bg-stone-50 rounded-2xl shadow-md hover:shadow-lg"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-950 aspect-square">
          {product.images[0] ? (
            <img
              src={product.images[0].src || "/placeholder.svg"}
              alt={product.images[0].alt || product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {/* <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-stone-500 text-black rounded-full hover:bg-stone-600"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              <ShoppingCart size={20} />
            </motion.button> */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white text-black rounded-full hover:bg-gray-200"
            >
              <Eye size={20} />
            </motion.button>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-stone-500 text-black text-xs font-bold rounded-full">
            {product.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pb-6">
          <h3 className="text-lg font-bold mb-2 group-hover:text-stone-500 transition-colors fonseca">{product.name}</h3>
          <p className="text-xl font-bold text-stone-500">{product.price}</p>
        <div className={`cursor-pointer relative mt-2 bg-gray-900 rounded-2xl w-full px-25 py-3 text-center flex items-center justify-center gap-2
                  ${product.stock_status === "instock" ? "bg-stone-900" : "bg-red-100"}`}>

              {product.stock_status === "instock" ?
                <div className="absolute left-2 md:left-3 bg-white h-[22px] w-[25px] rounded-full flex justify-center items-center">
                  <SidebarOpen size={10} />
                </div>
                :
                <div className="absolute left-2 md:left-3 bg-white h-[22px] w-[25px] rounded-full flex justify-center items-center">
                  <Box size={10} />
                </div>}

              {product.stock_status === "instock" ? (
                <span className="ml-5 md:ml-0 text-sm text-white font-medium">Select Options</span>
              ) : (
                <span className="ml-5 md:ml-0 text-sm text-red-600 font-medium">Out of Stock</span>
              )}
            </div>
        </div>
      </motion.div>
    </Link>
  )
}






export default ProductCard
