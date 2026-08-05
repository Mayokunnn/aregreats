import { Leaf, Briefcase, Package, BookOpen } from "lucide-react"

const services = [
  {
    icon: Leaf,
    title: "General Farming",
    description:
      "Comprehensive crop cultivation and livestock management using sustainable practices and proven techniques.",
  },
  {
    icon: Package,
    title: "Agroprocessing",
    description:
      "Transform raw farm produce into high-quality finished goods. From storage to packaging, we handle it all.",
  },
  {
    icon: Briefcase,
    title: "Farm Equipment & Inputs",
    description: "Quality tools, seeds, fertilizers, and modern equipment to enhance your farm&apos;s productivity.",
  },
  {
    icon: BookOpen,
    title: "Agricultural Consulting",
    description: "Expert guidance on crop planning, pest management, soil health, and sustainable farming strategies.",
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full bg-amber-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            We provide comprehensive agricultural solutions designed to help your farm thrive and grow sustainably.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="space-y-4 p-8 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon className="text-green-700" size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
