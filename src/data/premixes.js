const premixes = [
  {
    id: 1,
    productName: "Aclinco",
    category: "Premixes",
    activeIngredient: "Lincomycine HCL",
    brandName: "Aclinco",
    manufacturer: "VetPharma Solutions",
    image: "/aclinco.jpg",
    image2: "/aclinco2.jpg",
    price: 40293,
    currency: "PKR",
    packSize: "100g",
    dosageForm: "Premix Powder",
    targetAnimals: ["Poultry", "Livestock", "Swine"],
    composition: {
      lincomycineHCL: "4.4g per 100g (USP specification)"
    },
    description:
      "Aclinco is a premium premix containing Lincomycine HCL, designed for the prevention and treatment of bacterial infections in poultry and livestock. Its high purity formulation ensures consistent performance and rapid absorption.",
    indications: ["Bacterial enteritis", "Respiratory infections", "Skin infections"],
    contraindications: ["Hypersensitivity to lincomycine", "Severe liver or kidney issues"],
    withdrawalPeriod: {
      meat: "7 days",
      milk: "Not applicable",
      eggs: "3 days"
    },
    inStock: true,
    featured: false,
    rating: 4.6,
    veterinaryPrescriptionRequired: true
  },
  {
    id: 2,
    productName: "Medi Fix Plus",
    category: "Premixes",
    activeIngredient: "Organic Acids Blend with Probiotics",
    brandName: "Medi Fix",
    manufacturer: "VetPharma Solutions",
    image: "/medifix.jpg",
    image2: "/medifix2.jpg",
    price: 25042,
    currency: "PKR",
    packSize: "1000g",
    dosageForm: "Premix Powder",
    targetAnimals: ["Poultry", "Livestock", "Swine"],
    composition: {
      lacticAcid: "33600 mg per 1000g",
      citricAcid: "16800 mg per 1000g",
      formicAcid: "5600 mg per 1000g",
      aceticAcid: "3500 mg per 1000g",
      propionicAcid: "3500 mg per 1000g",
      copperSulphate: "10000 mg per 1000g",
      bacillusSubtilis: "10000 mg per 1000g",
      inactivatedYeast: "250000 mg per 1000g",
      activeClinoptilolite: "600000 mg per 1000g",
      bentonite: "10000 mg per 1000g",
      kaolin: "10000 mg per 1000g"
    },
    description:
      "Medi Fix is a balanced blend of organic acids, minerals, and probiotics formulated to improve gut health, digestion, and immunity in poultry and livestock. The synergistic action supports feed conversion and growth.",
    indications: ["Gut health improvement", "Immune system boost", "Feed conversion enhancement"],
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
  },
  {
    id: 3,
    productName: "Vigo GP",
    category: "Premixes",
    activeIngredient: "Vitamins, Minerals & Amino Acids",
    brandName: "Vigo GP",
    manufacturer: "VetPharma Solutions",
    image: "/vigogp.jpg",
    image2: "/vigogp2.jpg",
    price: 25715,
    currency: "PKR",
    packSize: "1000g",
    dosageForm: "Premix Powder",
    targetAnimals: ["Poultry", "Livestock", "Swine"],
    composition: {
      vitamins: "Custom blend",
      minerals: "Custom blend",
      aminoAcids: "Custom blend"
    },
    description:
      "Vigo GP is enriched with essential vitamins, minerals, and amino acids, designed to enhance growth, productivity, and overall health in poultry and livestock.",
    indications: ["Nutritional deficiencies", "Growth support", "Egg and meat production enhancement"],
    contraindications: ["No known major contraindications"],
    withdrawalPeriod: {
      meat: "0 days",
      milk: "0 days",
      eggs: "0 days"
    },
    inStock: true,
    featured: false,
    rating: 4.5,
    veterinaryPrescriptionRequired: false
  },
  {
    id: 4,
    productName: "Elan Tox",
    category: "Premixes",
    activeIngredient: "Bentonite, Zeolite, Clinoptilolite",
    brandName: "Elan Tox",
    manufacturer: "VetPharma Solutions",
    image: "/elantox.png",
    price: 18558,
    currency: "PKR",
    packSize: "1000g",
    dosageForm: "Premix Powder",
    targetAnimals: ["Poultry", "Livestock", "Swine"],
    composition: {
      bentonite: "800g per 1000g",
      zeolite: "100g per 1000g",
      clinoptilolite: "100g per 1000g"
    },
    description:
      "Elan Tox is a high-quality toxin binder containing bentonite, zeolite, and clinoptilolite to protect poultry and livestock from the harmful effects of mycotoxins in feed.",
    indications: ["Mycotoxin binding", "Digestive protection", "Feed quality improvement"],
    contraindications: ["No known major contraindications"],
    withdrawalPeriod: {
      meat: "0 days",
      milk: "0 days",
      eggs: "0 days"
    },
    inStock: false,
    featured: true,
    rating: 4.7,
    veterinaryPrescriptionRequired: false
  }
];

export { premixes };