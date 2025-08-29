const antibiotics = [
  {
    id: 1,
    productName: "Innofoss",
    category: "Antibiotics",
    activeIngredient: "Fosfomycine",
    brandName: "Innofoss",
    manufacturer: "VetPharma Solutions",
    image: "/innofoss.jpg",
    image2: "/innofoss2.jpg",
    price: 19000,
    currency: "PKR",
    packSize: "1000g",
    dosageForm: "Oral Powder",
    targetAnimals: ["Poultry", "Livestock", "Swine"],
    composition: {
      calcium: "200g per 1000g",
      tylosin: "100g per 1000g", 
      fructose: "180g per 1000g",
      sodiumPhosphate: "150g per 1000g",
      magnesium: "100g per 1000g"
    },
    description: "Innofoss is a powerful broad-spectrum antibiotic combination designed for severe bacterial infections in livestock and poultry. The synergistic blend of fosfomycine and tylosin provides exceptional efficacy against gram-positive and gram-negative bacteria, while calcium and magnesium support bone health during treatment recovery.",
    indications: ["Respiratory tract infections", "Gastrointestinal infections", "Septicemia", "Secondary bacterial infections"],
    contraindications: ["Hypersensitivity to macrolides", "Severe kidney dysfunction"],
    withdrawalPeriod: {
      meat: "14 days",
      milk: "7 days",
      eggs: "10 days"
    },
    inStock: true,
    featured: true,
    rating: 4.7,
    veterinaryPrescriptionRequired: true
  },
  
  {
    id: 2,
    productName: "Highneo",
    category: "Antibiotics",
    activeIngredient: "Neomycine",
    brandName: "Highneo",
    manufacturer: "Advanced Veterinary Labs",
    image: "/highneo.jpg",
    image2: "/highneo2.jpg",
    price: 7223,
    currency: "PKR",
    packSize: "1000g",
    dosageForm: "Oral Powder",
    targetAnimals: ["Poultry", "Calves", "Piglets"],
    composition: {
      neomycinSulphate: "700mg per 1000g"
    },
    description: "Highneo is a highly effective aminoglycoside antibiotic specifically formulated for treating enteric infections in young animals. Its potent bactericidal action against E.coli, Salmonella, and other gram-negative pathogens makes it ideal for controlling diarrheal diseases and promoting healthy gut flora in livestock.",
    indications: ["Bacterial enteritis", "Neonatal diarrhea", "E.coli infections", "Salmonellosis prevention"],
    contraindications: ["Renal impairment", "Concurrent use with other nephrotoxic drugs"],
    withdrawalPeriod: {
      meat: "21 days",
      milk: "14 days",
      eggs: "14 days"
    },
    inStock: true,
    featured: false,
    rating: 4.4,
    veterinaryPrescriptionRequired: true
  },

  {
    id: 3,
    productName: "Acme Coliflox 25/50",
    category: "Antibiotics",
    activeIngredient: "Enrofloxacine + Colistine",
    brandName: "Acme Coliflox",
    manufacturer: "Acme Veterinary Pharmaceuticals",
    image: "/acmecolifox.jpg",
    image2: "/acmecolifox2.jpg",
    price: 5658,
    currency: "PKR",
    packSize: "100ml",
    dosageForm: "Oral Solution",
    targetAnimals: ["Poultry", "Rabbits", "Fish"],
    composition: {
      enrofloxacin: "250mg per ml",
      colistinSulphate: "0.50 MIU per ml"
    },
    description: "Acme Coliflox 25/50 combines the powerful fluoroquinolone enrofloxacin with colistin for superior dual-action against resistant bacterial strains. This liquid formulation ensures rapid absorption and tissue penetration, making it exceptionally effective for respiratory and systemic infections in poultry and aquaculture.",
    indications: ["Chronic respiratory disease", "Colibacillosis", "Multi-drug resistant infections", "Septicemic conditions"],
    contraindications: ["Growing cartilage in young animals", "Pregnancy in breeding animals"],
    withdrawalPeriod: {
      meat: "10 days",
      eggs: "8 days"
    },
    inStock: true,
    featured: true,
    rating: 4.8,
    veterinaryPrescriptionRequired: true
  },

  {
    id: 4,
    productName: "Acme Col 52",
    category: "Antibiotics", 
    activeIngredient: "Colistine",
    brandName: "Acme Col",
    manufacturer: "Acme Veterinary Pharmaceuticals",
    image: "/acmecol.jpg",
    image2: "/acmecol2.jpg",
    price: 4886,
    currency: "PKR",
    packSize: "100g",
    dosageForm: "Oral Powder",
    targetAnimals: ["Poultry", "Swine", "Calves"],
    composition: {
      colistinSulphate: "520 MIU per 100g"
    },
    description: "Acme Col 52 is a high-potency colistin formulation designed as a last-resort treatment for multi-drug resistant gram-negative bacterial infections. Its concentrated formula provides maximum therapeutic effect against resistant E.coli, Salmonella, and Pseudomonas strains when other antibiotics fail.",
    indications: ["MDR gram-negative infections", "Resistant E.coli enteritis", "Pseudomonas infections", "Last-line therapy"],
    contraindications: ["Hypersensitivity to polymyxins", "Severe renal or hepatic impairment"],
    withdrawalPeriod: {
      meat: "28 days",
      milk: "21 days",
      eggs: "21 days"
    },
    inStock: true,
    featured: false,
    rating: 4.5,
    veterinaryPrescriptionRequired: true,
    restrictedUse: true
  },

  {
    id: 5,
    productName: "Duedox",
    category: "Antibiotics",
    activeIngredient: "Tylosin + Doxycyclin + Bromhexine",
    brandName: "Duedox",
    manufacturer: "DuoVet Pharmaceuticals",
    image: "/duedox.jpg",
    image2: "/duedox2.jpg",
    price: 25572,
    currency: "PKR",
    packSize: "1000g",
    dosageForm: "Oral Powder",
    targetAnimals: ["Cattle", "Poultry", "Swine"],
    composition: {
      doxycyclineHCl: "400g per 1000g",
      tylosinTartrate: "200g per 1000g",
      bromhexineHCl: "10g per 1000g"
    },
    description: "Duedox is a premium triple-combination therapeutic featuring broad-spectrum antibiotics with mucolytic action. The synergy of doxycycline and tylosin provides comprehensive coverage against both typical and atypical respiratory pathogens, while bromhexine enhances recovery by clearing respiratory secretions and improving lung function.",
    indications: ["Complex respiratory infections", "Chronic respiratory disease", "Mycoplasma infections", "Pneumonia with mucus accumulation"],
    contraindications: ["Tetracycline allergy", "Concurrent antacid use", "Pregnancy"],
    withdrawalPeriod: {
      meat: "21 days",
      milk: "14 days", 
      eggs: "14 days"
    },
    inStock: true,
    featured: true,
    rating: 4.9,
    veterinaryPrescriptionRequired: true,
    premiumProduct: true
  },

  {
    id: 6,
    productName: "FA Enro",
    category: "Antibiotics",
    activeIngredient: "Enrofloxacine",
    brandName: "FA Enro",
    manufacturer: "First Aid Veterinary",
    image: "/faenro.jpg",
    image2: "/faenro2.jpg",
    price: 5239,
    currency: "PKR",
    packSize: "500ml",
    dosageForm: "Injectable Solution",
    targetAnimals: ["Cattle", "Sheep", "Goats", "Poultry"],
    composition: {
      enrofloxacin: "20% w/v"
    },
    description: "FA Enro 20% is a high-concentration fluoroquinolone antibiotic injection providing rapid systemic bactericidal action. Its superior tissue penetration and extended half-life make it ideal for treating severe infections in large animals, offering convenient once-daily dosing with excellent clinical outcomes.",
    indications: ["Bacterial pneumonia", "Urogenital infections", "Skin and soft tissue infections", "Post-surgical prophylaxis"],
    contraindications: ["CNS disorders", "Developing animals under 18 months", "Epilepsy"],
    withdrawalPeriod: {
      meat: "14 days",
      milk: "5 days"
    },
    inStock: true,
    featured: false,
    rating: 4.6,
    veterinaryPrescriptionRequired: true,
    routeOfAdministration: ["Intramuscular", "Subcutaneous"]
  },

  {
    id: 7,
    productName: "Medlimox B",
    category: "Antibiotics",
    activeIngredient: "Multi-component",
    brandName: "Medlimox B",
    manufacturer: "MedVet Innovations",
    image: "/medlimox.jpg",
    image2: "/medlimox2.jpg",
    price: 7293,
    currency: "PKR",
    packSize: "100g",
    dosageForm: "Oral Powder",
    targetAnimals: ["Poultry", "Small Ruminants", "Rabbits"],
    composition: {
      amoxicillinTrihydrate: "10g per 100g",
      lincomycinHCl: "5g per 100g",
      colistinSulphate: "50 MIU per 100g",
      bromhexineHCl: "0.5g per 100g"
    },
    description: "Medlimox B represents advanced multi-modal therapy combining beta-lactam, lincosamide, and polymyxin antibiotics with mucolytic support. This sophisticated formulation tackles complex mixed infections while promoting respiratory clearance, making it particularly effective for challenging cases involving multiple pathogens and respiratory compromise.",
    indications: ["Mixed bacterial infections", "Respiratory tract infections with mucus", "Secondary bacterial complications", "Multi-pathogen outbreaks"],
    contraindications: ["Lincomycin hypersensitivity", "Clostridium difficile history", "Severe hepatic dysfunction"],
    withdrawalPeriod: {
      meat: "18 days",
      eggs: "12 days"
    },
    inStock: true,
    featured: false,
    rating: 4.3,
    veterinaryPrescriptionRequired: true,
    complexFormulation: true
  }
];
export { antibiotics };