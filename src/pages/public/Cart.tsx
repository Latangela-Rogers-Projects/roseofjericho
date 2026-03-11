"use client"

import Link, { navigate } from "@/components/Link"
import { useCartStore } from "../../store/cartStore"

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 md:py-12 mt-16 md:mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-8 md:py-12">
            <div className="text-4xl md:text-6xl mb-4">🛒</div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Your cart is empty</h1>
            <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">Start by adding some products to your cart</p>
            <Link
              to="/shop"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded text-sm md:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-12 mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-3 md:px-6 py-3 md:py-4 border-b border-gray-200 bg-gray-50">
                <h2 className="font-semibold text-sm md:text-base text-gray-900">
                  {items.length} item{items.length !== 1 ? "s" : ""} in cart
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.product_id} className="p-3 md:p-6 flex gap-3 md:gap-4 hover:bg-gray-50">
                    {item.image && (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 md:w-24 md:h-24 object-cover rounded flex-shrink-0"
                      />
                    )}

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm md:text-base text-gray-900 mb-1 md:mb-2 truncate">{item.name}</h3>
                      <p className="text-green-600 font-semibold text-sm md:text-base">₦{Number(item.price).toLocaleString()}</p>

                      <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-4 flex-wrap">
                        <button
                          onClick={() => updateQuantity(item.product_id, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 text-xs md:text-sm"
                        >
                          −
                        </button>
                        <span className="w-6 md:w-8 text-center font-semibold text-xs md:text-base">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                          className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 text-xs md:text-sm"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.product_id)}
                          className="text-red-600 hover:text-red-700 text-xs md:text-sm font-medium ml-auto md:ml-0"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-sm md:text-base text-gray-900">
                        ₦{(Number(item.price) * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-3 md:px-6 py-3 md:py-4 border-t border-gray-200 bg-gray-50">
                <button onClick={() => clearCart()} className="text-red-600 hover:text-red-700 text-xs md:text-sm font-medium">
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 sticky top-20 md:top-24">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4 md:mb-6">Order Summary</h3>

              <div className="space-y-3 md:space-y-4 pb-4 md:pb-6 border-b border-gray-200">
                <div className="flex justify-between text-xs md:text-sm text-gray-600">
                  <span>Subtotal:</span>
                  <span>₦{getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm text-gray-600">
                  <span>Shipping:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm text-gray-600">
                  <span>Tax:</span>
                  <span>₦0</span>
                </div>
              </div>

              <div className="py-4 md:py-6 border-b border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between gap-1">
                  <span className="font-bold text-sm md:text-lg text-gray-900">Estimated Total:</span>
                  <span className="font-bold text-lg md:text-lg text-green-600">₦{getTotalPrice().toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 md:py-3 rounded text-sm md:text-base"
                >
                  Proceed to Checkout
                </button>
                <Link
                  to="/products"
                  className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 md:py-3 rounded text-sm md:text-base"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 rounded">
                <p className="text-xs md:text-sm text-blue-800">
                  Free shipping on orders over ₦50,000. Some restrictions may apply.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
