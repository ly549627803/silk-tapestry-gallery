export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-silk-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-sm uppercase tracking-widest text-silk-gold">Authentic Chinese Silk Art</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-silk-black">
              Handwoven Silk Tapestry Art
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Exquisite handwoven silk tapestries crafted with traditional Chinese techniques dating back centuries. 
              Each piece is a masterpiece of natural silk, dyed and woven by master artisans. Available in standard sizes 
              or custom-made to your specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#shop" 
                className="bg-silk-black text-white px-8 py-4 rounded-full hover:bg-silk-gold transition-colors text-center"
              >
                Shop Collection
              </a>
              <a 
                href="#custom" 
                className="border border-silk-black text-silk-black px-8 py-4 rounded-full hover:bg-silk-black hover:text-white transition-colors text-center"
              >
                Custom Order
              </a>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-serif font-bold text-silk-black">100%</p>
                <p className="text-sm text-gray-500">Pure Silk</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-silk-black">Handmade</p>
                <p className="text-sm text-gray-500">Traditional Craft</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-silk-black">Intl</p>
                <p className="text-sm text-gray-500">Shipping</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-silk-gold/10 rounded-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&h=1000&fit=crop" 
                alt="Silk Tapestry Art" 
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
