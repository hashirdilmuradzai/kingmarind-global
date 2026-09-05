export interface CompanyInfo {
  name: string;
  legalName: string;
  brand: string;
  industry: string;
  location: {
    address: string;
    subDistrict: string;
    district: string;
    province: string;
    postalCode: string;
    country: string;
    fullAddress: string;
  };
  taxId: string;
  managingDirector: {
    name: string;
    shortName: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    socialHandle: string;
  };
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  positioning: string;
}

export const COMPANY: CompanyInfo = {
  name: "KINGMARIND CO., LTD.",
  legalName: "Kingmarind Company Limited",
  brand: "KINGMARIND",
  industry: "Thai Tamarind & Processed Fruit Products",
  location: {
    address: "99/8 Moo 1",
    subDistrict: "Nam Hia",
    district: "Lom Sak",
    province: "Phetchabun",
    postalCode: "67110",
    country: "Thailand",
    fullAddress: "99/8 Moo 1, Nam Hia, Lom Sak, Phetchabun 67110, Thailand",
  },
  taxId: "067556400012",
  managingDirector: {
    name: "KHWANCHIRA SRIUARIYA",
    shortName: "KHWAN",
  },
  contact: {
    phone: "+66 94 979 6228",
    phoneFormatted: "+66 (0) 94 979 6228",
    email: "kingmarind@gmail.com",
    socialHandle: "khwanchira7503",
  },
  tagline: "Thai Tamarind. Global Possibilities.",
  heroHeadline: "Premium Thai Tamarind,\nPrepared for Global Markets.",
  heroSubheadline:
    "From the heart of Phetchabun, Thailand, Kingmarind brings together authentic Thai tamarind and carefully processed tamarind products for wholesalers, distributors, retailers and international food businesses.",
  positioning: "Thai agricultural products / Tamarind / Processed Tamarind / Wholesale / Export",
};
