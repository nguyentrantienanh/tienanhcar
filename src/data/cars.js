// Dynamically import all images from the "img" folder
const importAll = (r) => {
  const images = {};
  r.keys().forEach((key) => {
    images[key.replace('./', '')] = r(key);
  });
  return images;
};

// Import all images dynamically
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

const cars = [

  {
    id: 1,
    name: 'VinFast VF e34',
    type: 'SUV hạng C',
    price: 950000, // Price (VND) per day
    seats: 5,
    description: 'Xe SUV điện phân khúc hạng C với công nghệ tiên tiến, phù hợp di chuyển trong đô thị và đường trường.',
    image: images['VFe34.jpg'], // Dynamically loaded image
    brand: 1, // 1 for cars
    year: 2023, // Year of production
    features: ['Tự động lái cấp độ 2', 'Cảnh báo điểm mù', 'Hệ thống điều hòa tự động', 'Hệ thống âm thanh Bose'], // Modern features
    isBest: false // Set this car as the best
  },
  {
    id: 2,
    name: 'VinFast VF 8',
    type: 'SUV hạng D',
    price: 1200000, // Price (VND) per day
    seats: 5,
    description: 'Xe SUV điện hạng D với khả năng tự lái và nội thất cao cấp.',
    image: images['VF8.jpg'],
    brand: 1, // 1 for cars
    year: 2024, // Year of production
    features: ['Hệ thống tự lái cấp độ 3', 'Camera 360', 'Ghế massage', 'Cửa sổ trời toàn cảnh'], // Modern features
    isBest: false
  },
  {
    id: 3,
    name: 'VinFast VF 9',
    type: 'SUV hạng E',
    price: 1500000, // Price (VND) per day
    seats: 7,
    description: 'Xe SUV điện phân khúc hạng E cao cấp, thiết kế sang trọng và mạnh mẽ.',
    image: images['VF9.jpg'],
    brand: 1, // 1 for cars
    year: 2024, // Year of production
    features: ['Tự lái cấp độ 4', 'Hệ thống thông tin giải trí màn hình lớn', 'Cảnh báo va chạm', 'Chế độ lái thể thao'], // Modern features
    isBest: false
  },
  {
    id: 4,
    name: 'VinFast VF 5',
    type: 'SUV hạng A',
    price: 800000, // Price (VND) per day
    seats: 5,
    description: 'Xe SUV điện hạng A, tiết kiệm năng lượng và phù hợp cho di chuyển trong thành phố.',
    image: images['VF5.jpg'],
    brand: 1, // 1 for cars
    year: 2023, // Year of production
    features: ['Hệ thống điều hòa tự động', 'Cảnh báo điểm mù', 'Khởi động bằng nút bấm', 'Chế độ lái tiết kiệm'], // Modern features
    isBest: false
  },
  {
    id: 5,
    name: 'VinFast VF 6',
    type: 'SUV hạng B',
    price: 850000, // Price (VND) per day
    seats: 5,
    description: 'Xe SUV điện hạng B, với thiết kế thời trang và công nghệ tiên tiến.',
    image: images['VF6.jpg'],
    brand: 1, // 1 for cars
    year: 2024, // Year of production
    features: ['Tự lái cấp độ 2', 'Chế độ lái thể thao', 'Màn hình giải trí lớn', 'Ghế da cao cấp'], // Modern features
    isBest: false
  },
  {
    id: 6,
    name: 'VinFast VF 7',
    type: 'SUV hạng C',
    price: 900000, // Price (VND) per day
    seats: 5,
    description: 'Xe SUV điện hạng C với hiệu suất mạnh mẽ và thiết kế hiện đại.',
    image: images['VF7.jpg'],
    brand: 1, // 1 for cars
    year: 2024, // Year of production
    features: ['Tự động lái cấp độ 2', 'Hệ thống âm thanh Bose', 'Màn hình thông tin lớn', 'Cảnh báo va chạm'], // Modern features
    isBest: true
  },
  {
    id: 7,
    name: 'VinFast VF Wildi',
    type: 'SUV hạng D',
    price: 1000000, // Price (VND) per day
    seats: 5,
    description: 'Xe SUV mạnh mẽ với công nghệ hiện đại, đáp ứng nhu cầu di chuyển trên mọi địa hình.',
    image: images['VFWildi.jpg'],
    brand: 1,
    year: 2024,
    features: ['Hệ thống dẫn động 4 bánh', 'Camera 360', 'Ghế chỉnh điện', 'Màn hình HUD'],
    isBest: false
  },
  {
    id: 8,
    name: 'VinFast VF 3',
    type: 'SUV hạng A',
    price: 720000, // Price (VND) per day
    seats: 5,
    description: 'Xe SUV điện hạng A nhỏ gọn, tiết kiệm và phù hợp với nhu cầu di chuyển trong thành phố.',
    image: images['VF3.jpg'],
    brand: 1, // 1 for cars
    year: 2024, // Year of production
    features: ['Điều hòa tự động', 'Cảnh báo va chạm', 'Chế độ lái tiết kiệm'], // Modern features
    isBest: true
  },

  {
    id: 9,
    name: 'VinFast Ludo',
    type: 'Motorbike',
    price: 50000, // Price (VND)
    seats: 2,
    description: 'Xe máy điện phân khúc trung cấp, phù hợp di chuyển trong đô thị với thiết kế nhỏ gọn.',
    image: images['VinFastLudo.jpg'], 
    brand: 2,
    year: 2023,
    features: ['Nhẹ, dễ điều khiển', 'Tiết kiệm năng lượng', 'Khóa thông minh', 'Động cơ chống nước'],
    isBest: false,
  },
  {
    id: 10,
    name: 'VinFast Impes',
    type: 'Motorbike',
    price: 50000, // Price (VND)
    seats: 2,
    description: 'Xe máy điện phân khúc trung cấp với hiệu suất mạnh mẽ, thích hợp cho mọi địa hình.',
    image: images['VinFastImpes.jpg'],
    brand: 2,
    year: 2023,
    features: ['Thiết kế thể thao', 'Khả năng tăng tốc nhanh', 'Kết nối smartphone', 'Khóa thông minh'],
    isBest: false,
  },
  {
    id: 11,
    name: 'VinFast Tempest',
    type: 'Motorbike',
    price: 50000, // Price (VND)
    seats: 2,
    description: 'Xe máy điện phân khúc trung cấp với trang bị ắc quy và hệ thống phanh an toàn.',
    image: images['VinFastTempest.jpg'],
    brand: 2,
    year: 2023,
    features: ['Phanh ABS', 'Ắc quy hiệu suất cao', 'Hệ thống đèn LED', 'Chế độ tiết kiệm năng lượng'],
    isBest: false,
  },
  {
    id: 12,
    name: 'VinFast Evo 200',
    type: 'Motorbike',
    price: 50000, // Price (VND)
    seats: 2,
    description: 'Xe máy điện phân khúc trung cấp với khả năng đi xa đến 200 km mỗi lần sạc.',
    image: images['VinFastEvo200.jpg'],
    brand: 2,
    year: 2023,
    features: ['Khả năng đi xa 200 km', 'Khóa thông minh', 'Thiết kế hiện đại', 'Động cơ chống nước'],
    isBest: false,
  },
  {
    id: 13,
    name: 'VinFast Feliz',
    type: 'Motorbike',
    price: 50000, // Price (VND)
    seats: 2,
    description: 'Xe máy điện phân khúc trung cấp với thiết kế thời trang và trang bị hiện đại.',
    image: images['VinFastFeliz.jpg'],
    brand: 2,
    year: 2023,
    features: ['Thiết kế thời trang', 'Hệ thống điều khiển thông minh', 'Phanh ABS', 'Đèn LED hiện đại'],
    isBest: false,
  },
  {
    id: 14,
    name: 'VinFast Feliz S',
    type: 'Motorbike',
    price: 80000, // Price (VND)
    seats: 2,
    description: 'Phiên bản cao cấp của Feliz với hiệu suất động cơ và pin vượt trội.',
    image: images['VinFastFelizS.jpg'],
    brand: 2,
    year: 2023,
    features: ['Động cơ mạnh mẽ', 'Pin dung lượng cao', 'Khóa thông minh', 'Thiết kế hiện đại'],
    isBest: false,
  },
  {
    id: 15,
    name: 'VinFast Klara A2',
    type: 'Motorbike',
    price: 80000, // Price (VND)
    seats: 2,
    description: 'Xe máy điện phân khúc trung cấp với thiết kế cổ điển và tiện nghi.',
    image: images['VinFastKlaraA2.png'],
    brand: 2,
    year: 2023,
    features: ['Thiết kế cổ điển', 'Pin hiệu suất cao', 'Hệ thống phanh an toàn', 'Đèn LED hiện đại'],
    isBest: false,
  },
  {
    id: 16,
    name: 'VinFast Klara S 2022',
    type: 'Motorbike',
    price: 80000, // Price (VND)
    seats: 2,
    description: 'Xe máy điện cao cấp với công nghệ hiện đại và nội thất sang trọng.',
    image: images['VinFastKlaraS2022.jpg'],
    brand: 2,
    year: 2022,
    features: ['Hệ thống điều khiển thông minh', 'Chế độ tiết kiệm năng lượng', 'Phanh ABS', 'Thiết kế hiện đại'],
    isBest: false,
  },
  {
    id: 17,
    name: 'VinFast Theon',
    type: 'Motorbike',
    price: 100000, // Price (VND)
    seats: 2,
    description: 'Xe máy điện cao cấp với khả năng vận hành vượt trội và nội thất hiện đại.',
    image: images['VinFastVento.png'],
    brand: 2,
    year: 2023,
    features: ['Hệ thống điều khiển tiên tiến', 'Tốc độ tối đa 100 km/h', 'Hệ thống đèn LED', 'Khóa thông minh'],
    isBest: true,
  },
  {
    id: 18,
    name: 'VinFast Theon S',
    type: 'Motorbike',
    price: 100000, // Price (VND)
    seats: 2,
    description: 'Phiên bản Theon S với công nghệ và hiệu suất vượt trội.',
    image: images['VinFastTheonS.png'],
    brand: 2,
    year: 2023,
    features: ['Hệ thống phanh ABS', 'Động cơ mạnh mẽ', 'Khóa thông minh', 'Công nghệ chống nước IP67'],
    isBest: true,
  },
];

export default cars;
