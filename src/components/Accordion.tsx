import { useState } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
  className?: string
}

const Accordion = ({ title, children, className = '' }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-4 text-gray-800 font-semibold text-lg hover:text-primary transition-colors"
      >
        <span className="text-sm">{title}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Accordion content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-xs pb-4 text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion


