
import { Button } from "@/components/ui/button"
function Features() {
  return (
    <section className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] overflow-hidden ">
          <img
            src="feature.webp"
            alt="Fashion model at beach during sunset"
          
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content Container */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#4A1E1C]">
            Effortless, ethical and always in season.
          </h1>
          <p className="text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
            We believe in taking our time to do things right. Rather than chasing trends, we create clothing that lasts
            for endless summers ahead. Our dedication to thoughtful production allows us to prioritize quality over
            quantity, choosing to focus on fewer, more meaningful releases rather than rushing to keep up with seasonal
            pressures. With our 'no-leftover' policy, we only produce what we think we will sell—because landfills have
            no place in our journey.
          </p>
          <Button
            variant="outline"
            className="min-w-[160px] h-12 text-[#4A1E1C] border-[#4A1E1C] hover:bg-[#4A1E1C] hover:text-white transition-colors"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Features