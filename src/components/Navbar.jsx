export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-silk-black">
              Silk Tapestry Gallery
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-silk-gold transition-colors">Home</a>
            <a href="#shop" className="text-gray-800 hover:text-silk-gold transition-colors">Shop</a>
            <a href="#story" className="text-gray-800 hover:text-silk-gold transition-colors">Our Story</a>
            <a href="#custom" className="text-gray-800 hover:text-silk-gold transition-colors">Custom Order</a>
            <a href="https://wa.me/8617717888625" target="_blank" rel="noopener" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
              Contact on WhatsApp
            </a>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
