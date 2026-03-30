import { useState } from 'react'
import { products } from '../data/products'

export default function FeaturedProducts() {
  const [selectedSize, setSelectedSize] = useState({})
  
  const getDefaultSize = (productId) => {
    return 'Medium'
  }
  
  const getPrice = (product) => {
    const size = selectedSize[product.id] || getDefaultSize(product.id)
    return product.price[size]
  }
  
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-silk-gold mb-4">Featured Collection</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-silk-black">Best Selling Pieces</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => p.bestSeller).map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image w-full h-80 object-cover"
                />
                {product.bestSeller && (
                  <div className="absolute top-4 left-4 bg-silk-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    Best Seller
                  </div>
                )}
              </div>
              <h4 className="text-xl font-serif font-semibold mb-2">{product.name}</h4>
              <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Select Size:</p>
                <div className="flex gap-2">
                  {Object.keys(product.price).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize({ ...selectedSize, [product.id]: size })}
                      className={`px-3 py-1 border rounded-full text-sm transition-colors ${
                        (selectedSize[product.id] || getDefaultSize(product.id)) === size
                          ? 'bg-silk-black text-white border-silk-black'
                          : 'border-gray-200 hover:border-silk-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-bold">${getPrice(product)}</span>
                <a 
                  href={`https://wa.me/8617717888625?text=I'm interested in ${product.name} (${selectedSize[product.id] || getDefaultSize(product.id)})`}
                  target="_blank" 
                  rel="noopener"
                  className="bg-silk-gold text-white px-4 py-2 rounded-full hover:bg-silk-black transition-colors"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#custom" 
            className="inline-block border border-silk-black text-silk-black px-8 py-4 rounded-full hover:bg-silk-black hover:text-white transition-colors"
          >
            View All Collections
          </a>
        </div>
      </div>
    </section>
  )
}
