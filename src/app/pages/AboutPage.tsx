import { motion } from "motion/react";
import { Target, Eye, Leaf, Factory, Globe, Award, Users, TrendingUp, Star, LineChart } from "lucide-react";

// Import Brand Logos
import newIndiaBazarImg from "@/assets/NEW INDIA BAZAR, USA.png";
import vbSonsImg from "@/assets/V. B. & SONS, UK.png";
import ameGujaratiImg from "@/assets/AME GUJARATI, USA.png";
import specialGroupImg from "@/assets/Special Group, Madagascar.png";
import subziMandiImg from "@/assets/SABZI MANDI, USA.png";
import alifImg from "@/assets/Alif, UAE.png";
import petollyImg from "@/assets/Petolly, Canada.png";
import veerImg from "@/assets/Veer, USA.png";
import molouImg from "@/assets/Molou Industries.png";
import islandGrillImg from "@/assets/Island Grill, Gambia.png";
import monginisImg from "@/assets/Monginis, India.png";
import nikirImg from "@/assets/Nikir,INDIA.png";
import facilityImg1 from "@/assets/bac1237caa117bbc079110f92dc7797e6df11c28.png";
import facilityImg2 from "@/assets/f9acc6006b08ddd067158357c3d72556dc9fbb3b.png";
import facilityImg3 from "@/assets/67ec502b1ba108259238ac174c22b0c91268eec8.png";

export function AboutPage() {
  return (
    <div>
    
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1600&h=600&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A5F]/90 to-[#1F3A5F]/70"></div>
        <div className="relative h-full max-w-[1200px] mx-auto px-10 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl font-bold mb-4"
          >
            About Just Packaging Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-xl max-w-2xl"
          >
            Delivering innovation in flexible packaging for over 30 years.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Just Packaging Solutions is a manufacturer and exporter of flexible packaging
                materials including laminated rolls and customized packaging products.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our facility in Ahmedabad is equipped with next-generation technology that ensures
                high-quality manufacturing standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over three decades of industry experience, we have built a reputation for
                excellence, reliability, and innovation in the packaging industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Manufacturing Facility"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2FAE7F] to-[#57C785] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1F3A5F] mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a leading flexible packaging company by delivering innovative packaging
                solutions that enhance product visibility, protection, and sustainability. We aim to
                set industry standards through continuous improvement and customer-centric approach.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1F3A5F] to-[#2FAE7F] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1F3A5F] mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide high-quality, customized flexible packaging solutions that meet the
                diverse needs of our global clientele while maintaining environmental
                responsibility and operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1F3A5F] mb-4">Commitment to Sustainability</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on sustainable manufacturing by reducing energy consumption, improving water
              and air quality, and promoting recycling initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Eco-Friendly Materials",
                description:
                  "We prioritize the use of biodegradable and compostable materials in our product line.",
              },
              {
                icon: Factory,
                title: "Energy Efficiency",
                description:
                  "Our manufacturing processes are optimized to minimize energy consumption and waste.",
              },
              {
                icon: Globe,
                title: "Environmental Standards",
                description:
                  "We comply with international environmental standards and certifications.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#F5F7FA] to-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2FAE7F] to-[#57C785] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#1F3A5F] mb-4">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production Facility */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1F3A5F] mb-4">Our Production Facility</h2>
            <p className="text-lg text-gray-600">
              State-of-the-art manufacturing infrastructure in Ahmedabad
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[facilityImg1, facilityImg2, facilityImg3].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-xl group"
              >
                <img
                  src={image}
                  alt={`Facility ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-xl"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our production facility is spread across 5000 square meters in Ahmedabad and complies
              with environmental standards. Equipped with advanced machinery and technology, we ensure
              precision, quality, and efficiency in every production run.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The facility operates under strict quality control measures and follows international
              manufacturing standards to deliver products that meet global compliance requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#216b45] text-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "700+", label: "Happy Clients" },
              {
                svgPath: "M38.4754 26.1268C40.0217 24.9753 40.6548 22.9635 40.0482 21.1349C39.4416 19.304 37.732 18.0687 35.8041 18.0687C33.8761 18.0687 32.1666 19.304 31.56 21.1349C30.9533 22.9636 31.5886 24.9753 33.135 26.1268C31.3041 26.6408 29.6629 27.6775 28.4144 29.1114C27.6511 28.7386 26.8526 28.4474 26.0276 28.24C28.0768 26.9165 29.0077 24.4018 28.3173 22.0615C27.6246 19.7233 25.4783 18.1174 23.0385 18.1174C20.5988 18.1174 18.4525 19.7233 17.7598 22.0615C17.0693 24.402 18.0002 26.9168 20.0495 28.24C19.2245 28.4474 18.426 28.7386 17.6627 29.1114C16.4142 27.6775 14.773 26.6386 12.9421 26.1246C14.4906 24.9731 15.1237 22.9591 14.5171 21.1304C13.9127 19.2995 12.2009 18.0642 10.273 18.0642C8.34501 18.0642 6.63326 19.2995 6.02665 21.1304C5.42004 22.9591 6.05533 24.9731 7.60168 26.1246C5.5436 26.7092 3.73252 27.9467 2.4421 29.654C1.15162 31.3592 0.452398 33.4393 0.450195 35.579C0.450195 35.7995 0.567107 36.0047 0.756816 36.1194C3.62887 37.8334 6.90933 38.7378 10.253 38.7356C10.4471 38.7356 10.6412 38.7312 10.8353 38.7268C10.7802 39.2032 10.7515 39.6819 10.7515 40.1606C10.7515 40.3812 10.8684 40.5864 11.0581 40.6989C14.6824 42.8584 18.8206 43.9967 23.0384 43.9967C27.2563 43.9967 31.3944 42.8584 35.0188 40.6989C35.2085 40.5864 35.3254 40.3812 35.3254 40.1606C35.3254 39.6819 35.2967 39.2033 35.2416 38.7268C35.4357 38.7334 35.6298 38.7356 35.8239 38.7356C39.168 38.7378 42.4479 37.8334 45.32 36.1194C45.5098 36.0047 45.6267 35.7995 45.6267 35.579C45.6245 33.4414 44.9252 31.3613 43.6348 29.6563C42.3443 27.9489 40.5313 26.7114 38.4754 26.1268Z",
                viewBox: "0 0 47 45", value: "30+", label: "Years of Experience"
              },
              { icon: Globe, value: "10+", label: "Country Presence" },
              { icon: TrendingUp, value: "200+", label: "Tons/Month Capacity" },
            ].map((stat: any, index) => {
              const Icon = stat.icon as any;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  {Icon ? (
                    <Icon className="w-10 h-10 mx-auto mb-4 stroke-1" />
                  ) : (
                    <svg
                      className="w-10 h-10 mx-auto mb-4"
                      viewBox={stat.viewBox || "0 0 24 24"}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={stat.svgPath} />
                    </svg>
                  )}
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-white/90">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-4">Our Valued Clients</h2>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
              Trusted by leading brands across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "NEW INDIA BAZAR, USA", image: newIndiaBazarImg },
              { name: "V. B. & SONS, UK", image: vbSonsImg },
              { name: "AME GUJARATI, USA", image: ameGujaratiImg },
              { name: "Special Group, Madagascar", image: specialGroupImg },
              { name: "SABZI MANDI, USA", image: subziMandiImg },
              { name: "Alif, UAE", image: alifImg },
              { name: "Petolly, Canada", image: petollyImg },
              { name: "Veer, USA", image: veerImg },
              { name: "MOLOU INDUSTRIES, MADAGASCAR", image: molouImg },
              { name: "ISLAND GRILL, GAMBIA", image: islandGrillImg },
              { name: "MONGINIS, INDIA", image: monginisImg },
              { name: "NIKIR, INDIA", image: nikirImg },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100/80 p-6 flex flex-col items-center justify-between gap-6 hover:shadow-md transition-shadow"
              >
                <div className="h-20 w-full flex items-center justify-center">
                  <img src={client.image} alt={client.name} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
