
export const categories = [
  'All',
  'Commuter',
  'Scooter',
  'Performance',
  'Gear',
  'Accessories',
];

export const initialProducts = [
  {
    id: 1,
    stock: 12,
    name: 'Kalye Rider 125',
    category: 'Commuter',
    shape: 'bike',
    price: 78900,
    color: '#ff5a1f',
    image: '/images/motorcycles/kalye-rider-125.png',
    images: [],
    description:
      'The everyday workhorse. Light, reliable and sips fuel through the worst EDSA jams.',
    specs: [
      ['Engine', '125 cc, air-cooled'],
      ['Power', '8.7 hp'],
      ['Fuel tank', '4.2 L'],
      ['Weight', '103 kg'],
    ],
  },

  {
    id: 2,
    stock: 9,
    name: 'Kalye Rider 150',
    category: 'Commuter',
    shape: 'bike',
    price: 94900,
    color: '#2f80ed',
    image: '/images/motorcycles/kalye-rider-150.png',
    images: [],
    description:
      'A bit more punch for longer commutes, with disc brakes and a digital panel.',
    specs: [
      ['Engine', '150 cc, fuel-injected'],
      ['Power', '12.5 hp'],
      ['Fuel tank', '5 L'],
      ['Weight', '112 kg'],
    ],
  },

  {
    id: 3,
    stock: 15,
    name: 'Bayani Underbone 115',
    category: 'Commuter',
    shape: 'bike',
    price: 62500,
    color: '#e5383b',
    image: '/images/motorcycles/bayani-underbone-115.png',
    images: [],
    description:
      'Budget-friendly underbone with easy gearing. Perfect for first-time riders and delivery work.',
    specs: [
      ['Engine', '115 cc'],
      ['Power', '8.2 hp'],
      ['Fuel tank', '3.7 L'],
      ['Weight', '98 kg'],
    ],
  },

  {
    id: 4,
    stock: 10,
    name: 'Lakad Scooter 125',
    category: 'Scooter',
    shape: 'scooter',
    price: 84900,
    color: '#2ec4b6',
    image: '/images/motorcycles/lakad-scooter-125.png',
    images: [],
    description:
      'Twist-and-go automatic with a roomy underseat for your helmet and groceries.',
    specs: [
      ['Engine', '125 cc, CVT'],
      ['Power', '9.4 hp'],
      ['Underseat', '18 L'],
      ['Weight', '102 kg'],
    ],
  },

  {
    id: 5,
    stock: 5,
    name: 'Lakad Scooter 160 ABS',
    category: 'Scooter',
    shape: 'scooter',
    price: 119900,
    color: '#ffbe0b',
    image: '/images/motorcycles/lakad-scooter-160.png',
    images: [],
    description:
      'Bigger wheels, ABS and keyless start for confident city and highway riding.',
    specs: [
      ['Engine', '160 cc, CVT'],
      ['Power', '15 hp'],
      ['Brakes', 'Front & rear disc, ABS'],
      ['Weight', '118 kg'],
    ],
  },

  {
    id: 6,
    stock: 6,
    name: 'Bida Maxi 155',
    category: 'Scooter',
    shape: 'scooter',
    price: 149900,
    color: '#8338ec',
    image: '/images/motorcycles/bida-maxi-155.png',
    images: [],
    description:
      'A comfortable maxi-scooter with a wide seat and wind screen for two-up rides.',
    specs: [
      ['Engine', '155 cc, liquid-cooled'],
      ['Power', '15.4 hp'],
      ['Fuel tank', '8 L'],
      ['Weight', '127 kg'],
    ],
  },

  {
    id: 7,
    stock: 7,
    name: 'Takbo 200 Naked',
    category: 'Performance',
    shape: 'bike',
    price: 169000,
    color: '#fb5607',
    image: '/images/motorcycles/takbo-200-naked.png',
    images: [],
    description:
      'Aggressive naked streetfighter with a punchy single and sharp handling.',
    specs: [
      ['Engine', '200 cc, liquid-cooled'],
      ['Power', '24.5 hp'],
      ['Brakes', 'Dual-channel ABS'],
      ['Weight', '142 kg'],
    ],
  },

  {
    id: 8,
    stock: 4,
    name: 'Takbo RR 250',
    category: 'Performance',
    shape: 'bike',
    price: 229000,
    color: '#e5383b',
    image: '/images/motorcycles/takbo-rr-250.png',
    images: [],
    description:
      'Full-fairing sport bike with a slipper clutch and track-ready looks.',
    specs: [
      ['Engine', '250 cc, twin-cylinder'],
      ['Power', '35 hp'],
      ['Top speed', '165 km/h'],
      ['Weight', '168 kg'],
    ],
  },

  {
    id: 9,
    stock: 0,
    name: 'Bundok 250 Adventure',
    category: 'Performance',
    shape: 'bike',
    price: 249000,
    color: '#6a994e',
    image: '/images/motorcycles/bundok-250-adventure.png',
    images: [],
    description:
      'Long-travel suspension and a tall stance for roads that stop being roads.',
    specs: [
      ['Engine', '250 cc, liquid-cooled'],
      ['Power', '27 hp'],
      ['Ground clearance', '230 mm'],
      ['Weight', '158 kg'],
    ],
  },

  {
    id: 10,
    stock: 3,
    name: 'Kalye Cafe Racer 400',
    category: 'Performance',
    shape: 'bike',
    price: 319000,
    color: '#adb5bd',
    image: '/images/motorcycles/kalye-cafe-racer-400.png',
    images: [],
    description:
      'Retro lines, modern torque. Our flagship for riders who want to stand out.',
    specs: [
      ['Engine', '400 cc, parallel twin'],
      ['Power', '42 hp'],
      ['Brakes', 'Radial front calipers'],
      ['Weight', '176 kg'],
    ],
  },

  {
    id: 11,
    stock: 20,
    name: 'Daan Full-Face Helmet',
    category: 'Gear',
    shape: 'helmet',
    price: 4890,
    color: '#ff5a1f',
    image: '/images/gears/daan-full-face-helmet.png',
    images: [],
    description:
      'ICC-certified full-face helmet with a fog-resistant visor and quick-release strap.',
    specs: [
      ['Type', 'Full-face'],
      ['Shell', 'ABS'],
      ['Sizes', 'M / L / XL'],
      ['Certification', 'ICC'],
    ],
  },

  {
    id: 12,
    stock: 14,
    name: 'Ulan Rain Jacket',
    category: 'Gear',
    shape: 'jacket',
    price: 2290,
    color: '#ffbe0b',
    image: '/images/gears/ulan-rain-jacket.png',
    images: [],
    description:
      'Waterproof, high-visibility jacket that packs small and survives the rainy season.',
    specs: [
      ['Material', 'Waterproof nylon'],
      ['Features', 'Reflective strips'],
      ['Sizes', 'S – XXL'],
      ['Colour', 'Hi-vis yellow'],
    ],
  },

  {
    id: 13,
    stock: 18,
    name: 'Tibay Armored Jacket',
    category: 'Gear',
    shape: 'jacket',
    price: 5990,
    color: '#343a40',
    image: '/images/gears/tibay-armored-jacket.png',
    images: [],
    description:
      'Mesh jacket with removable CE-rated armor for hot weather rides.',
    specs: [
      ['Material', 'Breathable mesh'],
      ['Protection', 'CE armor: shoulders, elbows, back'],
      ['Sizes', 'S – XXL'],
      ['Colour', 'Charcoal'],
    ],
  },

  {
    id: 14,
    stock: 25,
    name: 'Tali Top Box 32L',
    category: 'Accessories',
    shape: 'box',
    price: 3490,
    color: '#2b2d31',
    image: '/images/accessories/tali-top-box-32l.png',
    images: [],
    description:
      'Lockable 32-litre top case that fits a full-face helmet. Mounting plate included.',
    specs: [
      ['Capacity', '32 L'],
      ['Lock', 'Keyed'],
      ['Fits', 'Most rear racks'],
      ['Includes', 'Mounting plate'],
    ],
  },

  {
    id: 15,
    stock: 30,
    name: 'Kandado Disc Lock',
    category: 'Accessories',
    shape: 'box',
    price: 790,
    color: '#e5383b',
    image: '/images/accessories/kandado-disc-lock.png',
    images: [],
    description:
      'Hardened-steel disc lock with a reminder cable, because tulog lang sandali ang magnanakaw.',
    specs: [
      ['Material', 'Hardened steel'],
      ['Pin', '7 mm'],
      ['Includes', '2 keys, pouch'],
      ['Fits', 'All disc brakes'],
    ],
  },

  {
    id: 16,
    stock: 2,
    name: 'Hawak Phone Mount + USB',
    category: 'Accessories',
    shape: 'box',
    price: 1290,
    color: '#2ec4b6',
    image: '/images/accessories/hawak-phone-mount.png',
    images: [],
    description:
      'Vibration-damped phone holder with a 2.4A USB charger wired to your battery.',
    specs: [
      ['Fits', '4.7" – 6.9" phones'],
      ['Charging', 'USB 2.4A'],
      ['Mount', 'Handlebar clamp'],
      ['Water resistance', 'Splash-proof'],
    ],
  },
];