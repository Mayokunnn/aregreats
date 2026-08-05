export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/farmers-working-together-in-sustainable-agricultur.jpg"
              alt="AreGreats Ventures team working in the field"
              className="w-full h-auto"
              // eslint-disable-next-line @next/next/no-img-element
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">About AreGreats Ventures</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We&apos;re a passionate team dedicated to transforming agriculture through sustainable practices and
                innovation. With years of experience in the field, we understand the challenges farmers face and the
                opportunities that lie ahead.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower farmers and agricultural businesses with the tools, knowledge, and resources they need to
                succeed in a sustainable and profitable way. We believe in building lasting partnerships that create
                real value for our communities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-slate-900">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-700 font-semibold">•</span>
                  <span className="text-slate-600">
                    <strong>Sustainability</strong> - We prioritize environmental stewardship in everything we do
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-700 font-semibold">•</span>
                  <span className="text-slate-600">
                    <strong>Excellence</strong> - We deliver quality products and services that exceed expectations
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-700 font-semibold">•</span>
                  <span className="text-slate-600">
                    <strong>Integrity</strong> - We conduct our business with transparency and honesty
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-700 font-semibold">•</span>
                  <span className="text-slate-600">
                    <strong>Community</strong> - We invest in the growth and well-being of the people we serve
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
