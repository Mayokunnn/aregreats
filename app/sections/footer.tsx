import Link from "next/link"
import { Leaf } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="text-green-500" size={24} />
              <span className="font-serif text-lg font-semibold">AreGreats</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Modern agriculture that feeds communities and sustains our future.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-slate-400 hover:text-green-400 transition-colors">
                  General Farming
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-green-400 transition-colors">
                  Agroprocessing
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-slate-400 hover:text-green-400 transition-colors">
                  Equipment & Inputs
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-400 hover:text-green-400 transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-slate-400 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-400 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-400 hover:text-green-400 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-400 hover:text-green-400 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Stay Updated</h4>
            <p className="text-slate-400 text-sm">Get farming tips and product updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="px-4 py-2 bg-green-700 text-white rounded text-sm font-medium hover:bg-green-800 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} AreGreats Ventures. All rights reserved.</p>
          <p>Cultivating sustainable futures</p>
        </div>
      </div>
    </footer>
  )
}
