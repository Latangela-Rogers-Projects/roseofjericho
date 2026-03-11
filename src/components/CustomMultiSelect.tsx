import React, { useState, useRef, useEffect } from "react"
import { ChevronDown, Check, X } from "lucide-react"

interface Option {
  value: string
  label: string
}

interface CustomMultiSelectProps {
  values: string[]
  onChange: (values: string[]) => void
  options: Option[]
  placeholder?: string
  className?: string
}

export function CustomMultiSelect({
  values,
  onChange,
  options,
  placeholder = "Select...",
  className = "",
}: CustomMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const toggleOption = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value))
    } else {
      onChange([...values, value])
    }
  }

  const removeValue = (value: string, e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(values.filter((v) => v !== value))
  }

  const selectedOptions = options.filter((opt) => values.includes(opt.value))

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-all flex items-center justify-between min-h-[38px]"
      >
        <div className="flex-1 flex flex-wrap gap-1 items-center">
          {selectedOptions.length === 0 ? (
            <span className="text-gray-500">{placeholder}</span>
          ) : (
            selectedOptions.map((option) => (
              <span
                key={option.value}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium"
              >
                {option.label}
                <X
                  className="w-3 h-3 cursor-pointer hover:text-blue-900"
                  onClick={(e) => removeValue(option.value, e)}
                />
              </span>
            ))
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-2 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => {
              const isSelected = values.includes(option.value)
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleOption(option.value)}
                  className={`w-full px-3 py-2 text-sm text-left hover:bg-blue-50 transition-colors flex items-center justify-between ${
                    isSelected ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-900"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
