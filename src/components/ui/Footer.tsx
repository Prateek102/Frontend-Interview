export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white text-gray-500 border-t">
      {/* Inner container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500/30 pb-8">

          {/* Left */}
          <div className="md:max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="font-semibold text-gray-800">
                CA Monk
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed">
              CA Monk is a knowledge-driven platform dedicated to empowering
              Chartered Accountancy students and finance professionals.
              We share insights on finance, taxation, regulations, and career
              growth to help learners stay informed and succeed in a rapidly
              evolving industry.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-20">
            {/* Company */}
            <div>
              <h2 className="font-semibold mb-4 text-gray-800">
                Company
              </h2>
              <ul className="text-sm space-y-2">
                <li><a className="hover:text-gray-800" href="#">Home</a></li>
                <li><a className="hover:text-gray-800" href="#">About us</a></li>
                <li><a className="hover:text-gray-800" href="#">Contact us</a></li>
                <li><a className="hover:text-gray-800" href="#">Privacy policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-semibold mb-4 text-gray-800">
                Get in touch
              </h2>
              <div className="text-sm space-y-2">
                <p>+1-212-456-7890</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-center text-xs md:text-sm py-6">
          © {new Date().getFullYear()} Prateek Paswan. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
