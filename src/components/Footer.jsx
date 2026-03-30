export default function Footer() {
  return (
    <footer className="bg-silk-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h4 className="text-2xl font-serif font-bold mb-4">Silk Tapestry Gallery</h4>
            <p className="text-gray-400 mb-6 max-w-md">
              Authentic handwoven Chinese silk tapestries. Traditional craftsmanship meets modern design. 
              Available in standard sizes or custom-made to your requirements.
            </p>
            <div className="flex gap-4">
              <a href="https://tiktok.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.992 5.134c.347.652.558 1.395.558 2.192 0 2.868-2.332 5.199-5.208 5.199-.539 0-1.057-.082-1.544-.236v3.092c.398.092.812.141 1.241.141 2.868 0 5.199-2.331 5.199-5.199 0-1.071-.298-2.072-.822-2.944h-1.424zm-3.708 4.519c.974 0 1.764-.79 1.764-1.764 0-.974-.79-1.764-1.764-1.764-.974 0-1.764.79-1.764 1.764 0 .974.79 1.764 1.764 1.764z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.958 10.125 11.859v-8.37H7.078v-3.49h3.047v-2.63c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.37C19.612 23.03 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.964 1.163-.197.197-.404.25-.701.08-.297-.167-1.231-.458-2.334-1.47-.858-.786-1.434-1.761-1.601-2.058-.166-.297-.016-.458.125-.607.134-.133.297-.347.446-.52.149-.166.197-.297.296-.496.099-.199.05-.375-.025-.525-.075-.15-.669-1.598-.91-2.194-.235-.584-.484-.502-.67-.513-.195-.013-.412.011-.624.023-.211.011-.558-.079-.85-.249-.297-.169-.49-.258-.772-.258-.291 0-.55.145-.731.362-.187.218-.709.82-.709 2.067 0 1.248.719 2.448 1.03 2.779 1.01 1.011 1.986 1.445 2.223 1.549.238.099.558.447.656.677.099.238.099.418.025.558-.075.14-.134.337-.205.468-.057.104-.345.197-.523.246-.175.045-.375.068-.575.042-.198-.023-.67-.244-1.111-.446-.391-.201-1.555-.581-2.99-1.923-1.214-1.088-1.96-2.543-1.96-4.01 0-.963.471-1.839 1.234-2.411.45-.326.963-.487 1.528-.487.419 0 .778.167 1.053.465.265.287.836.933 1.01 1.133.168.194.279.426.476.576.188.146.416.244.657.244.271 0 .55-.063.791-.217.238-.156 1.531-1.228 2.539-2.03 1.017-.803 1.023-.681 1.227-.681.207 0 .413.136.55.279.136.143.214.389.214.599 0 .214-.028.414-.08.614-.05.166-.812 3.199-1.162 3.732-.349.532-.594.725-.925.853-.327.127-.673.102-.973.033-.297-.07-.67-.247-.964-.407-.297-.16-.669-.507-.964-.857zm-4.47 7.595h-.002zM12 0C5.383 0 0 5.378 0 12c0 6.623 5.383 12 12 12 6.618 0 12-5.377 12-12S18.618 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Shop</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#shop" className="hover:text-white transition-colors">Ready Made</a></li>
              <li><a href="#custom" className="hover:text-white transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Classic Landscapes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Traditional Symbols</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://wa.me/8617717888625" className="hover:text-white transition-colors">WhatsApp: +86 177 1788 8625</a></li>
              <li>Email: info@silktapestrygallery.com</li>
              <li>International Shipping</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Silk Tapestry Gallery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
