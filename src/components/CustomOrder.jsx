export default function CustomOrder() {
  return (
    <section id="custom" className="py-20 bg-silk-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-widest text-silk-gold mb-4">Custom Made</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-silk-black mb-4">
              Create Your Own Masterpiece
            </h3>
            <p className="text-lg text-gray-600">
              Want a specific image, photo, or design woven in silk? We can create a custom silk tapestry in any size.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-serif font-semibold mb-4">What We Can Customize</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-silk-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Any image or photograph you have</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-silk-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Any size - we don't limit dimensions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-silk-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Famous paintings & art reproductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-silk-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Family portraits & wedding photos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-silk-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Corporate logos & artwork</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-serif font-semibold mb-4">How It Works</h4>
                <ol className="space-y-4 text-gray-600">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-silk-gold text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <p className="font-medium text-silk-black">Contact us via WhatsApp</p>
                      <p className="text-sm">Send us your image and requirements for size and design</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-silk-gold text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <p className="font-medium text-silk-black">We confirm & quote</p>
                      <p className="text-sm">Price depends on size and complexity. We'll give you exact pricing</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-silk-gold text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <p className="font-medium text-silk-black">We craft your tapestry</p>
                      <p className="text-sm">Our master artisans begin handweaving your unique piece</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-silk-gold text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <p className="font-medium text-silk-black">Shipping to your door</p>
                      <p className="text-sm">We ship internationally with tracking</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="text-center">
              <p className="mb-6 text-gray-600">
                Ready to start your custom project? Contact us now on WhatsApp for a free quote.
              </p>
              <a 
                href="https://wa.me/8617717888625?text=Hi, I'm interested in a custom silk tapestry. Here are my details:" 
                target="_blank" 
                rel="noopener"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors text-lg font-medium"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.964 1.163-.197.197-.404.25-.701.08-.297-.167-1.231-.458-2.334-1.47-.858-.786-1.434-1.761-1.601-2.058-.166-.297-.016-.458.125-.607.134-.133.297-.347.446-.52.149-.166.197-.297.296-.496.099-.199.05-.375-.025-.525-.075-.15-.669-1.598-.91-2.194-.235-.584-.484-.502-.67-.513-.195-.013-.412.011-.624.023-.211.011-.558-.079-.85-.249-.297-.169-.49-.258-.772-.258-.291 0-.55.145-.731.362-.187.218-.709.82-.709 2.067 0 1.248.719 2.448 1.03 2.779 1.01 1.011 1.986 1.445 2.223 1.549.238.099.558.447.656.677.099.238.099.418.025.558-.075.14-.134.337-.205.468-.057.104-.345.197-.523.246-.175.045-.375.068-.575.042-.198-.023-.67-.244-1.111-.446-.391-.201-1.555-.581-2.99-1.923-1.214-1.088-1.96-2.543-1.96-4.01 0-.963.471-1.839 1.234-2.411.45-.326.963-.487 1.528-.487.419 0 .778.167 1.053.465.265.287.836.933 1.01 1.133.168.194.279.426.476.576.188.146.416.244.657.244.271 0 .55-.063.791-.217.238-.156 1.531-1.228 2.539-2.03 1.017-.803 1.023-.681 1.227-.681.207 0 .413.136.55.279.136.143.214.389.214.599 0 .214-.028.414-.08.614-.05.166-.812 3.199-1.162 3.732-.349.532-.594.725-.925.853-.327.127-.673.102-.973.033-.297-.07-.67-.247-.964-.407-.297-.16-.669-.507-.964-.857zm-4.47 7.595h-.002zM12 0C5.383 0 0 5.378 0 12c0 6.623 5.383 12 12 12 6.618 0 12-5.377 12-12S18.618 0 12 0z"/>
                </svg>
                Start Custom Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
