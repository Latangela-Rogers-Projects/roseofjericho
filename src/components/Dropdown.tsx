import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface DropdownOption {
  value: string | number
  label: string
  badge?: string | number
}

interface DropdownProps {
  options: DropdownOption[]
  value: string | number
  onChange: (value: string | number) => void
  placeholder?: string
  className?: string
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all font-medium text-gray-700 bg-white flex items-center justify-between hover:border-gray-300"
      >
        <span>{selectedOption?.label || placeholder}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-3 transition-colors font-medium flex items-center justify-between hover:bg-primary-50 ${
                value === option.value
                  ? "bg-primary-100 text-primary-700 border-l-4 border-primary-500"
                  : "text-gray-700 border-l-4 border-transparent"
              }`}
            >
              <span>{option.label}</span>
              {option.badge && (
                <span className={`text-xs px-2 py-1 rounded-full ${
                  value === option.value ? "bg-primary-200 text-primary-700" : "bg-gray-100 text-gray-600"
                }`}>
                  {option.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
