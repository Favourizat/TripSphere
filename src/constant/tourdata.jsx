import FlightImage from "../assets/FlightImage.avif";
import HotelImage from "../assets/HotelImage.avif";
import TrainImage from "../assets/TrainImage.avif";
import HolidayImage from "../assets/HolidayImage.avif";



export const services = [
  {
    image: FlightImage,
    title: "Flight Booking",
    description:
      "Find and compare flights from different destinations and choose the option that works best for your journey.",
    features: [
      "Compare flight fares",
      "Flexible travel dates",
      "Multiple airlines",
    ],
    link: "Explore Flights",
    path: "/flights",
  },

  {
    image: HotelImage,
    title: "Hotel Booking",
    description:
      "Discover comfortable stays that match your destination, budget, and travel preferences.",
    features: [
      "Compare hotel prices",
      "Guest ratings and reviews",
      "Hotel amenities",
    ],
    link: "Find a Hotel",
    path: "/hotels",
  },

  {
    image: TrainImage,
    title: "Bus & Train",
    description:
      "Find convenient and affordable transportation options for journeys within and between destinations.",
    features: [
      "Compare transport options",
      "Departure schedules",
      "Seat availability",
    ],
    link: "Find Transport",
    path: "/transport",
  },

  {
    image: HolidayImage,
    title: "Holiday Packages",
    description:
      "Discover unforgettable holiday experiences tailored to your destination, budget, and travel style.",
    features: [
      "Curated holiday packages",
      "Exciting activities & experiences",
      "Accommodation & travel included",
    ],
    link: "Explore Holidays",
    path: "/holidays",
  },
]


export const bookingForms = {
    hotel: [
        {
            name: "destination",
            label: "Destination",
            type: "text",
            placeholder: "Where are you going?",
        },
        {
            name: "checkIn",
            label: "Check-in",
            type: "date",
        },
        {
            name: "checkOut",
            label: "Check-out",
            type: "date",
        },
        {
            name: "guests",
            label: "Guests",
            type: "number",
            placeholder: "Number of guests",
        },
    ],

    flight: [
        {
            name: "from",
            label: "From",
            type: "text",
            placeholder: "Departure city",
        },
        {
            name: "to",
            label: "To",
            type: "text",
            placeholder: "Arrival city",
        },
        {
            name: "departure",
            label: "Departure",
            type: "date",
        },
        {
            name: "returnDate",
            label: "Return",
            type: "date",
        },
        {
            name: "passengers",
            label: "Passengers",
            type: "number",
            placeholder: "Passengers",
        },
    ],

    holiday: [
        {
            name: "destination",
            label: "Destination",
            type: "text",
            placeholder: "Where do you want to go?",
        },
        {
            name: "travelDate",
            label: "Travel Date",
            type: "date",
        },
        {
            name: "duration",
            label: "Duration",
            type: "number",
            placeholder: "Days",
        },
        {
            name: "guests",
            label: "Guests",
            type: "number",
            placeholder: "Guests",
        },
    ],
};



export const tourdata = [
  {
    id: 1,
    destination: "Santorini",
    country: "Greece Tour",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=1074&auto=format&fit=crop",
    price: "$1,299",
    duration: "5 Days / 4 Nights",
    averageRating: 4.9,
    reviews: 342,
    category: "Romantic",
    description: "Experience breathtaking sunsets, blue-domed churches, and stunning Aegean views.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Santorini island tour",
      "Sunset cruise",
      "Professional tour guide"
    ]
  },

  {
    id: 2,
    destination: "Bali",
    country: "Indonesia Tour",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1170&auto=format&fit=crop",
    price: "$999",
    duration: "6 Days / 5 Nights",
    averageRating: 4.8,
    reviews: 521,
    category: "Beach",
    description: "Discover lush rice terraces, beautiful beaches, and vibrant Balinese culture.",
    includes: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Ubud cultural tour",
      "Rice terrace visit",
      "Private transportation"
    ]
  },

  {
    id: 3,
    destination: "Dubai",
    country: "United Arab Emirates Tour",
    image: "https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop",
    price: "$1,599",
    duration: "5 Days / 4 Nights",
    averageRating: 4.8,
    reviews: 481,
    category: "Luxury",
    description: "Enjoy luxury shopping, iconic skyscrapers, and unforgettable desert safaris.",
    includes: [
      "4 nights luxury accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Desert safari",
      "Dubai city tour",
      "Professional tour guide"
    ]
  },

  {
    id: 4,
    destination: "Paris",
    country: "France Tour",
    image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?q=80&w=1170&auto=format&fit=crop",
    price: "$1,450",
    duration: "5 Days / 4 Nights",
    averageRating: 4.9,
    reviews: 678,
    category: "City",
    description: "Visit world-famous landmarks and indulge in French cuisine and culture.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Eiffel Tower visit",
      "Paris city tour",
      "Professional tour guide"
    ]
  },

  {
    id: 5,
    destination: "Maldives",
    country: "Maldives Tour",
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=775&auto=format&fit=crop",
    price: "$2,199",
    duration: "7 Days / 6 Nights",
    averageRating: 5.0,
    reviews: 294,
    category: "Luxury",
    description: "Escape to private overwater villas surrounded by crystal-clear lagoons.",
    includes: [
      "6 nights resort accommodation",
      "Daily breakfast and dinner",
      "Airport speedboat transfer",
      "Snorkeling excursion",
      "Island hopping tour",
      "Beach activities"
    ]
  },

  {
    id: 6,
    destination: "Cape Town",
    country: "South Africa Tour",
    image: "https://images.unsplash.com/photo-1591742708307-ce49d19450d4?q=80&w=1074&auto=format&fit=crop",
    price: "$1,180",
    duration: "5 Days / 4 Nights",
    averageRating: 4.8,
    reviews: 327,
    category: "Adventure",
    description: "Explore breathtaking coastlines, Table Mountain, and incredible wildlife.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Table Mountain tour",
      "Cape Peninsula tour",
      "Wildlife experience"
    ]
  },

  {
    id: 7,
    destination: "Tokyo",
    country: "Japan Tour",
    image: "https://picsum.photos/seed/tokyo/800/600",
    price: "$1,790",
    duration: "6 Days / 5 Nights",
    averageRating: 4.9,
    reviews: 603,
    category: "City",
    description: "Experience futuristic technology, historic temples, and amazing cuisine.",
    includes: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Tokyo city tour",
      "Temple and shrine visit",
      "Professional tour guide"
    ]
  },

  {
    id: 8,
    destination: "Marrakech",
    country: "Morocco Tour",
    image: "https://picsum.photos/seed/marrakech/800/600",
    price: "$980",
    duration: "5 Days / 4 Nights",
    averageRating: 4.7,
    reviews: 276,
    category: "Culture",
    description: "Explore colorful souks, palaces, gardens, and Moroccan traditions.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Marrakech city tour",
      "Souk market experience",
      "Professional local guide"
    ]
  },

  {
    id: 9,
    destination: "Rome",
    country: "Italy Tour",
    image: "https://picsum.photos/seed/rome/800/600",
    price: "$1,380",
    duration: "5 Days / 4 Nights",
    averageRating: 4.8,
    reviews: 512,
    category: "History",
    description: "Walk through ancient ruins while enjoying authentic Italian cuisine.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Colosseum tour",
      "Vatican City visit",
      "Professional tour guide"
    ]
  },

  {
    id: 10,
    destination: "New York",
    country: "USA Tour",
    image: "https://picsum.photos/seed/newyork/800/600",
    price: "$1,690",
    duration: "4 Days / 3 Nights",
    averageRating: 4.8,
    reviews: 731,
    category: "City",
    description: "Experience iconic landmarks, Broadway shows, and vibrant nightlife.",
    includes: [
      "3 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Statue of Liberty tour",
      "Times Square visit",
      "New York city tour"
    ]
  },

  {
    id: 11,
    destination: "Istanbul",
    country: "Turkey Tour",
    image: "https://picsum.photos/seed/istanbul/800/600",
    price: "$1,090",
    duration: "5 Days / 4 Nights",
    averageRating: 4.7,
    reviews: 349,
    category: "Culture",
    description: "Discover the rich history where Europe meets Asia.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Hagia Sophia visit",
      "Bosphorus cruise",
      "Istanbul city tour"
    ]
  },

  {
    id: 12,
    destination: "Phuket",
    country: "Thailand Tour",
    image: "https://picsum.photos/seed/phuket/800/600",
    price: "$940",
    duration: "6 Days / 5 Nights",
    averageRating: 4.8,
    reviews: 454,
    category: "Beach",
    description: "Relax on tropical beaches and enjoy exciting island adventures.",
    includes: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Island hopping tour",
      "Snorkeling experience",
      "Beach activities"
    ]
  },

  {
    id: 13,
    destination: "Sydney",
    country: "Australia Tour",
    image: "https://picsum.photos/seed/sydney/800/600",
    price: "$1,950",
    duration: "6 Days / 5 Nights",
    averageRating: 4.9,
    reviews: 382,
    category: "Adventure",
    description: "Visit the Opera House, Bondi Beach, and breathtaking harbors.",
    includes: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Sydney city tour",
      "Opera House visit",
      "Bondi Beach excursion"
    ]
  },

  {
    id: 14,
    destination: "Swiss Alps",
    country: "Switzerland Tour",
    image: "https://picsum.photos/seed/swissalps/800/600",
    price: "$2,350",
    duration: "7 Days / 6 Nights",
    averageRating: 5.0,
    reviews: 245,
    category: "Nature",
    description: "Experience snow-capped mountains, alpine villages, and scenic railways.",
    includes: [
      "6 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Mountain excursion",
      "Scenic train ride",
      "Alpine village tour"
    ]
  },

  {
    id: 15,
    destination: "Rio de Janeiro",
    country: "Brazil Tour",
    image: "https://picsum.photos/seed/rio/800/600",
    price: "$1,420",
    duration: "5 Days / 4 Nights",
    averageRating: 4.8,
    reviews: 401,
    category: "Beach",
    description: "Enjoy famous beaches, samba culture, and stunning mountain views.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Christ the Redeemer tour",
      "Copacabana Beach visit",
      "City sightseeing tour"
    ]
  },

  {
    id: 16,
    destination: "Cairo",
    country: "Egypt Tour",
    image: "https://picsum.photos/seed/cairo/800/600",
    price: "$1,120",
    duration: "5 Days / 4 Nights",
    averageRating: 4.7,
    reviews: 296,
    category: "History",
    description: "Explore the pyramids, ancient temples, and fascinating museums.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Pyramids of Giza tour",
      "Egyptian Museum visit",
      "Professional tour guide"
    ]
  },

  {
    id: 17,
    destination: "Banff",
    country: "Canada Tour",
    image: "https://picsum.photos/seed/banff/800/600",
    price: "$1,580",
    duration: "6 Days / 5 Nights",
    averageRating: 4.9,
    reviews: 238,
    category: "Nature",
    description: "Discover turquoise lakes, majestic mountains, and outdoor adventures.",
    includes: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Lake Louise visit",
      "Mountain sightseeing",
      "Outdoor adventure activities"
    ]
  },

  {
    id: 18,
    destination: "Singapore",
    country: "Singapore Tour",
    image: "https://picsum.photos/seed/singapore/800/600",
    price: "$1,330",
    duration: "4 Days / 3 Nights",
    averageRating: 4.8,
    reviews: 442,
    category: "City",
    description: "Experience modern attractions, gardens, and world-class dining.",
    includes: [
      "3 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Gardens by the Bay visit",
      "Singapore city tour",
      "Marina Bay sightseeing"
    ]
  },

  {
    id: 19,
    destination: "Zanzibar",
    country: "Tanzania Tour",
    image: "https://picsum.photos/seed/zanzibar/800/600",
    price: "$1,460",
    duration: "6 Days / 5 Nights",
    averageRating: 4.9,
    reviews: 214,
    category: "Beach",
    description: "Relax on pristine beaches while exploring rich Swahili heritage.",
    includes: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Stone Town tour",
      "Spice farm visit",
      "Snorkeling excursion"
    ]
  },

  {
    id: 20,
    destination: "Reykjavík",
    country: "Iceland Tour",
    image: "https://picsum.photos/seed/iceland/800/600",
    price: "$2,090",
    duration: "5 Days / 4 Nights",
    averageRating: 4.9,
    reviews: 286,
    category: "Adventure",
    description: "Witness the Northern Lights and explore glaciers, waterfalls, and volcanoes.",
    includes: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Northern Lights tour",
      "Golden Circle tour",
      "Waterfall and glacier excursion"
    ]
  }
];



export const pricingPackages = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1697730182658-8f469cafff71?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tripType: "City Escape",
    title: "European Adventure",
    price: "$850",
    duration: "5 Days / 4 Nights",
    description:
      "Explore iconic European cities, experience local culture, and enjoy a carefully planned getaway.",
    features: [
      "Return flight included",
      "4-star hotel accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Guided city tours",
    ],
  },

  {
    id: 2,
    image: "https://images.unsplash.com/photo-1705672354908-a068661bc81d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tripType: "Beach Getaway",
    title: "Tropical Paradise",
    price: "$1200",
    duration: "7 Days / 6 Nights",
    description:
      "Relax on beautiful beaches and enjoy a peaceful tropical escape with everything planned for you.",
    features: [
      "Return flight included",
      "Luxury resort accommodation",
      "Daily breakfast & dinner",
      "Private airport transfers",
      "Island & water activities",
    ],
  },

  {
    id: 3,
    image: "https://images.unsplash.com/photo-1634664375986-f327f01154e5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tripType: "Luxury Escape",
    title: "Dubai Experience",
    price: "$1500",
    duration: "6 Days / 5 Nights",
    description:
      "Experience Dubai's luxury, entertainment, breathtaking architecture, and unforgettable adventures.",
    features: [
      "Return flight included",
      "5-star hotel accommodation",
      "Daily breakfast",
      "Desert safari experience",
      "Airport & hotel transfers",
    ],
  },
];

import dubai1 from "../assets/dubai1.avif";
import dubai2 from "../assets/dubai2.avif";
import Zanzibar from "../assets/Zanzibar.avif";
import Paris from "../assets/Paris.avif";
import CapeTown from "../assets/Capetown.avif";

export const holidayPackages = [
 {
  id: 16,
  title: "Dubai City Escape",
  destination: "Dubai, UAE",
  duration: "5 Days / 4 Nights",
  price: "$7800",
  image: dubai1,
  includes: [
    "Return flight",
    "4-night hotel accommodation",
    "Airport transfers",
    "Burj Khalifa visit",
    "Dubai city tour",
    "Daily breakfast",
  ],
  category: "City Break",
},

{
  id: 17,
  title: "Dubai Luxury Retreat",
  destination: "Dubai, UAE",
  duration: "7 Days / 6 Nights",
  price: "$1200",
  image: dubai2,
  includes: [
    "Return flight",
    "6-night luxury hotel",
    "Private airport transfers",
    "Burj Khalifa experience",
    "Luxury desert safari",
    "Daily breakfast",
  ],
  category: "Luxury",
},

{
  id: 18,
  title: "Dubai Adventure Getaway",
  destination: "Dubai, UAE",
  duration: "6 Days / 5 Nights",
  price: "$900",
  image: dubai1,
  includes: [
    "Return flight",
    "5-night hotel accommodation",
    "Airport transfers",
    "Desert safari",
    "Dune bashing experience",
    "Dubai city tour",
  ],
  category: "Adventure",
},

{
  id: 19,
  title: "Dubai Romantic Escape",
  destination: "Dubai, UAE",
  duration: "5 Days / 4 Nights",
  price: "$9800",
  image: dubai2,
  includes: [
    "Return flight",
    "4-night luxury hotel",
    "Airport transfers",
    "Romantic dinner experience",
    "Desert sunset experience",
    "Daily breakfast",
  ],
  category: "Romantic",
},

  {
  id: 8,
  title: "Zanzibar Beach Escape",
  destination: "Zanzibar, Tanzania",
  duration: "5 Days / 4 Nights",
  price: "$6500",
  image: Zanzibar,
  includes: [
    "Return flight",
    "4-night beach resort accommodation",
    "Airport transfers",
    "Beach relaxation experience",
    "Stone Town tour",
    "Daily breakfast",
  ],
  category: "Beach",
},

{
  id: 9,
  title: "Zanzibar Luxury Retreat",
  destination: "Zanzibar, Tanzania",
  duration: "7 Days / 6 Nights",
  price: "$980",
  image: Zanzibar,
  includes: [
    "Return flight",
    "6-night luxury resort",
    "Private airport transfers",
    "Private beach experience",
    "Spice farm tour",
    "Daily breakfast",
  ],
  category: "Luxury",
},

{
  id: 10,
  title: "Zanzibar Adventure Getaway",
  destination: "Zanzibar, Tanzania",
  duration: "6 Days / 5 Nights",
  price: "$7800",
  image: Zanzibar,
  includes: [
    "Return flight",
    "5-night hotel accommodation",
    "Airport transfers",
    "Snorkeling experience",
    "Dolphin tour",
    "Daily breakfast",
  ],
  category: "Adventure",
},

{
  id: 11,
  title: "Zanzibar Romantic Escape",
  destination: "Zanzibar, Tanzania",
  duration: "5 Days / 4 Nights",
  price: "$8500",
  image: Zanzibar,
  includes: [
    "Return flight",
    "4-night beachfront accommodation",
    "Airport transfers",
    "Sunset cruise",
    "Couples beach experience",
    "Daily breakfast",
  ],
  category: "Romantic",
},

 {
  id: 12,
  title: "Cape Town City Escape",
  destination: "Cape Town, South Africa",
  duration: "5 Days / 4 Nights",
  price: "$6200",
  image: CapeTown,
  includes: [
    "Return flight",
    "4-night hotel accommodation",
    "Airport transfers",
    "Table Mountain visit",
    "City sightseeing tour",
    "Daily breakfast",
  ],
  category: "City Break",
},

{
  id: 13,
  title: "Cape Town Luxury Retreat",
  destination: "Cape Town, South Africa",
  duration: "7 Days / 6 Nights",
  price: "$9500",
  image: CapeTown,
  includes: [
    "Return flight",
    "6-night luxury hotel",
    "Private airport transfers",
    "Cape Winelands tour",
    "Table Mountain experience",
    "Daily breakfast",
  ],
  category: "Luxury",
},

{
  id: 14,
  title: "Cape Town Adventure",
  destination: "Cape Town, South Africa",
  duration: "6 Days / 5 Nights",
  price: "$7600",
  image: CapeTown,
  includes: [
    "Return flight",
    "5-night hotel accommodation",
    "Airport transfers",
    "Cape Peninsula tour",
    "Shark cage diving experience",
    "Daily breakfast",
  ],
  category: "Adventure",
},

{
  id: 15,
  title: "Cape Town Romantic Getaway",
  destination: "Cape Town, South Africa",
  duration: "5 Days / 4 Nights",
  price: "$8200",
  image: CapeTown,
  includes: [
    "Return flight",
    "4-night hotel accommodation",
    "Airport transfers",
    "Sunset cruise",
    "Cape Winelands experience",
    "Daily breakfast",
  ],
  category: "Romantic",
},

  {
  id: 4,
  title: "Paris Romantic Escape",
  destination: "Paris, France",
  duration: "5 Days / 4 Nights",
  price: "$9500",
  image: Paris,
  category: "Romantic",
  includes: [
    "Return flight",
    "4-night hotel accommodation",
    "Airport transfers",
    "Eiffel Tower visit",
    "Seine River cruise",
    "Daily breakfast",
  ],
},

{
  id: 5,
  title: "Paris Luxury Experience",
  destination: "Paris, France",
  duration: "7 Days / 6 Nights",
  price: "$1350",
  image: Paris,
  category: "Luxury",
  includes: [
    "Return flight",
    "6-night luxury hotel",
    "Airport transfers",
    "Eiffel Tower visit",
    "Fine dining experience",
    "City sightseeing tour",
  ],
},

{
  id: 6,
  title: "Paris Culture & History",
  destination: "Paris, France",
  duration: "6 Days / 5 Nights",
  price: "$1100",
  image: Paris,
  category: "Culture",
  includes: [
    "Return flight",
    "5-night hotel accommodation",
    "Louvre Museum visit",
    "Notre-Dame visit",
    "City sightseeing tour",
    "Daily breakfast",
  ],
},

{
  id: 7,
  title: "Paris Weekend Getaway",
  destination: "Paris, France",
  duration: "4 Days / 3 Nights",
  price: "$7800",
  image: Paris,
  category: "Weekend",
  includes: [
    "Return flight",
    "3-night hotel accommodation",
    "Airport transfers",
    "Eiffel Tower visit",
    "City tour",
    "Daily breakfast",
  ],
},
];

export const teamMembers = [
  {
    id: 1,
    name: "Amelia Carter",
    role: "Travel Consultant",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    description:
      "Helping travelers discover the perfect destinations and build memorable journeys.",
    expertise: ["Travel Planning", "Luxury Trips"],
  },

  {
    id: 2,
    name: "Daniel Brooks",
    role: "Flight Specialist",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    description:
      "Finding convenient flight options, competitive fares, and flexible travel schedules.",
    expertise: ["Flights", "Travel Deals"],
  },

  {
    id: 3,
    name: "Sophia Williams",
    role: "Hotel & Accommodation Expert",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    description:
      "Matching travelers with comfortable stays that fit their destination and budget.",
    expertise: ["Hotels", "Accommodation"],
  },

  {
    id: 4,
    name: "Michael Anderson",
    role: "Tour Experience Specialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    description:
      "Creating exciting itineraries filled with unforgettable tours and experiences.",
    expertise: ["Tours", "Experiences"],
  },

  {
    id: 5,
    name: "Olivia Martinez",
    role: "Holiday Package Expert",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    description:
      "Designing carefully curated holiday packages for relaxing and adventurous getaways.",
    expertise: ["Holiday Packages", "Getaways"],
  },

  {
    id: 6,
    name: "James Wilson",
    role: "Adventure Travel Expert",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    description:
      "Helping adventurous travelers discover destinations beyond the ordinary.",
    expertise: ["Adventure", "Outdoor Travel"],
  },

  {
    id: 7,
    name: "Grace Thompson",
    role: "Africa Travel Specialist",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
    description:
      "Specializing in authentic African destinations, experiences, and cultural journeys.",
    expertise: ["Africa", "Cultural Travel"],
  },

  {
    id: 8,
    name: "Ethan Moore",
    role: "Customer Experience Manager",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    description:
      "Making sure every traveler receives the support they need before and during their journey.",
    expertise: ["Customer Care", "Travel Support"],
  },

  {
    id: 9,
    name: "Charlotte Davis",
    role: "Luxury Travel Advisor",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    description:
      "Creating sophisticated travel experiences for travelers seeking comfort and exclusivity.",
    expertise: ["Luxury Travel", "Premium Experiences"],
  },
];

export const hotelData = [
    {
        id: 1,
        name: "Grand Paris Hotel",
        location: "Paris, France",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
        rating: 4.8,
        reviews: 324,
        price: "$120",
        amenities: ["Free WiFi", "Breakfast", "Swimming Pool"],
        description:
            "A beautiful luxury hotel located in the heart of Paris, close to major attractions.",
    },

    {
        id: 2,
        name: "Santorini Blue Resort",
        location: "Santorini, Greece",
        image:
            "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop",
        rating: 4.9,
        reviews: 287,
        price: "$180",
        amenities: ["Free WiFi", "Sea View", "Breakfast"],
        description:
            "Enjoy breathtaking views of the Aegean Sea from this luxurious Santorini resort.",
    },

    {
        id: 3,
        name: "Dubai Luxury Suites",
        location: "Dubai, UAE",
        image:
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
        rating: 4.7,
        reviews: 456,
        price: "$150",
        amenities: ["Free WiFi", "Gym", "Swimming Pool"],
        description:
            "Modern luxury suites offering premium comfort in the heart of Dubai.",
    },

    {
        id: 4,
        name: "Bali Paradise Resort",
        location: "Bali, Indonesia",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
        rating: 4.8,
        reviews: 392,
        price: "$95",
        amenities: ["Free WiFi", "Spa", "Breakfast"],
        description:
            "Relax in a peaceful tropical resort surrounded by nature and beautiful scenery.",
    },

    {
        id: 5,
        name: "New York City Hotel",
        location: "New York, USA",
        image:
            "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1200&auto=format&fit=crop",
        rating: 4.6,
        reviews: 521,
        price: "$210",
        amenities: ["Free WiFi", "Gym", "Restaurant"],
        description:
            "A stylish city hotel located close to Manhattan's top attractions.",
    },

    {
        id: 6,
        name: "Maldives Ocean Resort",
        location: "Maldives",
        image:
            "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop",
        rating: 5.0,
        reviews: 198,
        price: "$280",
        amenities: ["Sea View", "Spa", "Breakfast"],
        description:
            "Experience an unforgettable island getaway in a private oceanfront resort.",
    },
];

export const flightData = [
    {
        id: 1,
        airline: "Emirates",
        flightNumber: "EK 783",

        from: "Lagos",
        fromCode: "LOS",

        to: "Dubai",
        toCode: "DXB",

        departureTime: "14:30",
        arrivalTime: "23:45",

        duration: "8h 15m",

        departureDate: "2026-08-20",
        returnDate: "2026-08-27",

        stops: "Direct",

        price: "$850",

        class: "Economy",

        baggage: "30kg",
    },

    {
        id: 2,
        airline: "Qatar Airways",
        flightNumber: "QR 1406",

        from: "Lagos",
        fromCode: "LOS",

        to: "Doha",
        toCode: "DOH",

        departureTime: "18:10",
        arrivalTime: "04:35",

        duration: "8h 25m",

        departureDate: "2026-08-20",
        returnDate: "2026-08-28",

        stops: "Direct",

        price: "$780",

        class: "Economy",

        baggage: "30kg",
    },

    {
        id: 3,
        airline: "British Airways",
        flightNumber: "BA 75",

        from: "Lagos",
        fromCode: "LOS",

        to: "London",
        toCode: "LHR",

        departureTime: "22:45",
        arrivalTime: "06:15",

        duration: "7h 30m",

        departureDate: "2026-08-22",
        returnDate: "2026-08-30",

        stops: "Direct",

        price: "$920",

        class: "Economy",

        baggage: "23kg",
    },

    {
        id: 4,
        airline: "Turkish Airlines",
        flightNumber: "TK 626",

        from: "Lagos",
        fromCode: "LOS",

        to: "Istanbul",
        toCode: "IST",

        departureTime: "21:00",
        arrivalTime: "06:30",

        duration: "8h 30m",

        departureDate: "2026-08-21",
        returnDate: "2026-08-29",

        stops: "Direct",

        price: "$720",

        class: "Economy",

        baggage: "30kg",
    },

    {
        id: 5,
        airline: "Ethiopian Airlines",
        flightNumber: "ET 901",

        from: "Lagos",
        fromCode: "LOS",

        to: "Addis Ababa",
        toCode: "ADD",

        departureTime: "13:20",
        arrivalTime: "20:10",

        duration: "5h 50m",

        departureDate: "2026-08-23",
        returnDate: "2026-08-30",

        stops: "Direct",

        price: "$560",

        class: "Economy",

        baggage: "23kg",
    },

    {
        id: 6,
        airline: "Air France",
        flightNumber: "AF 149",

        from: "Abuja",
        fromCode: "ABV",

        to: "Paris",
        toCode: "CDG",

        departureTime: "20:15",
        arrivalTime: "06:40",

        duration: "10h 25m",

        departureDate: "2026-08-24",
        returnDate: "2026-09-01",

        stops: "1 Stop",

        price: "$980",

        class: "Economy",

        baggage: "23kg",
    },
];
