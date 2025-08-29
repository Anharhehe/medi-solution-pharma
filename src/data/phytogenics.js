const phytogenics = [
  {
    id: 1,
    productName: "Elan Cox",
    category: "Phytogenics",
    activeIngredient: "Herbal Extract Blend",
    brandName: "Elan Cox",
    manufacturer: "VetPharma Solutions",
    image: "/elancox.jpg",
    image2: "/elancox2.jpg",
    price: 71100,
    currency: "PKR",
    packSize: "5 Ltr",
    dosageForm: "Liquid",
    targetAnimals: ["Poultry", "Livestock"],
    composition: {
      PhytogenicBlendWithVitamins : "Proprietary blend",
      Minerals: "Proprietary blend",
      Dextrose: "Proprietary blend"
    },
    description:
      "Elan Cox is a premium phytogenic solution formulated to combat necrotic enteritis and coccidiosis challenges in poultry and livestock. It contains a specialized blend of herbal extracts and essential oils that support gut health, immunity, and feed efficiency without antibiotics.",
    indications: ["Necrotic enteritis prevention", "Coccidiosis management", "Gut health improvement"],
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

export { phytogenics }