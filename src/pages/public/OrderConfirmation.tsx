"use client"

import { useLocation } from "react-router-dom"
import Link, { navigate, useParams } from "@/components/Link"
import { useAuthStore } from "../../store/authStore"

export default function OrderConfirmation() {
  const location = useLocation()
  const { isAuthenticated } = useAuthStore()
  const orderId = location.state?.orderId

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-[100px]">
      <div className="max-w-md w-full text-center">
        {/* Success Animation */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-once">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-2">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        {orderId && <p className="text-lg font-medium text-primary-600 mb-8">Order #{orderId}</p>}

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                1
              </span>
              <span className="text-sm text-gray-600">
                You'll receive an email confirmation with your order details.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                2
              </span>
              <span className="text-sm text-gray-600">Our team will prepare your order for shipping.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                3
              </span>
              <span className="text-sm text-gray-600">You'll receive tracking information once your order ships.</span>
            </li>
          </ul>
        </div>
        <p>{JSON.stringify(html)}</p>

        <div className="space-y-3">
          {/* {isAuthenticated ? (
            <Link to="/account/orders" className="btn btn-primary w-full block">
              View My Orders
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary w-full block">
              Create Account to Track Orders
            </Link>
          )} */}
          <button onClick={() => navigate("/products")} className="btn btn-secondary w-full">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}


const html = `<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<p style="margin:  0px 0px 14px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  21px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-family:  TimesNewRomanPS-BoldMT; font-weight:  bold; font-kerning:  none;">Product Details</span></p>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<ul>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Fabric: 100% high-quality cotton</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Fit: Regular fit (true to size)</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Neckline: Classic crew neck</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Logo: Large Trefoil print on the chest</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Colors Available:</span><span style="font-size:  12px; font-kerning:  none;"><br>\n</span></li>\n<ul>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Orange</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Black</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">White</span></li>\n</ul>\n<li style="margin:  0px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Comfort: Soft, breathable, and gentle on the skin</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Durability: Premium cotton designed to maintain shape and color after multiple washes</span></li>\n</ul>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<p style="margin:  0px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; color:  rgb(128,
         128,
         128); -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(128,
         128,
         128); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<p style="margin:  0px 0px 14px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  21px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-family:  TimesNewRomanPS-BoldMT; font-weight:  bold; font-kerning:  none;">Why You\u2019ll Love It</span></p>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>\n<ul>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Iconic Adidas branding</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Versatile styling for sportswear or casual outfits</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Premium cotton for long-lasting comfort</span></li>\n<li style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  19px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0);"><span style="font-kerning:  none;">Works perfectly with jeans, joggers, and shorts</span></li>\n</ul>\n<p style="margin:  0px 0px 12px; font-style:  normal; font-variant-caps:  normal; font-width:  normal; font-size:  12px; line-height:  normal; font-family:  &quot;Times New Roman&quot;; font-size-adjust:  none; font-kerning:  auto; font-variant-alternates:  normal; font-variant-ligatures:  normal; font-variant-numeric:  normal; font-variant-east-asian:  normal; font-variant-position:  normal; font-variant-emoji:  normal; font-feature-settings:  normal; font-optical-sizing:  auto; font-variation-settings:  normal; -webkit-text-stroke-width:  0px; -webkit-text-stroke-color:  rgb(0,
         0,
         0); min-height:  13.8px;"><span style="font-kerning:  none;"></span><br></p>`