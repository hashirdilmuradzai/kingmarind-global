import { Metadata } from "next";
import { ProductsPageClient } from "@/components/products/ProductsPageClient";

export const metadata: Metadata = {
  title: "Our Tamarind Products | Kingmarind Co., Ltd. Export Catalog",
  description:
    "Explore Kingmarind's complete 32-product collection of Thai sweet tamarind, dried pitted tamarind, seedless snacks, and processed fruit products prepared for international wholesale and distribution.",
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
