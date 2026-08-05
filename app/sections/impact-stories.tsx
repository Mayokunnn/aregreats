import Image from "next/image"

const stories = [
  {
    title: "Doubles Yield in Two Seasons",
    location: "Western Region, Nigeria",
    excerpt: "A 15-hectare farm increased output by 100% using our consulting and modern equipment solutions.",
    image: "/nigerian-thriving-farmland.jpg",
  },
  {
    title: "From Farm to Market in Days",
    location: "Lagos, Nigeria",
    excerpt: "Local farmers now process and sell value-added products, increasing profit margins significantly.",
    image: "/nigerian-farmers-market-produce.jpg",
  },
  {
    title: "Sustainable Livestock Growth",
    location: "Northern Nigeria",
    excerpt: "A 200-head cattle operation transformed with our advisory and premium feed solutions.",
    image: "/nigerian-livestock-grazing.jpg",
  },
]

export default function ImpactStories() {
  return (
    <section className="w-full bg-amber-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">Impact Stories</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Real farms. Real results. Proven success stories from farmers who trusted AreGreats Ventures.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="space-y-4 overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm text-green-700 font-medium uppercase tracking-wide">{story.location}</p>
                <h3 className="font-serif text-xl font-semibold text-slate-900">{story.title}</h3>
                <p className="text-slate-600 leading-relaxed">{story.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
