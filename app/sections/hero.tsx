import Image from "next/image"

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-green-700 font-medium text-sm uppercase tracking-wide">
                Welcome to Agriculture Excellence
              </p>
              <h1 className="font-serif text-5xl lg:text-6xl text-slate-900 leading-tight">
                Modern Agriculture That Feeds Communities
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                At AreGreats Ventures, we blend traditional farming wisdom with modern techniques to deliver sustainable
                agricultural solutions. From crops to equipment, we&apos;re committed to your farm&apos;s success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors duration-300 text-center"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="px-8 py-3 border-2 border-green-700 text-green-700 font-medium rounded-lg hover:bg-green-50 transition-colors duration-300 text-center"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full">
            <Image
              src="/nigerian-farmland-sustainable-agriculture.jpg"
              alt="Nigerian sustainable farmland"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
