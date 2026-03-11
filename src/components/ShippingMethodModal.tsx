"use client"

import { useEffect, useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { checkoutAPI } from "../api/checkout"
import { shippingAPI } from "@/api/shipping"


interface ShippingMethodModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (method: string, cost: number, tax: number) => void
  state: string
  city: string
  items: any[]
}

// const SHIPPING_METHODS = [
//   { id: "CUSTOMER_PICKUP", name: "Customer/Rider Pick-up", cost: 0 },
//   { id: "SOUTH_WESTERN", name: "South Western Regions via GIG Logistics", cost: 5500 },
//   { id: "NORTHERN", name: "Abuja/Northern States via GIG Logistics", cost: 7500 },
//   { id: "GUO_LOGISTICS", name: "Abuja via GUO Logistics", cost: 5000 },
//   { id: "WITHIN_YABA", name: "Within Yaba/Nearby", cost: 2000 },
// ]

export default function ShippingMethodModal({
  isOpen,
  onClose,
  onSelect,
  state,
  city,
  items,
}: ShippingMethodModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<number | string>("")

  const { data: SHIPPING_METHODS, isLoading } = useQuery({
    queryKey: ["shipping-zones"],
    queryFn: () => shippingAPI.getZones(),
  })

  useEffect(() => {
    if (SHIPPING_METHODS?.length > 0 && !selectedMethod) {
      setSelectedMethod(SHIPPING_METHODS[0].id)
    }
  }, [SHIPPING_METHODS, selectedMethod])

  const calculateShippingMutation = useMutation({
    mutationFn: () => {
      // Find the actual method object to send the correct name/label to the API if needed
      const methodObj = SHIPPING_METHODS?.find((m: any) => String(m.id) === String(selectedMethod))
      const methodName = methodObj ? methodObj.name : String(selectedMethod)

      return checkoutAPI.calculateShipping(methodName, state, city, items)
    },
    onSuccess: (response) => {
      const methodObj = SHIPPING_METHODS?.find((m: any) => String(m.id) === String(selectedMethod))
      const cost = methodObj?.methods?.[0]?.cost || 0

      onSelect(methodObj?.name || "Shipping", Number(cost), Number(response.tax || 0))
      onClose()
    },
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-xl">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-gray-800">Select Shipping</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-3">
          {isLoading ? (
            <div className="text-center py-4 text-gray-500">Loading methods...</div>
          ) : (
            SHIPPING_METHODS?.map((method: any) => {
              // Convert both to string for a reliable comparison
              const isSelected = String(selectedMethod) === String(method.id)
              const cost = method.methods?.[0]?.cost || 0

              return (
                <label
                  key={method.id}
                  className="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200"
                  style={{
                    borderColor: isSelected ? "#16a34a" : "#f3f4f6",
                    backgroundColor: isSelected ? "#f0fdf4" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="shipping"
                    value={method.id}
                    checked={isSelected}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="w-5 h-5 text-green-600 focus:ring-green-500"
                  />
                  <div className="ml-4 flex-1">
                    <p className={`font-semibold ${isSelected ? "text-green-900" : "text-gray-700"}`}>
                      {method.name}
                    </p>
                  </div>
                  <p className="font-bold text-gray-900">
                    {cost === 0 ? "FREE" : `₦${Number(cost).toLocaleString()}`}
                  </p>
                </label>
              )
            })
          )}

          <div className="pt-4 flex gap-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg flex-1 font-medium hover:bg-gray-200 transition">
              Cancel
            </button>
            <button
              onClick={() => calculateShippingMutation.mutate()}
              disabled={calculateShippingMutation.isPending || !selectedMethod}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg flex-1 font-medium hover:bg-primary-700 transition disabled:opacity-50"
            >
              {calculateShippingMutation.isPending ? "Calculating..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}