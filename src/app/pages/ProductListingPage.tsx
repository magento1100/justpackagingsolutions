import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Search, ArrowRight, Check } from "lucide-react";


import productsData from "@/data/products.json";
import img1 from "@/assets/b2bimages (1).png";
import img2 from "@/assets/b2bimages (3).png";
import img3 from "@/assets/b2bimages (2).png";
import img4 from "@/assets/b2bimages (5).png";
import img5 from "@/assets/b2bimages (4).png";
import img6 from "@/assets/b2bimages (6).png";
import img7 from "@/assets/b2bimages (7).png";
import img8 from "@/assets/b2bimages (8).png";
import img9 from "@/assets/b2bimages (9).png";
import img10 from "@/assets/b2bimages (10).png";
import img11 from "@/assets/b2bimages (11).png";
import img12 from "@/assets/b2bimages (12).png";
import img13 from "@/assets/b2bimages (13).png";
import img14 from "@/assets/b2bimages (14).png";
import img15 from "@/assets/b2bimages (15).png";
import img16 from "@/assets/b2bimages (16).png";
import img17 from "@/assets/b2bimages (17).png";

const imageMap: Record<string, string> = {
  "b2bimages (1).png": img1,
  "b2bimages (3).png": img2,
  "b2bimages (2).png": img3,
  "b2bimages (5).png": img4,
  "b2bimages (4).png": img5,
  "b2bimages (6).png": img6,
  "b2bimages (7).png": img7,
  "b2bimages (8).png": img8,
  "b2bimages (9).png": img9,
  "b2bimages (10).png": img10,
  "b2bimages (11).png": img11,
  "b2bimages (12).png": img12,
  "b2bimages (13).png": img13,
  "b2bimages (14).png": img14,
  "b2bimages (15).png": img15,
  "b2bimages (16).png": img16,
  "b2bimages (17).png": img17,
};

const PLACEHOLDER_IMG =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#F3F4F6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9CA3AF" font-family="sans-serif" font-size="16">Image not provided</text></svg>'
  );

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const resolveInternalCategory = (sectionCategory: string, itemType?: string) => {
  if (sectionCategory.includes("100% Compostable")) return "Compostable Packaging";
  if (sectionCategory.includes("Single Layer")) return "Single Layer";
  // if (sectionCategory.includes("Multi Layer")) {
  //   if (itemType && itemType.toLowerCase().includes("roll")) return "Laminated Rolls";
  //   return "Pouches";
  // }
  if (sectionCategory.includes("Multi Layer")) {
    return "Multi Layer";
  }

  if (sectionCategory.includes("Paper Packaging")) return "Paper Packaging";
  return sectionCategory;
};

type Section = {
  category: string;
  items: any[];
};

const flatItems: any[] = [];
(productsData as any).products.forEach((section: Section) => {
  section.items.forEach((item: any) => flatItems.push({ section, item }));
});

const resolveImageRef = (ref?: string): string | undefined => {
  if (!ref) return undefined;
  const base = ref.replace(/^.*[\\\//]/, "");
  if (imageMap[base]) return imageMap[base];
  if (/^(https?:)?\/\//.test(ref) || ref.startsWith("/")) return ref;
  return undefined;
};

const idImageMap: Record<string, string[]> = {
  "100-compostable-shopping-bag": [img1],
  "100-compostable-pet-poop-bag": [img2],
  "100-compostable-trash-bag": [img3],
  "shopping-bag": [img4],
  "fruit-veggies-bags-rolls-and-go": [img5],
  "trash-bag": [img6],
  "laminated-packaging-roll-form": [img7],
  "laminated-packaging-pouch-form": [img8],
  "spout-pouches": [img9],
  "standy-pouches": [img10],
  "handle-d-punch-pouches": [img11],
  "flat-bottom-box-standy-pouches": [img12],
  "vacuum-seal-pouches": [img13],
  "plain-metalized-packaging-solution-pouch-and-roll-form": [img14],
  "window-metalized-packaging-solution-pouch-and-roll-form": [img15],
  "other-regular-pouches-center-seal-side-seal-perforation-side-gusset": [img16],
  "paper-packaging": [img17],
};

const getImagesForItem = (section: Section, item: any): string[] => {
  const refs: string[] = Array.isArray(item.images)
    ? item.images
    : item.image_url
    ? [item.image_url]
    : item.image
    ? [item.image]
    : [];
  const resolved = refs
    .map((ref) => resolveImageRef(ref))
    .filter(Boolean) as string[];
  const unique = Array.from(new Set(resolved));
  if (unique.length > 0) return unique;

  const id = slugify(item.name || item.type);
  if (idImageMap[id]) return idImageMap[id];

  const cat = resolveInternalCategory(section.category, item.type);
  const name = String(item.name || item.type || "").toLowerCase();
  if (cat === "Compostable Packaging") {
    if (name.includes("trash")) return [img3];
    return [img1];
  }
  if (cat === "Single Layer") {
    if (name.includes("trash")) return [img3];
    if (name.includes("fruit") || name.includes("veggie") || name.includes("vegetable")) return [img2];
    return [img1];
  }
  if (cat === "Laminated Rolls") return [img4];
  if (cat === "Pouches") {
    if (name.includes("spout")) return [img6];
    if (name.includes("standy") || name.includes("stand-up")) return [img7];
    if (name.includes("handle") || name.includes("d-punch")) return [img8];
    if (name.includes("flat") || name.includes("box")) return [img9];
    if (name.includes("vacuum")) return [img10];
    if (name.includes("window")) return [img12];
    if (name.includes("plain") || name.includes("metaliz") || name.includes("metalliz")) return [img11];
    if (name.includes("regular")) return [img13];
    return [img7];
  }
  if (cat === "Paper Packaging") return [img14];
  return [img1];
};

const products = flatItems.map(({ section, item }) => {
  const id = slugify(item.name || item.type);
  const category = resolveInternalCategory(section.category, item.type);
  const description = item.shortDescription || item.type || "See details for specifications and customization.";
  const imgs = getImagesForItem(section, item);
  const image = imgs[0] || PLACEHOLDER_IMG;
  return { id, name: item.name, category, description, image };
});

export function ProductListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  }, []);

  const categories = [
    "All Products",
    "100% Compostable Packaging",
    "Single Layer Plastic Packaging",
    "Multi Layer Plastic Packaging",
    "Paper Packaging",
  ];

  const categoryMap: Record<string, string[] | null> = {
    "All Products": null,
    "100% Compostable Packaging": ["Compostable Packaging"],
    "Single Layer Plastic Packaging": ["Single Layer"],
    "Multi Layer Plastic Packaging ": ["Multi Layer"],
    "Paper Packaging": ["Paper Packaging"],
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const targets = categoryMap[selectedCategory];
    const matchesCategory =
      !targets || targets.length === 0 || targets.includes(product.category);
    return matchesSearch && matchesCategory;
  });

  

  const getSubtitle = (category: string) => {
    if (category === "Compostable Packaging") return "100% COMPOSTABLE";
    if (category === "Single Layer ") return "SINGLE LAYER ";
    if (category === "Laminated Rolls" || category === "Pouches") return "MULTI LAYER";
    if (category === "Paper Packaging") return "PAPER PACKAGING";
    return category.toUpperCase();
  };

  const getFeatures = (category: string) => {
    if (category === "Compostable Packaging") {
      return [
        "Made from plant base organic material.",
        "BPA Free.",
      ];
    }
    if (category === "Single Layer") {
      return [
        "Made from Low-Density Poly Ethylene.",
        "100% Recyclable and Re-usable.",
      ];
    }
    if (category === "Multi Layer") {
      return [
        "Can be provided in range of 2, 3 or 4 layers.",
        "Food Grade Material.",
      ];
    }
    // if (category === "Multi Layer") {
    //   return [
    //     "Can be provided in range of 2, 3 or 4 layers.",
    //     "Food Grade Material.",
    //   ];
    // }
    if (category === "Paper Packaging") {
      return [
        "Made from Low-Density Poly Ethylene.",
        "100% Recyclable and Re-usable.",
      ];
    }
    return [] as string[];
  };

  const getBadgeLabel = (category: string): string | null => {
    if (category === "Compostable Packaging") return "100% Compostable Packaging";
    if (category === "Single Layer ") return "Single Layer Plastic Packaging";
    if (category === "Multi Layer" ) return "Multi Layer Plastic Packaging";
    if (category === "Paper Packaging") return "Paper Packaging";
    return null;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F3A5F] via-[#1F3A5F] to-[#2FAE7F] text-white py-24 md:py-28">
        <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative max-w-[1200px] mx-auto px-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Product Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-white/90 max-w-2xl"
          >
            Comprehensive flexible packaging solutions for every industry. From single-layer to multi-layer, plastic to eco-friendly - we have the perfect packaging for your needs.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-10 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none
                  focus:ring-2 focus:ring-[#2FAE7F] focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-3 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                    ? "bg-[#2FAE7F] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1300px] mx-auto px-10">
          <div className="text-sm text-gray-500 mb-6">Showing <span className="font-semibold text-[#1F3A5F]">{filteredProducts.length}</span> products</div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1, margin: "200px 0px 200px 0px" }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: Math.min(index, 6) * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
                >
                  <div
                    className="relative h-72 overflow-hidden"

                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain bg-white transform group-hover:scale-[1.02] transition-transform duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(249,250,251,0.9) 0%, rgba(243,244,246,0.9) 100%)",
                      }}
                    />
                    {(() => {
                      const badge = getBadgeLabel(product.category);
                      return badge ? (
                        <div className="absolute top-4 left-4 bg-white text-[#1F3A5F] px-3 py-1 rounded-full text-xs font-semibold shadow">
                          {badge}
                        </div>
                      ) : null;
                    })()}
                  </div>
                  <div className="bg-white flex flex-col flex-1">
                    <div className="p-6">
                      {/* <div className="text-xs font-semibold tracking-wider text-[#008F4C] mb-2">
                        {getSubtitle(product.category)}
                      </div> */}
                      <h3 className="text-xl font-semibold text-[#1F3A5F] mb-3">{product.name}</h3>
                      {getFeatures(product.category).length > 0 && (
                        <ul className="space-y-2 mb-6">
                          {getFeatures(product.category).map((f) => (
                            <li key={f} className="flex items-start gap-2 text-gray-700">
                              <Check className="w-4 h-4 text-[#2FAE7F] mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <Link
                      onClick={() => {
                        try {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } catch {
                          window.scrollTo(0, 0);
                        }
                      }}
                      to={`/products/${product.id}`}
                      className="mx-6 mt-auto mb-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1F3A5F] text-white w-[calc(100%-3rem)]
                        hover:bg-[#0f2742] transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
