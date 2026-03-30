export default function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -bottom-8 -right-8 bg-silk-cream w-full h-full -z-10 rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1585128903994-eac01e2df67c?w=700&h=800&fit=crop" 
                alt="Silk Weaving Craft" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-silk-gold mb-4">Our Craft</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-silk-black mb-6">
                2000 Years of Chinese Silk Weaving Tradition
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Silk tapestry (<strong>Silk Kesi</strong>) is an ancient Chinese <strong>intangible cultural heritage</strong> craft 
                with over 2,000 years of history. Each piece is meticulously woven by hand 
                using pure silk threads that are individually dyed before weaving.
              </p>
              <p>
                Unlike printed canvases or machine-made fabrics, our silk tapestries are created by 
                <strong> interweaving every single thread</strong>, resulting in incredible detail, 
                rich natural textures, and lasting beauty that can be passed down through generations as a family heirloom.
              </p>
              <p>
                Every tapestry tells a story. Whether it's a classical Chinese landscape, 
                a famous painting, or a custom portrait of your loved one, 
                we bring it to life in silk with extraordinary craftsmanship from master artisans.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-silk-black">2000+</p>
                <p className="text-sm text-gray-500">Years of Tradition</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-silk-black">100%</p>
                <p className="text-sm text-gray-500">Pure Natural Silk</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-silk-black">Handwoven</p>
                <p className="text-sm text-gray-500">By Master Artisans</p>
              </div>
            </div>
            <div className="pt-4">
              <a 
                href="#custom" 
                className="inline-block bg-silk-gold text-white px-8 py-4 rounded-full hover:bg-silk-black transition-colors"
              >
                Start Your Custom Piece
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-gray-50 rounded-xl">
            <svg className="w-12 h-12 mx-auto text-silk-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-4-4h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.143-5.714L5 14z" />
            </svg>
            <h4 className="text-xl font-serif font-semibold mb-2">Pure Natural Silk</h4>
            <p className="text-gray-600 text-sm">Only the highest quality mulberry silk from China</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl">
            <svg className="w-12 h-12 mx-auto text-silk-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h4 className="text-xl font-serif font-semibold mb-2">Handmade by Masters</h4>
            <p className="text-gray-600 text-sm">Each piece crafted by experienced weaving artisans</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl">
            <svg className="w-12 h-12 mx-auto text-silk-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h4 className="text-xl font-serif font-semibold mb-2">Worldwide Shipping</h4>
            <p className="text-gray-600 text-sm">Tracked shipping to every country</p>
          </div>
        </div>
      </div>
    </section>
  )
}
