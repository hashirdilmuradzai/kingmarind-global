import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Kingmarind Co., Ltd.",
    };
  }

  return {
    title: `${product.name} | Kingmarind Thai Tamarind Export`,
    description: `${product.shortDescription} Wholesale and export packaging available from Kingmarind Co., Ltd. (Phetchabun, Thailand).`,
    openGraph: {
      title: `${product.name} - Kingmarind Thai Tamarind`,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Product Schema JSON-LD
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: `https://kingmarind.com${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "KINGMARIND",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "THB",
      price: product.sizes[0]?.referencePriceThb || 100,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    category: product.category,
    countryOfOrigin: "Thailand",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
