'use client';

import Link from "../components/Link"
import { useCartStore } from "../store/cartStore"
import { APP_BASE_URL } from "../config/api"
import { useState } from "react"
import { useAuthStore } from "../store/authStore"
import Navigation from "@/components/Navigation";
import { Heart, Mail } from "lucide-react";

export default function PublicLayout(props:any) {
  const store = useAuthStore()
  const totalItems = useCartStore((state:any) => state.getTotalItems())
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      
      <Navigation currentPageSlug={props.currentPageSlug}/>

      <main className="flex-1">
        {props.children}
      </main>

    
            <footer className="bg-gray-900 text-white py-16 px-6" id="contact">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" fill="white" />
                      </div>
                      <span className="font-bold text-lg">Rose of Jericho</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Empowering communities, removing stigma, and ending poverty through dedicated
                      service and development.
                    </p>
                  </div>
      
                  <div>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <div className="flex flex-col gap-2">
                      {['About', 'Programs', 'Impact', 'Partners', 'Contact'].map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="text-gray-400 hover:text-rose-400 transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
      
                  <div>
                    <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                    <a
                      href="mailto:info@roseofjericho-cd.org"
                      className="flex items-center gap-2 text-gray-400 hover:text-rose-400 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      info@roseofjericho-cd.org
                    </a>
                  </div>
                </div>
      
                <div className="border-t border-gray-800 pt-8 text-center">
                  <p className="text-gray-400">
                    © {new Date().getFullYear()} Rose of Jericho Community Development Center. All
                    rights reserved.
                  </p>
                </div>
              </div>
            </footer>
    </div>
  )
}


