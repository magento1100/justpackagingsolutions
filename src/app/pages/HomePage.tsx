import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Factory,
  Globe,
  Handshake,
  Leaf,
  Recycle,
  Shield,
  Sparkles,
  Users,
  Box,
  Droplet,
  Sprout,
  Trash2,
  Utensils,
  HeartHandshake,
  Milk,
  Scroll,
  ShoppingBag,
} from "lucide-react";

// Import images
import logoImage from "@/assets/58dde16c9b56f9a8d8987afd2e41c3e22a802f2b.png";
import aboutImage from "@/assets/082d4ed29441baa6ca9c79bb7143c4c2cecf4cd3.png";

// Import Product Category Images
import nonPlasticImg from "@/assets/Non Plastic Packaging Solutions - Eco Friendly - 100% compostable.png";
import plasticSingleLayerImg from "@/assets/Plastic Packaging Solutions - Single Layer - Plain and Printed.png";
import plasticMultiLayerImg from "@/assets/Plastic Packaging Solutions - Multi Layer - Plain and Printed.png";
import paperPackagingImg from "@/assets/Paper Packaging Solution.png";

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

// Import Industry Icons
import foodIndustryIcon from "@/assets/Food Industry.png";
import homeCareIcon from "@/assets/Home, persona.png";
import liquidPackagingIcon from "@/assets/Liquid Packaging.png";
import agricultureIcon from "@/assets/Packaging.png";
import shoppingBagsIcon from "@/assets/Shopping.png";
import aluminumIcon from "@/assets/Aluminum.png";

export function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBySection />

      {/* About Preview Section */}
      <AboutPreviewSection />

      {/* Product Categories Section */}
      <ProductCategoriesSection />

      {/* Industries Served Section */}
      <IndustriesServedSection />

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Contact CTA Section */}
      <ContactCTASection />
    </div>
  );
}

function HeroSection() {
  const stats = [
    { value: "700+", label: "Happy Clients", icon: Handshake },
    { value: "30+", label: "Years of Experience", icon: Factory },
    { value: "10+", label: "Country Presence", icon: Globe },
    { value: "200+", label: "Tons/Month Capacity", icon: Box },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Main Hero Area */}
      <div className="bg-[#008F4C] pt-24 pb-32 text-white relative">
        {/* Background Pattern (Map Placeholder) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')", 
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               backgroundSize: "cover",
               filter: "brightness(0) invert(1)"
             }}>
        </div>
        
        <div className="relative max-w-[1200px] mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            {/* Main Logo Graphic - Orange/Beige Circle Background */}
            <div className="w-72 h-72 bg-[#E8C07D] rounded-full flex items-center justify-center border-8 border-[#C9A265] shadow-2xl relative">
               <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full flex justify-center">
                   {/* Decorative elements if needed */}
               </div>
               <img src={logoImage} alt="Just Packaging Solutions" className="w-56 h-auto drop-shadow-lg" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-[#F3E5AB] drop-shadow-md"
          >
            Sustainable Packaging Solutions for Global Brands
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 text-lg md:text-xl font-bold text-white mb-8"
          >
            <span className="bg-[#006837] px-4 py-1 rounded-full border border-[#F3E5AB]">Plastic</span>
            <span className="text-[#F3E5AB] flex items-center">•</span>
            <span className="bg-[#006837] px-4 py-1 rounded-full border border-[#F3E5AB]">Biodegradable</span>
            <span className="text-[#F3E5AB] flex items-center">•</span>
            <span className="bg-[#006837] px-4 py-1 rounded-full border border-[#F3E5AB]">Compostable</span>
            <span className="text-[#F3E5AB] flex items-center">•</span>
            <span className="bg-[#006837] px-4 py-1 rounded-full border border-[#F3E5AB]">Custom Printed Packaging</span>
          </motion.div>
        </div>
      </div>

      {/* Dark Stats Bar Strip */}
      <div className="bg-gradient-to-r from-black via-[#1a1a1a] to-black py-6 border-t-4 border-[#F3E5AB] relative z-20 -mt-10 shadow-2xl">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-700/50">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center text-center gap-2 px-2"
                >
                  <div className="flex items-center gap-3 mb-1">
                      <Icon className="w-8 h-8 text-[#F3E5AB]" />
                      <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-[#F3E5AB] uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBySection() {
  const clients = [
    { name: "NEW INDIA BAZAR", location: "USA", image: newIndiaBazarImg },
    { name: "V. B. & SONS", location: "UK", image: vbSonsImg },
    { name: "AME GUJARATI", location: "USA", image: ameGujaratiImg },
    { name: "SPECIAL", location: "Madagascar", image: specialGroupImg },
    { name: "SUBZI MANDI", location: "USA", image: subziMandiImg },
    { name: "Alif", location: "UAE", image: alifImg },
    { name: "Petolly", location: "Canada", image: petollyImg },
    { name: "Veer", location: "USA", image: veerImg },
    { name: "MOLOU INDUSTRIES", location: "MADAGASCAR", image: molouImg },
    { name: "ISLAND GRILL", location: "GAMBIA", image: islandGrillImg },
    { name: "MONGINIS", location: "INDIA", image: monginisImg },
    { name: "NIKIR", location: "INDIA", image: nikirImg },
  ];

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-3">Brands That Trust Us</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm font-medium">Trusted by companies across the globe</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center group"
            >
              <div className="bg-white w-full aspect-[3/2] rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6 mb-3 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                 <img 
                   src={client.image} 
                   alt={`${client.name} Logo`} 
                   className="max-w-full max-h-full object-contain p-2 filter transition-all duration-300 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide text-center">
                {client.name}, {client.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl relative bg-gray-100">
                {/* Placeholder for Bags Image */}
               <img
                src={aboutImage}
                alt="Packaging Bags"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 right-0 bg-[#008F4C] text-white p-6 rounded-tl-3xl shadow-lg">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-xs font-bold uppercase tracking-wider">Years of Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-6 leading-tight">
              Over 30 Years of <br/>Packaging Excellence
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Just Packaging Solutions is a manufacturer and supplier of flexible packaging solutions
              with more than three decades of industry experience. We deliver high-quality laminated
              rolls, flexible packaging, and customized solutions tailored to every industry.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#1F3A5F] text-white rounded-md font-semibold
                hover:bg-[#008F4C] transition-all duration-300 shadow-lg"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductCategoriesSection() {
  const categories = [
    {
      title: "Non Plastic Packaging Solutions - Eco Friendly - 100% compostable",
      image: nonPlasticImg,
    },
    {
      title: "Plastic Packaging Solutions - Single Layer - Plain and Printed",
      image: plasticSingleLayerImg,
    },
    {
      title: "Plastic Packaging Solutions - Multi Layer - Plain and Printed",
      image: plasticMultiLayerImg,
    },
    {
      title: "Paper Packaging Solution",
      image: paperPackagingImg,
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-4">Our Product Categories</h2>
          <p className="text-lg text-gray-600">
            Comprehensive packaging solutions for every industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Area with Green Overlay on Hover */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#008F4C]/0 group-hover:bg-[#008F4C]/20 transition-all duration-300"></div>
              </div>
              
              {/* Content Area */}
              <div className="p-6 bg-white border-t border-gray-100 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#1F3A5F] mb-4">
                    {category.title}
                  </h3>
                </div>
                <Link
                  to="/products"
                  className="text-sm font-semibold text-[#008F4C] hover:text-[#1F3A5F] inline-flex items-center gap-1 transition-colors mt-auto"
                >
                  View Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesServedSection() {
  const industries = [
    { name: "Food Industry", icon: foodIndustryIcon },
    { name: "Home, Personal & Health Care Packaging", icon: homeCareIcon },
    { name: "Liquid Packaging", icon: liquidPackagingIcon },
    { name: "Packaging for Agriculture Needs", icon: agricultureIcon },
    { name: "Shopping & Trash Bags", icon: shoppingBagsIcon },
    { name: "Aluminum Foil Based Wrappers & Liners", icon: aluminumIcon },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600">Providing packaging solutions across diverse sectors</p>
        </motion.div>

        {/* Changed grid to support 6 columns on large screens to match the single row look */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => {
             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-4 text-center group h-full"
              >
                <div className="w-full aspect-square bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#008F4C] group-hover:border-[#008F4C] group-hover:text-white transition-all duration-300 p-6">
                  <img 
                    src={industry.icon} 
                    alt={industry.name} 
                    className="w-12 h-12 object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                  />
                </div>
                <h4 className="font-bold text-[#1F3A5F] group-hover:text-[#008F4C] transition-colors duration-300 text-sm md:text-base leading-tight max-w-[150px]">
                  {industry.name}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SustainabilitySection() {
  const features = [
    { icon: Leaf, text: "Eco-friendly materials" },
    { icon: Recycle, text: "Reduced carbon footprint" },
    { icon: Shield, text: "Fully recyclable" },
    { icon: Factory, text: "Energy efficient manufacturing" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#006837]">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-10" 
            style={{ 
               backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", 
               backgroundSize: "20px 20px" 
            }}>
       </div>

      <div className="relative max-w-[1200px] mx-auto px-6 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable Packaging for a Better Future</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90 font-light leading-relaxed">
            We strive to develop eco-friendly packaging materials that reduce environmental impact
            while maintaining durability and quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20 border-2 border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="font-medium text-lg">{feature.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-12 py-4 bg-white text-[#006837] rounded-md font-bold text-lg
              hover:bg-[#F3E5AB] transition-all duration-300 shadow-xl transform hover:scale-105"
          >
            Join Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Users,
      title: "30+ Years Experience",
      description: "Three decades of excellence in flexible packaging manufacturing",
    },
    {
      icon: Factory,
      title: "Advanced Technology",
      description: "State-of-the-art manufacturing facilities and equipment",
    },
    {
      icon: Sparkles,
      title: "Custom Packaging Solutions",
      description: "Tailored packaging designed to meet your specific requirements",
    },
    {
      icon: Globe,
      title: "Global Client Network",
      description: "Trusted by 700+ clients across 10+ countries worldwide",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3A5F] mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">
            Your trusted partner for comprehensive packaging solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="text-center p-8 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:shadow-xl hover:border-[#008F4C]/20 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-[#008F4C]" />
                </div>
                <h4 className="text-xl font-bold text-[#1F3A5F] mb-3">{reason.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCTASection() {
  const handleDownload = () => {
    const b64 =
      "JVBERi0xLjQKJcTl8uXrp/Og0MTGCjEgMCBvYmoKPDwvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMiAwIFI+PgplbmRvYmoKMiAwIG9iago8PC9UeXBlIC9QYWdlcyAvS2lkcyBbMyAwIFJdIC9Db3VudCAxPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZSAvUGFnZSAvUGFyZW50IDIgMCBSIC9NZWRpYUJveCBbMCAwIDU5NSA4NDJdIC9Db250ZW50cyA0IDAgUiAvUmVzb3VyY2VzIDw8L0ZvbnQgPDwvRjEgNSAwIFI+Pj4+PgplbmRvYmoKNCAwIG9iago8PC9MZW5ndGggNDQ+PgpzdHJlYW0KQlQKL0YxIDE4IFRmIDcyIDc3MCBUZCAoQnJvY2h1cmUgQ29taW5nIFNvb24pIFRqIEVUCmVuZHN0cmVhbQplbmRvYmoKNSAwIG9iago8PC9UeXBlIC9Gb250IC9TdWJ0eXBlIC9UeXBlMSAvQmFzZUZvbnQgL0hlbHZldGljYT4+CmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDA3MDkgMDAwMDAgbiAKMDAwMDAwMDE3NSAwMDAwMCBuIAowMDAwMDAwMzAyIDAwMDAwIG4gCjAwMDAwMDA0MTAgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDYgL1Jvb3QgMSAwIFI+PgpzdGFydHhyZWYKNDQ3CiUlRU9GCg==";
    try {
      const bin = atob(b64);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const blob = new Blob([bytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `just-packaging-solutions-brochure.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {}
  };
  return (
    <section className="py-20 bg-[#1F3A5F] text-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for the right packaging solution?</h2>
          <p className="text-xl mb-10 text-white/80 font-light">Talk to our experts today.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#008F4C] text-white rounded-md font-bold
                hover:bg-[#00a85a] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
            <button
              onClick={handleDownload}
              className="px-8 py-4 border border-white/30 text-white rounded-md font-bold
                hover:bg-white hover:text-[#1F3A5F] hover:border-white transition-all duration-300 transform hover:-translate-y-1
                flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
