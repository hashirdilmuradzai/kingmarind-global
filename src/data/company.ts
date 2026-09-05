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
    mapsUrl: string;
    mapsEmbedUrl: string;
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
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kingmarind+Co.%2CLtd+99%2F8+Nam+Hia+Lom+Sak+Phetchabun+67110+Thailand",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.24269445607!2d101.17891967461492!3d16.81431201906236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3120515c8e7b7039%3A0x9d51456a26e1074c!2z4Lij4LmJ4Liy4LiZ4LiC4Lit4LiH4Lid4Liy4LiBIOC4hOC4tOC4h-C4oeC4suC4o-C4teC4meC4lOC5jCAsIEtpbmdtYXJpbmQgQ28uLEx0ZCAtIOC4oeC4sOC4guC4suC4oeC4q-C4p-C4suC4mSBzd2VldCB0YW1hcmluZA!5e0!3m2!1sen!2s!4v1788591068014!5m2!1sen!2s",
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
  positioning:
    "Thai agricultural products / Tamarind / Processed Tamarind / Wholesale / Export",
};
