// Rebrand here: name, tagline, colors, copy, hero slides.
export const brand = {
  name: 'Kalye Moto',
  parts: ['KALYE', 'MOTO'],              // logo is rendered in two colors
  tagline: 'Ride Your Own Road.',
  heroTitle: 'Ride Your Own Road.',
  heroText: 'Motorcycles, scooters, gear and accessories for every Filipino rider.',
  currency: '₱',
  shipping: 1500,                        // flat delivery fee (0 = free)
  accent: '#ff5a1f',
  ticker: ['Ride Your Own Road', 'EDSA-ready commuters', 'Weekend escapes', 'Gear up. Go.', 'Sulit na sulit', 'Cash on delivery'],
  // Hero slideshow. `productId` picks the bike drawn; set `image` to a photo URL/path to use real photography.
  slides: [
    { productId: 1, word: 'EDSA', title: 'Beat the traffic.', text: 'Fuel-sipping commuters built for daily grind.', bg: 'linear-gradient(120deg,#16161a 30%,#3a1d10)', image: '' },
    { productId: 4, word: 'DAAN', title: 'Twist. Go. Park anywhere.', text: 'Easy scooters for the city, from errands to dates.', bg: 'linear-gradient(120deg,#16161a 30%,#102a3a)', image: '' },
    { productId: 8, word: 'TAKBO', title: 'Weekend belongs to you.', text: 'Performance bikes for Tagaytay, Bataan and beyond.', bg: 'linear-gradient(120deg,#16161a 30%,#3a1016)', image: '' },
  ],
}
