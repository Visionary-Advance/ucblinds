// Service data for UCBlinds
export const services = [
  {
    id: 1,
    slug: 'residential-blind-cleaning',
    title: 'Residential Blinds Cleaning',
    cta:"Schedule Blind Cleaning Pickup",
    shortDescription: 'Our ultrasonic blind cleaning process deep-cleans every surface, including cords and mechanisms.',
    heroDescription: 'Blinds can trap dust, allergens, cooking residue, and pet hair. Our ultrasonic blind cleaning process deep-cleans every surface, including cords and mechanisms.',
   image: '/Img/window-blinds-repair.png',
    heroImage: '/Img/window-blinds-repair.png',
    process: [
      {
        step: 1,
        title: 'We pick up your blinds from your home',
        description: 'You can either fill out our contact form with the dimensions of your window coverings, or we can come directly to your home, business, or property to evaluate your window treatments in person. Whether you have aluminum blinds, fabric shades, vinyl, verticals, or any other type, we\'ll assess them thoroughly. We believe in being upfront and honest—if we can\'t clean them, we\'ll let you know. You can trust that we\'re fully licensed and insured to handle your window treatments with care.',
        image: '/Img/window-blinds-repair.png'
      },
      {
        step: 2,
        title: 'Clean them using ultrasonic technology',
        description: 'Our team carefully removes your blinds in an orderly fashion, keeping track of each window treatment and where it belongs. We then transport them to our professional cleaning facility where the real transformation begins.',
        image: '/Img/window-blinds-repair.png'
      },
      {
        step: 3,
        title: 'Then return and rehang them for you',
        description: 'At our shop, we clean your blinds using our state-of-the-art ultrasonic cleaning machine with environmentally friendly, pure solutions. During this process, we also inspect each blind for any damage and make necessary repairs to ensure they look and function like new.',
        image: '/Img/window-blinds-repair.png'
      },
//       {
//         step: 4,
//         title: 'Professional Reinstallation',
//         description: 'Once your blinds are spotless and fully restored, we\'ll reinstall them at a time that works best for your schedule. We make sure everything is hung perfectly and operates smoothly to your complete satisfaction.',
// image: '/Img/window-blinds-repair.png'      }
    ]
  },
  {
    id: 2,
    slug: 'blind-repair-services',
    title: 'Blinds Repair',
     cta:"Get a Blind Repair Quote",
    shortDescription: 'Expert repair services to restore your blinds to perfect working condition.',
    heroDescription: 'Our skilled technicians can repair any type of window blind damage. From broken slats and cords to malfunctioning mechanisms, we have the expertise and parts to fix your blinds efficiently and affordably.',
   image: '/Img/window-blinds-repair.png',
    heroImage: '/Img/window-blinds-repair.png',
    process: [
      {
        step: 1,
        title: 'Free Assessment & Consultation',
        description: 'You can either fill out our contact form with the dimensions of your window coverings, or we can come directly to your home, business, or property to evaluate your window treatments in person. Whether you have aluminum blinds, fabric shades, vinyl, verticals, or any other type, we\'ll assess them thoroughly. We believe in being upfront and honest—if we can\'t clean them, we\'ll let you know. You can trust that we\'re fully licensed and insured to handle your window treatments with care.',
        image: '/Img/window-blinds-repair.png'
      },
      {
        step: 2,
        title: 'Careful Removal & Transportation',
        description: 'Our team carefully removes your blinds in an orderly fashion, keeping track of each window treatment and where it belongs. We then transport them to our professional cleaning facility where the real transformation begins.',
        image: '/Img/window-blinds-repair.png'
      },
      {
        step: 3,
        title: 'Deep Clean, Inspect & Repair',
        description: 'At our shop, we clean your blinds using our state-of-the-art ultrasonic cleaning machine with environmentally friendly, pure solutions. During this process, we also inspect each blind for any damage and make necessary repairs to ensure they look and function like new.',
        image: '/Img/window-blinds-repair.png'
      },
      {
        step: 4,
        title: 'Professional Reinstallation',
        description: 'Once your blinds are spotless and fully restored, we\'ll reinstall them at a time that works best for your schedule. We make sure everything is hung perfectly and operates smoothly to your complete satisfaction.',
        image: '/Img/window-blinds-repair.png'
      }
    ]
  },

  {
    id: 3,
    slug: 'blind-replacement-and-new-installation',
    title: 'Blind Replacement and Install',
     cta:"Schedule Blind Cleaning Pickup",
    shortDescription: 'Browse and purchase high-quality window blinds with professional installation included.',
    heroDescription: 'Looking for new window treatments? We offer a wide selection of high-quality blinds, shades, and window coverings for residential and commercial properties. Our expert team will help you choose the perfect style and provide professional installation.',
   image: '/Img/window-blinds-repair.png',
    heroImage: '/Img/window-blinds-repair.png',
    process: [
      {
        step: 1,
        title: 'Free Consultation & Measurement',
        description: 'Schedule a free in-home consultation where we\'ll bring samples, discuss your needs, and take precise measurements of your windows. We\'ll help you choose the perfect blinds that match your style, budget, and functional requirements.',
        image: '/Img/window-blinds-repair.png'
      },
      {
        step: 2,
        title: 'Custom Order & Fabrication',
        description: 'Once you\'ve selected your blinds, we place a custom order with our trusted manufacturers. Each blind is made to your exact specifications, ensuring a perfect fit for your windows.',
        image: '/Img/window-blinds-repair.png'
      },
      {
        step: 3,
        title: 'Quality Inspection',
        description: 'When your custom blinds arrive, we carefully inspect each piece to ensure it meets our high standards. We check for proper dimensions, functioning mechanisms, and overall quality before scheduling installation.',
        image: '/Img/window-blinds-repair.png'
      },
      {
        step: 4,
        title: 'Professional Installation',
        description: 'Our expert installers will arrive at your scheduled time to professionally install your new blinds. We ensure each blind is hung perfectly, operates smoothly, and looks beautiful in your space.',
        image: '/Img/window-blinds-repair.png'
      }
    ]
  },
  
];

// Helper function to get service by slug
export function getServiceBySlug(slug) {
  return services.find(service => service.slug === slug);
}

// Helper function to get all service slugs (useful for static paths)
export function getAllServiceSlugs() {
  return services.map(service => service.slug);
}
