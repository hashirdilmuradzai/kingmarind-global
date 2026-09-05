export interface ProductCategory {
  id: string;
  slug: string;
  number: string;
  title: string;
  titleTh?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  productCount: number;
  highlightFeatures: string[];
}

export const CATEGORIES: ProductCategory[] = [
  {
    id: "sweet-tamarind",
    slug: "sweet-tamarind",
    number: "01",
    title: "Sweet Tamarind",
    titleTh: "มะขามหวาน",
    shortDescription: "Premium sweet tamarind and naturally sweet varieties.",
    fullDescription:
      "Cultivated in the mineral-rich soils of Phetchabun, our whole sweet tamarind pods offer a rich, naturally golden sweetness and tender pulp. Ideal for international retail markets and fruit specialty distributors.",
    image: "/images/sweet_tamarind.jpg",
    productCount: 4,
    highlightFeatures: ["Phetchabun Origin", "Whole Pods", "Naturally Sweet", "Wholesale Bulk Available"],
  },
  {
    id: "seedless-tamarind",
    slug: "seedless-tamarind",
    number: "02",
    title: "Seedless Tamarind",
    titleTh: "มะขามไร้เมล็ด",
    shortDescription: "Convenient pitted tamarind products prepared for easy consumption and processing.",
    fullDescription:
      "Carefully seeded and prepared for optimal convenience, our seedless tamarind selection includes sugar-coated, plum-seasoned, and natural pitted formats suited for snacks and commercial applications.",
    image: "/images/seedless_tamarind.jpg",
    productCount: 3,
    highlightFeatures: ["100% Pitted", "Multiple Seasonings", "Retail Ready", "Snack & Food Service"],
  },
  {
    id: "seasoned-tamarind",
    slug: "seasoned-tamarind",
    number: "03",
    title: "Seasoned Tamarind",
    titleTh: "มะขามแปรรูปปรุงรส",
    shortDescription: "Sweet, sour, spicy and plum-seasoned tamarind snacks.",
    fullDescription:
      "A harmonious blend of authentic Thai seasoning profiles: spicy candied, sugar-coated, tangy plum, sweet zesty, and sour zesty tamarind. Balanced flavor combinations for modern snack distributors.",
    image: "/images/seasoned_tamarind.jpg",
    productCount: 8,
    highlightFeatures: ["Authentic Thai Flavor", "Zesty & Spicy", "Jar & Pouch Options", "Export Ready"],
  },
  {
    id: "dried-tamarind",
    slug: "dried-tamarind",
    number: "04",
    title: "Dried Tamarind",
    titleTh: "มะขามแห้งแกะเมล็ด",
    shortDescription: "Dried pitted tamarind and selected grades for wholesale buyers.",
    fullDescription:
      "Available across multiple grades (Grade A, Grade A-, Grade 1, Long Pod, 70% and 90% sweet profiles). Processed with careful temperature and moisture control for long shelf stability and consistent export quality.",
    image: "/images/dried_tamarind.jpg",
    productCount: 11,
    highlightFeatures: ["Multi-Grade Selection", "Infrared Drying Process", "Long Pod & Pitted", "Bulk Export Options"],
  },
  {
    id: "tamarind-snacks",
    slug: "tamarind-snacks",
    number: "05",
    title: "Tamarind Snacks",
    titleTh: "ขนมขบเคี้ยวมะขาม",
    shortDescription: "Tamarind-based snacks, chews, toffee and specialty products.",
    fullDescription:
      "Innovative value-added Thai confections including tamarind-stuffed crispy banana, tamarind-stuffed crispy taro, traditional tamarind toffees, and soft chew packs.",
    image: "/images/tamarind_snacks.jpg",
    productCount: 4,
    highlightFeatures: ["Banana & Taro Stuffed", "Traditional Toffee", "Chew Packs", "Value-Added Confections"],
  },
  {
    id: "tamarind-based-products",
    slug: "tamarind-based-products",
    number: "06",
    title: "Tamarind-Based Products",
    titleTh: "ผลิตภัณฑ์แปรรูปจากมะขาม",
    shortDescription: "Tamarind paste, tamarind candy and other processed formats.",
    fullDescription:
      "Versatile processed formats including edible tamarind paste, coconut tamarind paste, glazed tamarind, and candied tamarind for retail snacking and food ingredient applications.",
<<<<<<< HEAD
    image: "/images/01.jpg",
=======
    image: "/images/tamarind_snacks.jpg",
>>>>>>> c75563701e7c0e7d06b8a5d48be340d26a9955b7
    productCount: 5,
    highlightFeatures: ["Pure & Coconut Paste", "Glazed Varieties", "Culinary & Confectionery", "Flexible Bulk"],
  },
];
