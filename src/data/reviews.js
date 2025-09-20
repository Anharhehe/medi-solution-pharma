const reviews = [
  {
    name: "Muhammad Ahmed Khan",
    stars: 4.8,
    time: "2 hours ago",
    comment: "Excellent products for my poultry farm. The medicines are very effective and my chickens recovered quickly from respiratory issues."
  },
  {
    name: "Ali Hassan Malik",
    stars: 4.9,
    time: "3 hours ago",
    comment: "Best poultry medicines in Pakistan. Fast delivery and genuine products. Highly recommended for all farmers."
  },
  {
    name: "Ahmed Riaz",
    stars: 4.6,
    time: "5 minutes ago",
    comment: "Great results with layer hens. Egg production increased significantly after using their vitamin supplements."
  },
  {
    name: "Abdul Rahman",
    stars: 4.8,
    time: "2 weeks ago",
    comment: "Trusted brand for poultry health. Their customer service is also very helpful and responsive."
  },
  {
    name: "Sanan Iqbal",
    stars: 4.5,
    time: "4 days ago",
    comment: "Good quality products at reasonable prices. My chicks are growing healthy and strong."
  },
  {
    name: "Usman Tariq",
    stars: 4.9,
    time: "30 minutes ago",
    comment: "Amazing results! The growth promoter worked wonders for my broiler farm. Will definitely order again."
  },
  {
    name: "Zain Ali",
    stars: 4.4,
    time: "1 week ago",
    comment: "Reliable medicines for poultry diseases. The antibiotics are very effective against infections."
  },
  {
    name: "Hassan Raza",
    stars: 4.7,
    time: "6 hours ago",
    comment: "Professional packaging and quality products. My veterinarian also recommends these medicines."
  },
  {
    name: "Bilal Ahmad",
    stars: 4.6,
    time: "3 days ago",
    comment: "Good experience with their liver tonic. My chickens are more active and healthy now."
  },
  {
    name: "Kamran Sheikh",
    stars: 4.9,
    time: "45 minutes ago",
    comment: "Top-notch quality! The imported products are especially effective for disease prevention."
  },
  {
    name: "Shahid Mehmood",
    stars: 4.8,
    time: "1 hour ago",
    comment: "Highly effective medicines. My mortality rate dropped significantly after switching to these products."
  },
  {
    name: "Nadir Afzal",
    stars: 4.5,
    time: "2 weeks ago",
    comment: "Good quality control and authentic products. Packaging is also very professional."
  },
  {
    name: "Tariq Mahmood",
    stars: 4.6,
    time: "20 minutes ago",
    comment: "Reliable supplier for poultry medicines. Their technical support team is very knowledgeable."
  },
  {
    name: "Saim Butt",
    stars: 4.4,
    time: "4 hours ago",
    comment: "Cost-effective solutions for small poultry farms. Good results with respiratory treatments."
  },
  {
    name: "Imran Butt",
    stars: 4.9,
    time: "1 day ago",
    comment: "Exceptional quality and service! My broiler performance improved remarkably with their products."
  },
  {
    name: "Khalid Malik",
    stars: 4.7,
    time: "3 weeks ago",
    comment: "Trusted name in poultry health. The multivitamins are particularly effective for young chicks."
  },
  {
    name: "Rubbaan Sultan",
    stars: 4.3,
    time: "6 days ago",
    comment: "Good products but pricing could be more competitive. Quality is definitely there."
  },
  {
    name: "Shaukat Parvaiz",
    stars: 4.9,
    time: "1 week ago",
    comment: "Best investment for poultry health! Reduced medication costs and improved flock performance."
  },
  {
    name: "Rashid Hussain",
    stars: 4.8,
    time: "3 days ago",
    comment: "Highly recommended for commercial poultry operations. Professional-grade medicines."
  },
  {
    name: "Haris Bashir",
    stars: 4.4,
    time: "25 minutes ago",
    comment: "Satisfied with the product quality. The stress relievers work well during hot weather."
  },
  {
    name: "Amir Siddique",
    stars: 4.9,
    time: "4 weeks ago",
    comment: "Excellent quality control! Every batch maintains consistent effectiveness and quality."
  },
  {
    name: "Iqbal Ahmad",
    stars: 4.7,
    time: "50 minutes ago",
    comment: "Great for disease prevention programs. Reduced antibiotic usage significantly."
  },
  {
    name: "Salman Raza",
    stars: 4.8,
    time: "15 minutes ago",
    comment: "Top quality medicines! The hepatic tonics are particularly effective for liver support."
  },
  {
    name: "Jameel Ahmed",
    stars: 4.6,
    time: "3 hours ago",
    comment: "Professional packaging and authentic medicines. Quick recovery from bacterial infections."
  },
  {
    name: "Zahid Iqbal",
    stars: 4.7,
    time: "6 days ago",
    comment: "Trusted supplier with consistent quality. Their calcium products are very effective."
  },
  {
    name: "Arshad Mehmood",
    stars: 4.8,
    time: "1 day ago",
    comment: "Highly effective products! Improved overall flock health and reduced mortality significantly."
  },
  {
    name: "Tahir Khan",
    stars: 4.5,
    time: "5 minutes ago",
    comment: "Satisfied customer for 2 years now. Consistent quality and good customer service."
  },
  {
    name: "Mushtaq Ali",
    stars: 4.6,
    time: "4 hours ago",
    comment: "Reliable medicines for respiratory problems. Quick action and effective results."
  },
  {
    name: "Nasir Akhtar",
    stars: 4.9,
    time: "2 weeks ago",
    comment: "Outstanding quality and service! The imported range is particularly impressive."
  },
  {
    name: "Asif Mahmood",
    stars: 4.7,
    time: "30 minutes ago",
    comment: "Great experience with their nutritional products. Improved feed conversion efficiency."
  },
  {
    name: "Rizwan Khan",
    stars: 4.8,
    time: "20 minutes ago",
    comment: "Excellent results with growth promoters. My broilers reached target weight ahead of schedule."
  },
  {
    name: "Shameer Akhtar",
    stars: 4.6,
    time: "3 days ago",
    comment: "Professional service and quality medicines. The vitamin complexes are very effective."
  },
  {
    name: "Usman Farooq",
    stars: 4.9,
    time: "45 minutes ago",
    comment: "Best poultry medicines I've used! Remarkable improvement in egg production and quality."
  },
  {
    name: "Khalid Ahmad",
    stars: 4.7,
    time: "5 days ago",
    comment: "Trusted brand for poultry health management. Their antibiotics are very potent."
  },
  {
    name: "Naveed Iqbal",
    stars: 4.8,
    time: "1 day ago",
    comment: "Highly recommend for commercial operations. Significant improvement in flock performance."
  },
  {
    name: "Zain Sheikh",
    stars: 4.3,
    time: "4 weeks ago",
    comment: "Decent medicines but could improve on customer support response time."
  },
  {
    name: "Sajjad Hussain",
    stars: 4.6,
    time: "25 minutes ago",
    comment: "Effective solutions for poultry diseases. The liver tonics work exceptionally well."
  },
  {
    name: "Ghulam Abbas",
    stars: 4.7,
    time: "1 week ago",
    comment: "Professional-grade medicines with excellent results. Reduced disease outbreaks significantly."
  },
  {
    name: "Samar Ali",
    stars: 4.4,
    time: "10 minutes ago",
    comment: "Good products for small-scale farming. The multivitamins are particularly effective."
  },
  {
    name: "Majid Mehmood",
    stars: 4.8,
    time: "6 hours ago",
    comment: "Excellent customer service and quality products. Quick resolution of health issues."
  },
  {
    name: "Faizan Malik",
    stars: 4.5,
    time: "2 days ago",
    comment: "Satisfied with the product range. Good results with respiratory treatment protocols."
  },
  {
    name: "Shahzad Ali",
    stars: 4.6,
    time: "35 minutes ago",
    comment: "Reliable supplier with consistent quality. Their feed additives improve growth performance."
  },
  {
    name: "Mohsin Raza",
    stars: 4.8,
    time: "15 minutes ago",
    comment: "Highly effective medicines! Significant improvement in broiler performance and health."
  },
  {
    name: "Shujah Jutt",
    stars: 4.9,
    time: "50 minutes ago",
    comment: "Excellent quality and service! My poultry business has improved significantly with these products."
  },
  {
    name: "Tanveer Ahmad",
    stars: 4.7,
    time: "5 days ago",
    comment: "Trusted name in poultry medicines. Good technical support and product guidance."
  },
  {
    name: "Babar Ali",
    stars: 4.8,
    time: "3 days ago",
    comment: "Outstanding results with disease prevention programs. Highly recommend to fellow farmers."
  },
  {
    name: "Saim Iqbal",
    stars: 4.3,
    time: "1 week ago",
    comment: "Decent quality products. The stress relievers help during transportation and handling."
  },
  {
    name: "Waqas Mahmood",
    stars: 4.6,
    time: "40 minutes ago",
    comment: "Reliable medicines with consistent results. Good value for commercial poultry operations."
  },
  {
    name: "Masood Ahmed",
    stars: 4.7,
    time: "6 days ago",
    comment: "Professional service and effective medicines. The growth promoters work exceptionally well."
  },
  {
    name: "Soban Ali",
    stars: 4.4,
    time: "1 hour ago",
    comment: "Good products for poultry health management. Reasonable pricing and good quality."
  },
  {
    name: "Javed Iqbal",
    stars: 4.8,
    time: "4 hours ago",
    comment: "Highly effective solutions! Reduced antibiotic resistance and improved flock immunity."
  },
  {
    name: "Raheel Babar",
    stars: 4.5,
    time: "2 weeks ago",
    comment: "Satisfied with the product range. Good results with reproductive health supplements."
  },
  {
    name: "Shoaib Raza",
    stars: 4.6,
    time: "20 minutes ago",
    comment: "Professional packaging and quality medicines. Quick recovery from viral infections."
  },
  {
    name: "Safdar Abbas",
    stars: 4.7,
    time: "3 hours ago",
    comment: "Excellent quality control and consistent results. Trusted supplier for years now."
  },
  {
    name: "Kashif Ali",
    stars: 4.8,
    time: "25 minutes ago",
    comment: "Outstanding results with their liver support products! Improved overall health parameters."
  },
  {
    name: "Pervez Ahmad",
    stars: 4.4,
    time: "4 days ago",
    comment: "Good experience with respiratory medicines. Quick action against bacterial infections."
  },
  {
    name: "Ijaz Hussain",
    stars: 4.7,
    time: "2 days ago",
    comment: "Professional service and authentic products. Good technical support from their team."
  },
  {
    name: "Shakeel Bilal",
    stars: 4.5,
    time: "1 hour ago",
    comment: "Satisfied customer for multiple years. Consistent quality and reliable supply."
  },
  {
    name: "Manzoor Ali",
    stars: 4.8,
    time: "30 minutes ago",
    comment: "Highly recommend for commercial poultry! Significant cost savings and better results."
  },
  {
    name: "Rasheed Ahmed",
    stars: 4.6,
    time: "6 hours ago",
    comment: "Effective medicines for disease control. Good results with prevention protocols."
  },
  {
    name: "Liaquat Ali",
    stars: 4.7,
    time: "1 day ago",
    comment: "Trusted supplier with professional service. Good results with growth enhancement programs."
  },
  {
    name: "Zulfiqar Ahmad",
    stars: 4.8,
    time: "5 days ago",
    comment: "Outstanding results! My poultry farm performance improved dramatically with these products."
  },
  {
    name: "Akram Hussain",
    stars: 4.6,
    time: "3 hours ago",
    comment: "Reliable medicines with consistent effectiveness. Good customer support and guidance."
  },
  {
    name: "Fiaz Ahmad",
    stars: 4.8,
    time: "2 days ago",
    comment: "Highly effective medicines! Reduced mortality and improved growth rates significantly."
  },
  {
    name: "Altaf Hussain",
    stars: 4.4,
    time: "1 day ago",
    comment: "Satisfied with product quality. The liver tonics help during stress conditions."
  },
  {
    name: "Naseem Akhtar",
    stars: 4.9,
    time: "35 minutes ago",
    comment: "Amazing results with disease prevention! Best decision for my poultry business."
  },
  {
    name: "Iftikhar Ali",
    stars: 4.7,
    time: "6 days ago",
    comment: "Professional service with quality medicines. Good technical support for treatment protocols."
  },
  {
    name: "Qamar Abbas",
    stars: 4.8,
    time: "20 minutes ago",
    comment: "Excellent customer service and effective medicines! Highly recommend to all farmers."
  },
  {
    name: "Hamid Khan",
    stars: 4.3,
    time: "2 weeks ago",
    comment: "Good products but could use better product information. Overall satisfied with quality."
  },
  {
    name: "Nazir Ahmad",
    stars: 4.6,
    time: "1 hour ago",
    comment: "Reliable supplier with consistent quality. Good results with respiratory treatment."
  },
  {
    name: "Zawayar Malik",
    stars: 4.9,
    time: "4 hours ago",
    comment: "Outstanding quality and service! The imported products are exceptionally effective."
  },
  {
    name: "Munawar Ali",
    stars: 4.7,
    time: "3 days ago",
    comment: "Trusted name in poultry health. Professional service and authentic medicines."
  },
  {
    name: "Riaz Hussain",
    stars: 4.8,
    time: "1 day ago",
    comment: "Highly effective products! Significant improvement in broiler performance and health parameters."
  },
  {
    name: "Mukhtar Ahmed",
    stars: 4.5,
    time: "5 hours ago",
    comment: "Satisfied with the product range. Good customer service and timely delivery."
  },
  {
    name: "Ghulam Rasool",
    stars: 4.6,
    time: "2 hours ago",
    comment: "Professional packaging and quality medicines. Effective against various poultry diseases."
  },
  {
    name: "Tayyab Khan",
    stars: 4.9,
    time: "45 minutes ago",
    comment: "Best poultry medicines available! Excellent results with growth and health management."
  },
  {
    name: "Sabir Ali",
    stars: 4.7,
    time: "1 week ago",
    comment: "Excellent quality control and consistent results. Good technical guidance for farmers."
  },
  {
    name: "Azhar Mahmood",
    stars: 4.8,
    time: "6 hours ago",
    comment: "Outstanding customer service! Quick response to queries and effective product solutions."
  },
  {
    name: "Habib Ahmad",
    stars: 4.4,
    time: "1 hour ago",
    comment: "Satisfied with overall experience. The anticoccidials are particularly effective."
  },
  {
    name: "Yaqoob Ali",
    stars: 4.7,
    time: "2 days ago",
    comment: "Professional service and quality medicines. Trusted supplier for commercial operations."
  },
  {
    name: "Mahmood Ahmed",
    stars: 4.8,
    time: "40 minutes ago",
    comment: "Highly recommend for poultry farmers! Excellent quality and professional customer support."
  },
  {
    name: "Shakeel Abbas",
    stars: 4.6,
    time: "5 hours ago",
    comment: "Effective solutions for poultry health issues. Good results with treatment protocols."
  },
  {
    name: "Ishaq Ali",
    stars: 4.7,
    time: "1 day ago",
    comment: "Excellent quality medicines with professional packaging. Good customer service experience."
  },
  {
    name: "Zaheer Abbas",
    stars: 4.8,
    time: "6 days ago",
    comment: "Outstanding performance! My broiler farm productivity increased significantly with these products."
  },
  {
    name: "Noor Ahmad",
    stars: 4.6,
    time: "4 hours ago",
    comment: "Professional service with effective medicines. Good results with respiratory disease management."
  },
  {
    name: "Bashir Ali",
    stars: 4.7,
    time: "5 days ago",
    comment: "Trusted supplier with excellent product quality. Good technical support for farmers."
  },
  {
    name: "Khalil Ahmad",
    stars: 4.8,
    time: "3 hours ago",
    comment: "Highly effective medicines! Reduced disease outbreaks and improved overall farm profitability."
  },
  {
    name: "Saeed Abbas",
    stars: 4.7,
    time: "30 minutes ago",
    comment: "Outstanding results with growth promoters. Professional service and quality products."
  },
  {
    name: "Jamil Ahmed",
    stars: 4.8,
    time: "4 days ago",
    comment: "Highly recommend to fellow farmers! Significant improvement in flock performance and health."
  },
  {
    name: "Ahmed Ali",
    stars: 4.8,
    time: "2 hours ago",
    comment: "Outstanding service and quality. Highly recommend to everyone!"
  },
  {
    name: "Muhammad Hassan",
    stars: 4.6,
    time: "1 day ago",
    comment: "Very satisfied with the product. Fast delivery and great customer support."
  },
  {
    name: "Omar Sheikh",
    stars: 4.9,
    time: "45 minutes ago",
    comment: "Exceptional quality! Worth every penny. Will definitely order again."
  },
  {
    name: "Ali Raza",
    stars: 4.5,
    time: "3 days ago",
    comment: "Good experience overall. The product met my expectations perfectly."
  },
  {
    name: "Hamza Iqbal",
    stars: 4.7,
    time: "1 week ago",
    comment: "Impressive quality and timely delivery. Professional service throughout."
  },
  {
    name: "Bilal Ahmad",
    stars: 4.8,
    time: "30 minutes ago",
    comment: "Fantastic experience! Quick response and excellent quality control."
  },
  {
    name: "Shahid Afridi",
    stars: 4.6,
    time: "5 days ago",
    comment: "Very pleased with the service. Packaging was excellent and secure."
  },
  {
    name: "Waseem Abbas",
    stars: 4.3,
    time: "2 weeks ago",
    comment: "Decent quality for the price. Delivery was on time as promised."
  },
  {
    name: "Imran Malik",
    stars: 4.9,
    time: "1 hour ago",
    comment: "Amazing product! Exceeded all my expectations. Five stars deserved."
  },
  {
    name: "Faisal Khan",
    stars: 4.7,
    time: "4 hours ago",
    comment: "Great value for money. Professional handling and quick processing."
  },
  {
    name: "Tariq Mahmood",
    stars: 4.5,
    time: "6 days ago",
    comment: "Satisfied with the quality. Customer service was very helpful."
  },
  {
    name: "Asad Ullah",
    stars: 4.8,
    time: "15 minutes ago",
    comment: "Outstanding performance and reliability. Highly recommended service."
  },
  {
    name: "Rizwan Ahmed",
    stars: 4.4,
    time: "1 day ago",
    comment: "Good product with minor room for improvement. Overall satisfied."
  },
  {
    name: "Naveed Anwar",
    stars: 4.6,
    time: "3 weeks ago",
    comment: "Excellent quality and prompt delivery. Will be a repeat customer."
  },
  {
    name: "Junaid Jamshed",
    stars: 4.9,
    time: "20 minutes ago",
    comment: "Perfect in every way! Quality, service, and timing all excellent."
  },
  {
    name: "Kashif Mehmood",
    stars: 4.3,
    time: "8 hours ago",
    comment: "Fair quality for the price point. Delivery was reasonably fast."
  },
  {
    name: "Adnan Sami",
    stars: 4.7,
    time: "2 days ago",
    comment: "Very happy with my purchase. Great attention to detail."
  },
  {
    name: "Salman Butt",
    stars: 4.5,
    time: "10 days ago",
    comment: "Solid product with good build quality. Recommended for others."
  },
]

export {reviews}