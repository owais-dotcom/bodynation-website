export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportingGoodsStore',
  name: 'BodyNation Sports & Nutrition',
  image: 'https://bodynation.in/images/logo.webp',
  description:
    'Authentic sports supplements and fitness nutrition in Bibwewadi, Pune. Whey protein, creatine, pre-workout, mass gainers and vitamins from verified distributors.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No 105, Kapil Upvan Plaza, Lake Town Road, Near Gravity Fitness Club',
    addressLocality: 'Bibwewadi',
    addressRegion: 'Maharashtra',
    postalCode: '411037',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.4724,
    longitude: 73.869,
  },
  telephone: '+91-9623300461',
  url: 'https://bodynation.in',
  sameAs: ['https://www.instagram.com/bodynation_protein_shop'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '21:00',
    },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, WhatsApp Order',
};
