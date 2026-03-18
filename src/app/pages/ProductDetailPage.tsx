import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  Download,
  Mail,
  Check,
  ShoppingBag,
  Droplet,
  Sparkles,
  Package,
  ArrowLeft,
} from "lucide-react";


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
  if (sectionCategory.includes("100% Compostable Packaging")) return "Compostable Packaging";
  if (sectionCategory.includes("Single Layer Plastic Packaging")) return "Single Layer Plastic Packaging";
  if (sectionCategory.includes("Multi Layer Plastic Packaging")) {
    if (itemType && itemType.toLowerCase().includes("roll")) return "Laminated Rolls";
    return "Pouches";
  }
  if (sectionCategory.includes("Paper Packaging")) return "Paper Packaging";
  return sectionCategory;
};

type Section = { category: string; items: any[] };
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

const productDatabase: Record<string, any> = Object.fromEntries(
  flatItems.map(({ section, item }) => {
    const id = slugify(item.name || item.type);
    const images = getImagesForItem(section, item);
    const category = resolveInternalCategory(section.category, item.type);
    const description = item.description || item.type || "See product details for specifications and customization.";
    return [
      id,
      {
        id,
        name: item.name,
        category,
        description,
        images,
        specifications: item.specifications || item.product_specification,
        advantages: item.advantages,
        benefits: item.benefits,
        customization: item.customization,
        suitable_for: item.suitable_for,
        material_caution: item.material_caution,
        thickness_guide: item.thickness_guide,
      },
    ];
  })
);

export function ProductDetailPage() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = id && productDatabase[id] ? productDatabase[id] : productDatabase["shopping-bags"];
  const isSingle = (product.images?.length || 0) === 1;

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
    setCurrentImageIndex(0);
  }, [id]);

  const handleDownloadBrochure = () => {
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
      a.download = `${product.id || "product"}-brochure.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Fallback: open in new tab
      const w = window.open();
      if (w) w.document.write("<p>Unable to download brochure. Please try again later.</p>");
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-[#F5F7FA] py-6">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#2FAE7F] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#2FAE7F] transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-[#1F3A5F] font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1300px] mx-auto px-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#2FAE7F] hover:text-[#1F3A5F] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-[470px] object-contain bg-white rounded-2xl shadow-2xl"
                />
              </div>
              <div className={isSingle ? "flex justify-center" : "grid grid-cols-3 gap-4"}>
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`${isSingle ? "w-44 h-34" : "w-28 h-28"} rounded-xl overflow-hidden border-2 bg-white transition-all ${currentImageIndex === index
                        ? "border-[#2FAE7F] shadow-lg"
                        : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-[#57C785]/10 text-[#2FAE7F] px-4 py-2 rounded-full text-sm font-medium mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-[#1F3A5F] mb-6">{product.name}</h1>
              <p className="text-lg text-gray-700 leading-relaxed"></p>
              {(() => {
                const s: any = product.specifications;
                if (!s) return null;
                const lines: string[] = [];
                if (s.compostable === true && s.non_plastic === true) {
                  lines.push("100% compostable – non-plastic.");
                }
                if (typeof s.material === "string" && s.material.trim().length) {
                  lines.push(`Made from ${s.material}.`);
                }
                if (Array.isArray(s.material) && s.material.length) {
                  s.material.forEach((m: string) => lines.push(m));
                }
                if (s.bpa_free === true) lines.push("BPA Free.");
                if (s.unscented === true) lines.push("Unscented.");
                if (s.recyclable === true) lines.push("Recyclable.");
                if (s.reusable === true) lines.push("Reusable.");
                if (Array.isArray(s.certifications) && s.certifications.length) {
                  lines.push(`Approved/Certified: ${s.certifications.join(", ")}.`);
                }
                if (!lines.length) return null;
                return (
                  <ul className="list-disc pl-6 text-gray-700 mt-3 mb-8 space-y-1">
                    {lines.map((txt, i) => (
                      <li key={i}>{txt}</li>
                    ))}
                  </ul>
                );
              })()}

              <div className="flex gap-4 mb-8">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-8 py-4 bg-[#2FAE7F] text-white rounded-lg font-semibold
                    hover:bg-[#57C785] hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Request Quote
                </Link>
                <button
                  onClick={handleDownloadBrochure}
                  className="flex items-center gap-2 px-8 py-4 border-2 border-[#1F3A5F] text-[#1F3A5F] rounded-lg font-semibold
                    hover:bg-[#1F3A5F] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </button>
              </div>

              {Array.isArray(product.material_caution) && product.material_caution.length > 0 ? (
                <div className="bg-[#F5F7FA] p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-[#1F3A5F] mb-4">Material Caution</h3>
                  <ul className="space-y-3">
                    {product.material_caution.map((txt: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-[#2FAE7F] mt-0.5 flex-shrink-0" /> {txt}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (() => {
                const s: any = product.specifications;
                if (!s) return null;
                const bullets: string[] = [];
                const mat = s.material || s.materials;
                if (Array.isArray(mat)) bullets.push(...mat);
                else if (typeof mat === "string") bullets.push(mat);
                const addBool = (k: string, label: string) => {
                  if (typeof s?.[k] === "boolean") bullets.push(`${label}: ${s[k] ? "Yes" : "No"}`);
                };
                addBool("recyclable", "Recyclable");
                addBool("reusable", "Reusable");
                addBool("compostable", "Compostable");
                addBool("bpa_free", "BPA Free");
                addBool("unscented", "Unscented");
                if (Array.isArray(s.certifications) && s.certifications.length) {
                  bullets.push(`Certifications: ${s.certifications.join(", ")}`);
                }
                if (!bullets.length) return null;
                return (
                  <div className="bg-[#F5F7FA] p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-[#1F3A5F] mb-4">Material Options</h3>
                    <ul className="space-y-3">
                      {bullets.map((txt, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <Check className="w-5 h-5 text-[#2FAE7F] mt-0.5 flex-shrink-0" /> {txt}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Details (Advantages & Customization) */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1F3A5F] mb-6">Product Details</h2>
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            {(() => {
              const adv: string[] | undefined = Array.isArray(product.advantages)
                ? product.advantages
                : Array.isArray(product.benefits)
                  ? product.benefits
                  : undefined;
              return adv && adv.length > 0 ? (
                <div className="mb-6">
                  <div className="text-xs font-extrabold tracking-widest text-[#1F3A5F] mb-3">ADVANTAGES</div>
                  <ul className="space-y-3">
                    {adv.map((txt, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-[#2FAE7F] mt-0.5" /> {txt}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null;
            })()}
            {Array.isArray(product.customization) && product.customization.length > 0 ? (
              <div>
                <div className="text-xs font-extrabold tracking-widest text-[#1F3A5F] mb-3">CUSTOMIZATION</div>
                <ul className="space-y-3">
                  {product.customization.map((txt: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <Check className="w-5 h-5 text-[#2FAE7F] mt-0.5" /> {txt}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      {/* <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-10">
          <h2 className="text-3xl font-bold text-[#1F3A5F] mb-8">Product Specifications</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <tr
                    key={key}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-8 py-5 font-semibold text-[#1F3A5F] w-1/3">{key}</td>
                    <td className="px-8 py-5 text-gray-700">{value as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* Features */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <h2 className="text-3xl font-bold text-[#1F3A5F] mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {product.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#F5F7FA] rounded-xl"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#2FAE7F] to-[#57C785] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-medium pt-2">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Industries Using This Product */}
      {/* <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1200px] mx-auto px-10">
          <h2 className="text-3xl font-bold text-[#1F3A5F] mb-8">Industries Using This Product</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {product.industries.map((industry: string, index: number) => {
              const icons: Record<string, any> = {
                "Food Industry": Droplet,
                "Retail": ShoppingBag,
                "Cosmetics": Sparkles,
                "Industrial Packaging": Package,
                "Pet Food": Package,
                "Agriculture": Package,
              };
              const Icon = icons[industry] || Package;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2FAE7F] to-[#57C785] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#1F3A5F]">{industry}</h4>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-[#1F3A5F] text-white">
        <div className="max-w-[1200px] mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Need Custom Packaging?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us for tailored packaging solutions designed for your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2FAE7F] text-white rounded-lg font-semibold
                hover:bg-[#57C785] hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Related Products */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-10">
          <h2 className="text-2xl font-bold text-[#1F3A5F] mb-6">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(productDatabase)
              .filter(([key]) => key !== (id || "compostable-pouch"))
              .slice(0, 3)
              .map(([key, p]: [string, any], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="h-48 bg-white flex items-center justify-center overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold tracking-wider text-[#008F4C] mb-2">{p.category.toUpperCase()}</div>
                    <h3 className="text-lg font-semibold text-[#1F3A5F] mb-4">{p.name}</h3>
                    <Link
                      to={`/products/${key}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1F3A5F] text-white hover:bg-[#0f2742] transition-all duration-300"
                    >
                      View Details
                      <ArrowLeft className="rotate-180 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
