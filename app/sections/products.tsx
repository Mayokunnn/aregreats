import Image from "next/image"

const products = [
  {
    name: "Organic Seeds Collection",
    category: "Seeds",
    description: "High-quality, organic seeds for vegetables, grains, and legumes",
    image: "/nigerian-organic-seeds-collection.jpg",
  },
  {
    name: "Premium Fertilizers",
    category: "Inputs",
    description: "Balanced nutrition solutions for optimal crop growth",
    image: "/nigerian-premium-fertilizers.jpg",
  },
  {
    name: "Modern Farm Equipment",
    category: "Equipment",
    description: "Durable, efficient tools for small to medium-scale farms",
    image: "/nigerian-modern-farm-equipment.jpg",
  },
  {
    name: "Processed Agricultural Goods",
    category: "Agroprocessing",
    description: "Farm-to-table packaged products with premium quality",
    image: "/nigerian-processed-agricultural-goods.jpg",
  },
  {
    name: "Pest Management Solutions",
    category: "Inputs",
    description: "Eco-friendly and effective pest control products",
    image: "/nigerian-pest-management-solutions.jpg",
  },
  {
    name: "Consultation Packages",
    category: "Services",
    description: "Tailored farming strategies and expert advisory",
    image: "/nigerian-farming-consultation.jpg",
  },
]

export default function Products() {
  return (
    <section id="products" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="font-serif text-4xl lg:text-5xl text-slate-900">Our Products</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Quality products and services carefully selected to support every aspect of your agricultural journey.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="space-y-4 p-6 border border-amber-100 rounded-lg hover:border-green-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-full h-40 bg-gradient-to-br from-green-50 to-amber-50 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={280}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-green-700 font-medium uppercase tracking-wide">{product.category}</p>
                <h3 className="font-serif text-lg font-semibold text-slate-900">{product.name}</h3>
                <p className="text-slate-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
