import { Link } from "react-router";
import productsData from "@/data/products.json";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const productIdSet = new Set<string>();
  (productsData as any).products.forEach((section: { items: any[] }) => {
    section.items.forEach((item: any) => {
      const id = slugify(item.name || item.type);
      if (id) productIdSet.add(id);
    });
  });

  const productLink = (id: string) => (productIdSet.has(id) ? `/products/${id}` : "/products");

  return (
    <footer className="bg-[#1F3A5F] text-white">
      <div className="max-w-[1200px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#57C785] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-[#57C785] transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#57C785] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to={productLink("trash-bag")}
                  className="text-gray-300 hover:text-[#57C785] transition-colors duration-300"
                >
                  Plastic Packaging
                </Link>
              </li>
              <li>
                <Link
                  to={productLink("100-compostable-shopping-bag")}
                  className="text-gray-300 hover:text-[#57C785] transition-colors duration-300"
                >
                  Compostable Packaging
                </Link>
              </li>
              <li>
                <Link
                  to={productLink("laminated-packaging-pouch-form")}
                  className="text-gray-300 hover:text-[#57C785] transition-colors duration-300"
                >
                  Laminated Packaging
                </Link>
              </li>
              <li>
                <Link
                  to={productLink("shopping-bag")}
                  className="text-gray-300 hover:text-[#57C785] transition-colors duration-300"
                >
                  Shopping Bags
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#57C785]" />
                <span className="text-gray-300">
                  Plot No. 73, Vibrant Mega Industrial Park
                  <br />
                  Vahelal, Ahmedabad, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#57C785]" />
                <div className="text-gray-300">
                  <div>+91 99300 63410</div>
                  <div>+91 98250 54320</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#57C785]" />
                <a
                  href="mailto:info@justpackagingsolutions.com"
                  className="text-gray-300 hover:text-[#57C785] transition-colors duration-300"
                >
                  info@justpackagingsolutions.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                  hover:bg-[#2FAE7F] transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center
                  hover:bg-[#2FAE7F] transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2026 Just Packaging Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
