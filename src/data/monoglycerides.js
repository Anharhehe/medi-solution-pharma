const monoglycerides = [
  {
    id: 1,
    productName: "Elan C12",
    category: "Mono Glycerides",
    activeIngredient: "Monoglycerides of Lauric Acid",
    brandName: "Elan C12",
    manufacturer: "VetPharma Solutions",
    image: "/elanc12.jpg",
    image2:"/elanc122.jpg",
    price: 26275,
    currency: "PKR",
    packSize: "5 Ltr",
    dosageForm: "Liquid",
    targetAnimals: ["Poultry", "Livestock", "Swine"],
    composition: {
      AlphaMonoLaurine: "Proprietary concentration"
    },
    description:
      "Elan C12 is a concentrated monoglyceride formulation designed to support the immune system of poultry and livestock. Lauric acid-derived monoglycerides enhance antimicrobial activity and help maintain optimal health.",
    indications: ["Immune support", "Bacterial load reduction", "Performance improvement"],
    contraindications: ["No known major contraindications"],
    withdrawalPeriod: {
      meat: "0 days",
      milk: "0 days",
      eggs: "0 days"
    },
    inStock: true,
    featured: false,
    rating: 4.7,
    veterinaryPrescriptionRequired: false
  },
  {
    id: 2,
    productName: "Elan AC34",
    category: "Mono Glycerides",
    activeIngredient: "Monoglycerides of Butyric Acid",
    brandName: "Elan C34",
    manufacturer: "VetPharma Solutions",
    image: "/elanac34.jpg",
    image2: "/elanac342.jpg",
    price: 22258,
    currency: "PKR",
    packSize: "5 Ltr",
    dosageForm: "Liquid",
    targetAnimals: ["Poultry", "Livestock", "Swine"],
    composition: {
      AlphaMonobutyrine: "Proprietary concentration",
      AlphaMonopropionine: "Proprietary concentration"
    },
    description:
      "Elan C34 is a specialized monoglyceride formula designed to support healthy gastrointestinal microflora in poultry and livestock. It aids digestion, improves nutrient absorption, and promotes overall gut health.",
    indications: ["Gut microflora balance", "Digestive health support", "Nutrient absorption improvement"],
    contraindications: ["No known major contraindications"],
    withdrawalPeriod: {
      meat: "0 days",
      milk: "0 days",
      eggs: "0 days"
    },
    inStock: true,
    featured: true,
    rating: 4.8,
    veterinaryPrescriptionRequired: false
  }
];

export { monoglycerides }