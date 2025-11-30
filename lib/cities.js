// City data for UCBlinds landing pages
// Follows similar pattern to lib/services.js

export const cities = [
  {
    id: 1,
    name: 'Eugene',
    slug: 'eugene',
    state: 'OR',
    phoneNumber: '541-343-8000',

    // SEO metadata (unique per city)
    metaTitle: 'Window Blinds Eugene OR | New Blind Sales & Installation | UCBlinds',
    metaDescription: 'Top-rated window blind sales & installation in Eugene, OR. Free in-home consultation, lifetime cleaning warranty, expert installation. Call 541-343-8000 today!',

    // Hero section
    hero: {
      title: 'Premium Window Blinds for Eugene Homes',
      subtitle: 'Eugene, Oregon',
      description: 'Transform your Eugene home with custom blinds. Professional installation, lifetime cleaning warranty, and unbeatable quality for homes throughout Lane County.',
      backgroundImage: '/Img/rollerhades_creme.webp', // Placeholder
      ctaText: 'Call Now: 541-343-8000',
      ctaPhone: '541-343-8000'
    },

    // Before/After slider images
    beforeAfter: [
      {
        id: 1,
        before: '/Img/Horizontal_Blinds_Img.jpg',  // Placeholder
        after: '/Img/New_Blind_Img.jpg',           // Placeholder
        title: 'Eugene Living Room Transformation',
        description: 'Modern roller shades installation in Eugene neighborhood'
      },
      {
        id: 2,
        before: '/Img/Wood_Blinds_Img.jpg',        // Placeholder
        after: '/Img/Roller_Blinds_Img.webp',      // Placeholder
        title: 'Master Bedroom Update',
        description: 'Cellular shades with blackout for better sleep'
      }
    ],

    // Product showcase
    products: [
      {
        name: 'Roller Shades',
        description: 'Modern, sleek window coverings perfect for Eugene\'s contemporary homes',
        image: '/Img/Roller_Blinds_Img.webp',
        popular: true
      },
      {
        name: 'Cellular Shades',
        description: 'Energy-efficient honeycomb design ideal for Eugene\'s climate',
        image: '/Img/Cellular_Blinds_Img.jpg',
        popular: true
      },
      {
        name: 'Wood Blinds',
        description: 'Classic elegance with natural wood for traditional Eugene homes',
        image: '/Img/Wood_Blinds_Img.jpg',
        popular: false
      },
      {
        name: 'Faux Wood Blinds',
        description: 'Durable moisture-resistant alternative perfect for Oregon weather',
        image: '/Img/Faux_Blinds_Img.webp',
        popular: true
      },
      {
        name: 'Vertical Blinds',
        description: 'Perfect for sliding doors and large windows in Eugene homes',
        image: '/Img/Vertical_Blinds_Img.jpg',
        popular: false
      },
      {
        name: 'Horizontal Blinds',
        description: 'Timeless window treatment solution for any Eugene home style',
        image: '/Img/Horizontal_Blinds_Img.jpg',
        popular: false
      }
    ],

    // Benefits (customize 1-2 per city)
    benefits: [
      {
        icon: 'MapPin',
        title: 'Local Eugene Experts',
        description: 'Family-owned business serving Eugene and Lane County for over a decade with personalized service'
      },
      {
        icon: 'Award',
        title: 'Lifetime Cleaning Warranty',
        description: 'Free ultrasonic cleaning for as long as you own your blinds - exclusive to UCBlinds customers'
      },
      {
        icon: 'Truck',
        title: 'Free In-Home Consultation',
        description: 'We bring samples directly to your Eugene home with no obligation - see options in your own lighting'
      },
      {
        icon: 'DollarSign',
        title: 'Competitive Eugene Pricing',
        description: 'Best prices in the Eugene area with professional installation included in every quote'
      }
    ],

    // Testimonials (city-specific)
    testimonials: [
      {
        id: 1,
        name: 'Megan R.',
        location: 'Eugene, OR',
        rating: 5,
        text: 'UC Blinds completely transformed our home. The new shades look stunning, and the cleaning program keeps everything looking brand new.',
        date: '2024-10'
      },
      {
        id: 2,
        name: 'Kristine Z.',
        location: 'Eugene, OR',
        rating: 5,
        text: 'Ultra Clean is our go to company for anything blind related. They have been quick and responsive to all our properties.',
        date: '2024-09'
      },
      {
        id: 3,
        name: 'Rebekah I.',
        location: 'Eugene, OR',
        rating: 5,
        text: 'Brett and team helped us fix 2 blinds and then purchase and install 2 skylight blinds! Quick professionalism and will definitely be back!',
        date: '2024-08'
      }
    ],

    // Local information
    localInfo: {
      serviceAreas: ['Eugene', 'Springfield', 'Creswell', 'Veneta', 'Cottage Grove', 'Coburg'],
      hoursDrive: 'Same-day service available in Eugene metro area',
      specialOffer: '10% off new blind installations for Eugene residents this month - mention this offer when you call!',
      nearbyLandmarks: ['University of Oregon', 'Downtown Eugene', 'Amazon Park', 'Hayward Field', 'Autzen Stadium']
    }
  },

  {
    id: 2,
    name: 'Bend',
    slug: 'bend',
    state: 'OR',
    phoneNumber: '541-343-8000',

    // SEO metadata (unique per city)
    metaTitle: 'Window Blinds Bend OR | Custom Blind Sales & Installation | UCBlinds',
    metaDescription: 'Premium window blind sales & installation in Bend, OR. Serving Central Oregon with free consultations, lifetime warranty, and expert installation. Call 541-343-8000!',

    // Hero section
    hero: {
      title: 'Custom Window Blinds for Bend Homes',
      subtitle: 'Bend, Oregon',
      description: 'Bring style and functionality to your Bend home with our premium custom blinds. Expert installation and lifetime cleaning warranty for Central Oregon homeowners.',
      backgroundImage: '/Img/white_faux_wood.webp', // Placeholder
      ctaText: 'Call Now: 541-343-8000',
      ctaPhone: '541-343-8000'
    },

    // Before/After slider images
    beforeAfter: [
      {
        id: 1,
        before: '/Img/Vertical_Blinds_Img.jpg',    // Placeholder
        after: '/Img/Cellular_Blinds_Img.jpg',     // Placeholder
        title: 'Bend Home Office Upgrade',
        description: 'Energy-efficient cellular shades for Bend\'s climate'
      },
      {
        id: 2,
        before: '/Img/Faux_Blinds_Img.webp',       // Placeholder
        after: '/Img/Wood_Blinds_Img.jpg',         // Placeholder
        title: 'Mountain View Living Room',
        description: 'Wood blinds perfectly complement Bend\'s mountain aesthetic'
      }
    ],

    // Product showcase
    products: [
      {
        name: 'Cellular Shades',
        description: 'Insulating honeycomb design perfect for Bend\'s temperature extremes',
        image: '/Img/Cellular_Blinds_Img.jpg',
        popular: true
      },
      {
        name: 'Wood Blinds',
        description: 'Natural wood beauty that matches Bend\'s mountain home aesthetic',
        image: '/Img/Wood_Blinds_Img.jpg',
        popular: true
      },
      {
        name: 'Faux Wood Blinds',
        description: 'Durable and moisture-resistant for Bend\'s varying weather',
        image: '/Img/Faux_Blinds_Img.webp',
        popular: true
      },
      {
        name: 'Roller Shades',
        description: 'Modern window coverings for contemporary Bend homes',
        image: '/Img/Roller_Blinds_Img.webp',
        popular: false
      },
      {
        name: 'Vertical Blinds',
        description: 'Ideal for large windows and stunning Bend mountain views',
        image: '/Img/Vertical_Blinds_Img.jpg',
        popular: false
      },
      {
        name: 'Horizontal Blinds',
        description: 'Classic style for any Central Oregon home',
        image: '/Img/Horizontal_Blinds_Img.jpg',
        popular: false
      }
    ],

    // Benefits
    benefits: [
      {
        icon: 'MapPin',
        title: 'Serving Central Oregon',
        description: 'Proud to serve Bend and surrounding Central Oregon communities with quality window treatments'
      },
      {
        icon: 'Award',
        title: 'Lifetime Cleaning Warranty',
        description: 'Free ultrasonic cleaning for the life of your blinds - a UCBlinds exclusive benefit'
      },
      {
        icon: 'Truck',
        title: 'Free Bend Consultations',
        description: 'We bring samples to your Bend home so you can choose with confidence'
      },
      {
        icon: 'Shield',
        title: 'Weather-Ready Solutions',
        description: 'Blinds designed to handle Bend\'s hot summers and cold winters'
      }
    ],

    // Testimonials
    testimonials: [
      {
        id: 1,
        name: 'Michael D.',
        location: 'Bend, OR',
        rating: 5,
        text: 'Outstanding service! The new blinds look amazing and really help with energy efficiency in our Bend home.',
        date: '2024-11'
      },
      {
        id: 2,
        name: 'Sarah T.',
        location: 'Bend, OR',
        rating: 5,
        text: 'Professional installation and beautiful results. The team was friendly and respectful of our home.',
        date: '2024-09'
      },
      {
        id: 3,
        name: 'James K.',
        location: 'Bend, OR',
        rating: 5,
        text: 'Great experience from quote to installation. Highly recommend for anyone in Central Oregon!',
        date: '2024-08'
      }
    ],

    // Local information
    localInfo: {
      serviceAreas: ['Bend', 'Redmond', 'Sisters', 'Sunriver', 'La Pine', 'Tumalo'],
      hoursDrive: 'Serving all of Central Oregon with flexible scheduling',
      specialOffer: 'Free energy consultation with every Bend area blind installation - save on heating and cooling!',
      nearbyLandmarks: ['Old Mill District', 'Mount Bachelor', 'Pilot Butte', 'Drake Park', 'Deschutes River']
    }
  },

  {
    id: 3,
    name: 'Springfield',
    slug: 'springfield',
    state: 'OR',
    phoneNumber: '541-343-8000',

    // SEO metadata (unique per city)
    metaTitle: 'Window Blinds Springfield OR | Affordable Blind Installation | UCBlinds',
    metaDescription: 'Quality window blind sales & installation in Springfield, OR. Affordable pricing, free consultations, lifetime cleaning warranty. Call 541-343-8000 today!',

    // Hero section
    hero: {
      title: 'Affordable Window Blinds for Springfield',
      subtitle: 'Springfield, Oregon',
      description: 'Quality window treatments for Springfield homes at prices that fit your budget. Professional installation and our exclusive lifetime cleaning warranty included.',
      backgroundImage: '/Img/rollerhades_creme.webp', // Placeholder
      ctaText: 'Call Now: 541-343-8000',
      ctaPhone: '541-343-8000'
    },

    // Before/After slider images
    beforeAfter: [
      {
        id: 1,
        before: '/Img/Horizontal_Blinds_Img.jpg',  // Placeholder
        after: '/Img/Faux_Blinds_Img.webp',        // Placeholder
        title: 'Springfield Family Room',
        description: 'Faux wood blinds perfect for busy Springfield families'
      },
      {
        id: 2,
        before: '/Img/Vertical_Blinds_Img.jpg',    // Placeholder
        after: '/Img/Roller_Blinds_Img.webp',      // Placeholder
        title: 'Modern Kitchen Update',
        description: 'Roller shades for easy cleaning in Springfield kitchens'
      }
    ],

    // Product showcase
    products: [
      {
        name: 'Faux Wood Blinds',
        description: 'Affordable elegance that\'s perfect for Springfield family homes',
        image: '/Img/Faux_Blinds_Img.webp',
        popular: true
      },
      {
        name: 'Roller Shades',
        description: 'Easy-to-clean modern shades ideal for Springfield kitchens and bathrooms',
        image: '/Img/Roller_Blinds_Img.webp',
        popular: true
      },
      {
        name: 'Cellular Shades',
        description: 'Energy-efficient option to reduce Springfield home energy costs',
        image: '/Img/Cellular_Blinds_Img.jpg',
        popular: true
      },
      {
        name: 'Horizontal Blinds',
        description: 'Budget-friendly classic style for any Springfield home',
        image: '/Img/Horizontal_Blinds_Img.jpg',
        popular: false
      },
      {
        name: 'Vertical Blinds',
        description: 'Great for Springfield homes with sliding glass doors',
        image: '/Img/Vertical_Blinds_Img.jpg',
        popular: false
      },
      {
        name: 'Wood Blinds',
        description: 'Natural wood beauty for Springfield homes seeking elegance',
        image: '/Img/Wood_Blinds_Img.jpg',
        popular: false
      }
    ],

    // Benefits
    benefits: [
      {
        icon: 'DollarSign',
        title: 'Affordable Springfield Pricing',
        description: 'Quality blinds at prices that work for Springfield families - no hidden fees'
      },
      {
        icon: 'Award',
        title: 'Lifetime Cleaning Warranty',
        description: 'Free ultrasonic cleaning for as long as you own your blinds'
      },
      {
        icon: 'Truck',
        title: 'Free Springfield Consultations',
        description: 'No-pressure in-home consultations - we bring samples to you'
      },
      {
        icon: 'Clock',
        title: 'Fast Installation',
        description: 'Quick turnaround times to get your Springfield home looking great'
      }
    ],

    // Testimonials
    testimonials: [
      {
        id: 1,
        name: 'Jennifer M.',
        location: 'Springfield, OR',
        rating: 5,
        text: 'Excellent value for the price! The blinds look great and the installation was professional.',
        date: '2024-10'
      },
      {
        id: 2,
        name: 'Robert P.',
        location: 'Springfield, OR',
        rating: 5,
        text: 'Very happy with our new blinds. The team was punctual and did a fantastic job.',
        date: '2024-09'
      },
      {
        id: 3,
        name: 'Amanda L.',
        location: 'Springfield, OR',
        rating: 5,
        text: 'Great experience! Fair pricing and quality work. Would definitely recommend to Springfield neighbors.',
        date: '2024-07'
      }
    ],

    // Local information
    localInfo: {
      serviceAreas: ['Springfield', 'Eugene', 'Creswell', 'Pleasant Hill', 'Thurston', 'Glenwood'],
      hoursDrive: 'Same-day service available throughout Springfield',
      specialOffer: 'Springfield residents save 10% on installations of 5 or more blinds - call for details!',
      nearbyLandmarks: ['Willamalane Park', 'Dorris Ranch', 'Springfield Museum', 'Gateway Mall']
    }
  },

  {
    id: 4,
    name: 'Woodburn',
    slug: 'woodburn',
    state: 'OR',
    phoneNumber: '541-343-8000',

    // SEO metadata (unique per city)
    metaTitle: 'Window Blinds Woodburn OR | Professional Blind Installation | UCBlinds',
    metaDescription: 'Expert window blind sales & installation in Woodburn, OR. Serving Marion County with quality products, free consultations, and lifetime warranty. Call 541-343-8000!',

    // Hero section
    hero: {
      title: 'Professional Window Blinds for Woodburn',
      subtitle: 'Woodburn, Oregon',
      description: 'Serving Woodburn and Marion County with premium window treatments. Professional installation, lifetime cleaning warranty, and personalized service for every home.',
      backgroundImage: '/Img/white_faux_wood.webp', // Placeholder
      ctaText: 'Call Now: 541-343-8000',
      ctaPhone: '541-343-8000'
    },

    // Before/After slider images
    beforeAfter: [
      {
        id: 1,
        before: '/Img/Wood_Blinds_Img.jpg',        // Placeholder
        after: '/Img/Cellular_Blinds_Img.jpg',     // Placeholder
        title: 'Woodburn Home Makeover',
        description: 'Cellular shades transform this Woodburn residence'
      },
      {
        id: 2,
        before: '/Img/Horizontal_Blinds_Img.jpg',  // Placeholder
        after: '/Img/Faux_Blinds_Img.webp',        // Placeholder
        title: 'Classic to Contemporary',
        description: 'Faux wood blinds modernize a traditional Woodburn home'
      }
    ],

    // Product showcase
    products: [
      {
        name: 'Faux Wood Blinds',
        description: 'Durable and beautiful - ideal for Woodburn\'s family-friendly homes',
        image: '/Img/Faux_Blinds_Img.webp',
        popular: true
      },
      {
        name: 'Cellular Shades',
        description: 'Energy-efficient window treatments for Woodburn homeowners',
        image: '/Img/Cellular_Blinds_Img.jpg',
        popular: true
      },
      {
        name: 'Wood Blinds',
        description: 'Timeless elegance for traditional Woodburn homes',
        image: '/Img/Wood_Blinds_Img.jpg',
        popular: true
      },
      {
        name: 'Roller Shades',
        description: 'Modern, sleek design for contemporary Woodburn residences',
        image: '/Img/Roller_Blinds_Img.webp',
        popular: false
      },
      {
        name: 'Vertical Blinds',
        description: 'Perfect for Woodburn homes with patio doors',
        image: '/Img/Vertical_Blinds_Img.jpg',
        popular: false
      },
      {
        name: 'Horizontal Blinds',
        description: 'Versatile and affordable for any Woodburn home',
        image: '/Img/Horizontal_Blinds_Img.jpg',
        popular: false
      }
    ],

    // Benefits
    benefits: [
      {
        icon: 'MapPin',
        title: 'Woodburn & Marion County',
        description: 'Proudly serving Woodburn and surrounding Marion County communities'
      },
      {
        icon: 'Award',
        title: 'Lifetime Cleaning Warranty',
        description: 'Exclusive free ultrasonic cleaning for the life of your blinds'
      },
      {
        icon: 'Truck',
        title: 'Free Woodburn Consultations',
        description: 'Convenient in-home consultations with samples for Woodburn residents'
      },
      {
        icon: 'Shield',
        title: 'Quality Guaranteed',
        description: 'Top-quality products backed by our satisfaction guarantee'
      }
    ],

    // Testimonials
    testimonials: [
      {
        id: 1,
        name: 'Carlos R.',
        location: 'Woodburn, OR',
        rating: 5,
        text: 'Fantastic service! The blinds are beautiful and the installation was flawless. Highly recommend!',
        date: '2024-11'
      },
      {
        id: 2,
        name: 'Maria G.',
        location: 'Woodburn, OR',
        rating: 5,
        text: 'Professional team, great products, fair prices. Very pleased with our new blinds!',
        date: '2024-10'
      },
      {
        id: 3,
        name: 'David S.',
        location: 'Woodburn, OR',
        rating: 5,
        text: 'From consultation to installation, everything was perfect. Our Woodburn home looks amazing!',
        date: '2024-09'
      }
    ],

    // Local information
    localInfo: {
      serviceAreas: ['Woodburn', 'Hubbard', 'Aurora', 'St. Paul', 'Gervais', 'Donald'],
      hoursDrive: 'Serving Woodburn and Marion County with flexible scheduling',
      specialOffer: 'Woodburn homeowners get a free blind inspection and cleaning with any new installation!',
      nearbyLandmarks: ['Woodburn Premium Outlets', 'Woodburn Aquatic Center', 'Legion Park', 'Settlemier Park']
    }
  }
];

// Helper functions
export function getCityBySlug(slug) {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs() {
  return cities.map(city => city.slug);
}

export function getAllCities() {
  return cities;
}
