const categories = [
  {
    name: "Classical Landscapes",
    description: "Timeless mountains, oceans & natural scenery",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&h=400&fit=crop",
    link: "#shop"
  },
  {
    name: "Custom Photos & Portraits",
    description: "Your personal photo turned into silk tapestry art",
    image: "https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?w=600&h=400&fit=crop",
    link: "#custom"
  },
  {
    name: "Traditional Symbols",
    description: "Dragons, calligraphy & cultural Chinese motifs",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3178b15d?w=600&h=400&fit=crop",
    link: "#shop"
  },
  {
    name: "Modern Abstract",
    description: "Geometric & minimalist contemporary designs",
    image: "https://images.unsplash.com/photo-1541701494587-cb5850882612?w=600&h=400&fit=crop",
    link: "#shop"
  },
  {
    name: "Floral & Botanical",
    description: "Tropical leaves, cherry blossoms & flowers",
    image: "https://images.unsplash.com/photo-1579723800639-41f3b0951793?w=600&h=400&fit=crop",
    link: "#shop"
  },
  {
    name: "Animals & Wildlife",
    description: "Tiger, elephant & majestic animal portraits",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&h=400&fit=crop",
    link: "#shop"
  }
]

export default function Categories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-silk-gold mb-4">Explore</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-silk-black">Our Collections</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href={category.link}
              className="group relative overflow-hidden rounded-2xl h-80"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h4 className="text-2xl font-serif font-bold mb-2">{category.name}</h4>
                <p className="text-white/90">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
