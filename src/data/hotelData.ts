import exteriorImg from '../assets/images/tulm_hotel_exterior_1791185237845.jpg';
import lobbyImg from '../assets/images/tulm_hotel_lobby_1791185256937.jpg';
import standardRoomImg from '../assets/images/tulm_standard_room_1791185273257.jpg';
import deluxeRoomImg from '../assets/images/tulm_deluxe_room_1791185286959.jpg';
import diningImg from '../assets/images/tulm_hotel_dining_1791185299155.jpg';
import bathroomImg from '../assets/images/tulm_hotel_bathroom_1791185314800.jpg';

export interface Room {
  id: string;
  name: string;
  nameTr: string;
  description: string;
  descriptionTr: string;
  longDescription: string;
  capacity: string;
  bed: string;
  bedTr: string;
  size: string;
  price: string;
  priceNum: number;
  image: string;
  features: string[];
  featuresTr: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'hotel' | 'lobby' | 'dining' | 'facilities';
  image: string;
  caption: string;
}

export const HOTEL_INFO = {
  name: 'TÜLM OTEL HOTEL',
  phone: '+90 266 714 44 25',
  phoneRaw: '+902667144425',
  whatsapp: 'https://wa.me/902667144425',
  address: 'Haydar Çavuş, Saatçiler Cd NO:16, 10200 Bandırma/Balıkesir, Türkiye',
  mapsUrl: 'https://maps.google.com/?q=Haydar+%C3%87avu%C5%9F,+Saat%C3%A7iler+Cd+NO:16,+10200+Band%C3%B1rma/Bal%C3%B1kesir,+T%C3%BCrkiye',
  city: 'Bandırma, Balıkesir, Türkiye',
  email: 'info@tulmotel.com',
  checkIn: '14:00',
  checkOut: '12:00',
  receptionHours: '24/7 Always Available',
};

// Image assets mapping with guaranteed bundled local images
export const IMAGES = {
  exterior: exteriorImg,
  lobby: lobbyImg,
  standardRoom: standardRoomImg,
  deluxeRoom: deluxeRoomImg,
  dining: diningImg,
  bathroom: bathroomImg,
  // High quality verified hotel photography for different room setups and amenities
  doubleBed: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200',
  twinBed: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
  receptionDesk: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200',
  breakfastSpread: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=1200',
  loungeArea: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200',
  bandirmaCoast: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200',
  luxuryShower: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200'
};

export const ROOMS: Room[] = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    nameTr: 'Standart Oda',
    description: 'A cozy, elegant space perfect for solo travelers or couples seeking comfort in Bandırma.',
    descriptionTr: 'Bandırma’da konfor arayan tek kişilik veya çift kişilik misafirler için şık ve huzurlu bir alan.',
    longDescription: 'Designed with attention to detail, our Standard Room features high-quality orthopaedic mattress, quiet air conditioning, high-speed Wi-Fi, HD Smart TV, and a private modern bathroom. The ideal sanctuary after a day exploring Balıkesir or business meetings in Bandırma.',
    capacity: '1 - 2 Guests',
    bed: '1 Queen Bed or 1 Double Bed',
    bedTr: '1 Çift Kişilik Yatak',
    size: '22 m²',
    price: 'Contact for Best Rate',
    priceNum: 1800,
    image: IMAGES.standardRoom,
    features: [
      'High-Speed Wi-Fi',
      'Air Conditioning & Heating',
      'Flat-Screen Smart TV',
      'Private Bathroom & Rainfall Shower',
      'Hair Dryer & Luxury Toiletries',
      'Soundproof Windows',
      'Electric Kettle & Tea/Coffee Tray'
    ],
    featuresTr: [
      'Yüksek Hızlı Wi-Fi',
      'Klima ve Isıtma Sistemi',
      'Düz Ekran Smart TV',
      'Özel Banyo ve Yağmur Duş',
      'Saç Kurutma Makinesi & Buklet Ürünleri',
      'Ses Yalıtımlı Pencereler',
      'Su Isıtıcı & Çay/Kahve İkramı'
    ]
  },
  {
    id: 'double-room',
    name: 'Double Room',
    nameTr: 'Çift Kişilik Oda',
    description: 'Spacious double accommodation offering luxury bedding, warm ambient lighting, and city views.',
    descriptionTr: 'Geniş kullanım alanı, lüks yatak takımları ve sıcak aydınlatması ile konforlu çift kişilik oda.',
    longDescription: 'Our Double Room offers expanded living space with a large double bed, plush seating corner, work desk, and ambient purple lighting highlights. Enjoy peaceful sleep with blackout curtains and premium acoustic insulation.',
    capacity: '2 Guests',
    bed: '1 Large King/Double Bed',
    bedTr: '1 Büyük Çift Kişilik Yatak',
    size: '28 m²',
    price: 'Contact for Best Rate',
    priceNum: 2200,
    image: IMAGES.doubleBed,
    features: [
      'Spacious Layout',
      'King Size Comfort Mattress',
      'Work Desk & Ergonomic Chair',
      'Mini Refrigerator',
      'Daily Housekeeping Service',
      'In-Room Safe Box',
      'Fresh Linen & Fluffy Towels'
    ],
    featuresTr: [
      'Geniş Ve Ferah Düzen',
      'King Size Ortopedik Yatak',
      'Çalışma Masası ve Sandalye',
      'Mini Buzdolabı',
      'Günlük Oda Temizliği',
      'Oda İçi Emanet Kasası',
      'Taze Nevresim ve Havlular'
    ]
  },
  {
    id: 'twin-room',
    name: 'Twin Room',
    nameTr: 'İki Yataklı Oda',
    description: 'Features two comfortable separate single beds, ideal for colleagues, friends, or family members.',
    descriptionTr: 'İki ayrı tek kişilik yatak ile iş seyahatleri veya arkadaşlar için ideal konaklama imkanı.',
    longDescription: 'The Twin Room provides flexible accommodations with two ergonomic single beds, individually controlled reading lamps, ample wardrobe storage, and high-speed internet access. Perfect for corporate stays and travel partners.',
    capacity: '2 Guests',
    bed: '2 Separate Single Beds',
    bedTr: '2 Ayrı Tek Kişilik Yatak',
    size: '26 m²',
    price: 'Contact for Best Rate',
    priceNum: 2100,
    image: IMAGES.twinBed,
    features: [
      'Two Separate Beds',
      'Individual Reading Lights',
      'High-Speed Wi-Fi',
      'Spacious Wardrobe',
      'Private Marble Bathroom',
      '24/7 Room Service Support',
      'Complimentary Bottled Water'
    ],
    featuresTr: [
      'İki Ayrı Tek Kişilik Yatak',
      'Kişisel Okuma Lambaları',
      'Yüksek Hızlı İnternet',
      'Geniş Gardırop',
      'Mermer Detaylı Özel Banyo',
      '24/7 Danışma ve Hizmet',
      'Ücretsiz Şişe Su İkramı'
    ]
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    nameTr: 'Deluxe Suit Oda',
    description: 'Our top-tier premium suite with extra square footage, plush lounge seating, and refined finishes.',
    descriptionTr: 'Ekstra geniş yaşam alanı, özel oturma köşesi ve lüks detaylarıyla en üst segment odamız.',
    longDescription: 'Indulge in ultimate relaxation in the TÜLM OTEL Deluxe Room. Featuring a grand plush bed, private lounge area with velvet armchair, premium bathroom fixtures, complimentary welcome tea set, and priority service.',
    capacity: '2 - 3 Guests',
    bed: '1 Extra Large King Bed + Sofa Bed',
    bedTr: '1 Geniş King Yatak + Ek Yatak İmkanı',
    size: '36 m²',
    price: 'Contact for Best Rate',
    priceNum: 2900,
    image: IMAGES.deluxeRoom,
    features: [
      'Extra Large Floor Area',
      'Lounge Sitting Corner',
      'Premium City View',
      'Luxury Bathroom Amenities',
      'Large LED Smart TV',
      'Welcome Drinks & Tea Set',
      'Bathrobes & Plush Slippers'
    ],
    featuresTr: [
      'Geniş Yaşam Alanı',
      'Özel Oturma Grubu',
      'Panoramik Şehir Manzarası',
      'Lüks Banyo Seti',
      'Geniş LED Smart TV',
      'Hoşgeldiniz İkram Seti',
      'Bornoz ve Yumuşak Terlikler'
    ]
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Hotel Exterior Evening View',
    category: 'hotel',
    image: IMAGES.exterior,
    caption: 'TÜLM OTEL HOTEL glowing facade in the center of Bandırma.'
  },
  {
    id: 'g-2',
    title: 'Luxury Reception Lobby',
    category: 'lobby',
    image: IMAGES.lobby,
    caption: 'Warm marble lobby welcoming guests 24 hours a day.'
  },
  {
    id: 'g-3',
    title: 'Standard Room Comfort',
    category: 'rooms',
    image: IMAGES.standardRoom,
    caption: 'Meticulously prepared standard room with premium linens.'
  },
  {
    id: 'g-4',
    title: 'Deluxe Suite Master Bedroom',
    category: 'rooms',
    image: IMAGES.deluxeRoom,
    caption: 'Spacious deluxe room with velvet ambient touches.'
  },
  {
    id: 'g-5',
    title: 'Hotel Breakfast & Dining Hall',
    category: 'dining',
    image: IMAGES.dining,
    caption: 'Fresh Turkish breakfast spread served every morning.'
  },
  {
    id: 'g-6',
    title: 'Modern Rain Shower Bathroom',
    category: 'facilities',
    image: IMAGES.bathroom,
    caption: 'Sparkling clean bathroom with backlit LED mirror.'
  },
  {
    id: 'g-7',
    title: 'Double Room Interior',
    category: 'rooms',
    image: IMAGES.doubleBed,
    caption: 'Double room configured with king bed and quiet atmosphere.'
  },
  {
    id: 'g-8',
    title: 'Twin Room Setup',
    category: 'rooms',
    image: IMAGES.twinBed,
    caption: 'Two separate comfortable single beds.'
  },
  {
    id: 'g-9',
    title: 'Front Desk Hospitality',
    category: 'lobby',
    image: IMAGES.receptionDesk,
    caption: '24/7 helpful hotel reception team ready to assist.'
  },
  {
    id: 'g-10',
    title: 'Fresh Morning Breakfast Buffet',
    category: 'dining',
    image: IMAGES.breakfastSpread,
    caption: 'Traditional Turkish cheeses, olives, honey and fresh bread.'
  },
  {
    id: 'g-11',
    title: 'Lobby Lounge Seating',
    category: 'lobby',
    image: IMAGES.loungeArea,
    caption: 'Comfortable seating area for guests and visitors.'
  },
  {
    id: 'g-12',
    title: 'Bandırma Coastal Atmosphere',
    category: 'hotel',
    image: IMAGES.bandirmaCoast,
    caption: 'Located just minutes away from the Bandırma waterfront.'
  },
  {
    id: 'g-13',
    title: 'Bathroom Luxury Detail',
    category: 'facilities',
    image: IMAGES.luxuryShower,
    caption: 'High quality fixtures and spotless cleanliness.'
  }
];

export interface Amenity {
  id: string;
  title: string;
  titleTr: string;
  description: string;
  descriptionTr: string;
  icon: string;
  image: string;
}

export const AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    title: 'Free High-Speed Wi-Fi',
    titleTr: 'Ücretsiz Yüksek Hızlı Wi-Fi',
    description: 'Seamless optical fiber internet throughout all rooms and public areas.',
    descriptionTr: 'Tüm odalarda ve ortak alanlarda kesintisiz hızlı fiber internet.',
    icon: 'Wifi',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rooms',
    title: 'Comfortable Rooms',
    titleTr: 'Konforlu Odalar',
    description: 'Orthopaedic mattresses, soundproofing, air conditioning and Smart TVs.',
    descriptionTr: 'Ortopedik yataklar, ses yalıtımı, klima ve Smart TV donanımı.',
    icon: 'BedDouble',
    image: standardRoomImg
  },
  {
    id: 'reception',
    title: '24/7 Reception',
    titleTr: '24/7 Resepsiyon',
    description: 'Our attentive front desk staff is available around the clock to serve you.',
    descriptionTr: 'Günün her saati hizmetinizde olan güler yüzlü resepsiyon ekibi.',
    icon: 'Clock',
    image: lobbyImg
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping',
    titleTr: 'Günlük Oda Temizliği',
    description: 'Pristine hygiene standards with daily towel and linen refresh.',
    descriptionTr: 'Her gün yenilenen taze havlu, nevresim ve yüksek hijyen standartları.',
    icon: 'Sparkles',
    image: bathroomImg
  },
  {
    id: 'breakfast',
    title: 'Turkish Breakfast',
    titleTr: 'Zengin Türk Kahvaltısı',
    description: 'Delicious morning spread featuring fresh local cheeses, olives, and tea.',
    descriptionTr: 'Taze yerel peynirler, zeytinler ve demli çay eşliğinde leziz kahvaltı.',
    icon: 'Coffee',
    image: diningImg
  },
  {
    id: 'location',
    title: 'Convenient Location',
    titleTr: 'Merkezi Konum',
    description: 'Situated in Haydar Çavuş Saatçiler Street, steps from ferry ports & shops.',
    descriptionTr: 'Bandırma merkezde, feribot iskelesi ve çarşıya yürüme mesafesinde.',
    icon: 'MapPin',
    image: exteriorImg
  }
];
