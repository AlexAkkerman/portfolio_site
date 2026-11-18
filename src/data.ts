export type VideoCategory = "action" | "documentary" | "youtube";

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  // YouTube: use "youtube" + videoId
  // Vimeo: use "vimeo" + videoId
  provider: "youtube" | "vimeo";
  videoId: string;
  // Optional custom thumbnail (if empty — uses provider default)
  thumbnail?: string;
  // Просмотры (для вкладки YouTube). Обновляй вручную или через API.
  views?: number;
};

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  type: "film" | "digital";
};

// ——— Замени на свои работы ———
export const videos: VideoItem[] = [
  // Action
  {
    id: "a1",
    title: "Action Reel 2025",
    description: "Динамичный экшен / Action sequence",
    category: "action",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "a2",
    title: "Chase Sequence",
    description: "Погоня / Chase",
    category: "action",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ",
  },
  // Documentary
  {
    id: "d1",
    title: "City Stories",
    description: "Документальный этюд",
    category: "documentary",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "d2",
    title: "Portrait of a City",
    description: "Городской портрет",
    category: "documentary",
    provider: "vimeo",
    videoId: "148751763",
  },
  // YouTube
  {
    id: "y1",
    title: "How I Edit Action",
    description: "Туториал по монтажу",
    category: "youtube",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ",
    views: 128400,
  },
  {
    id: "y2",
    title: "My Gear Setup 2025",
    description: "Обзор оборудования",
    category: "youtube",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ",
    views: 45200,
  },
  {
    id: "y3",
    title: "Color Grading Tips",
    description: "Советы по цветокоррекции",
    category: "youtube",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ",
    views: 89100,
  },
];

// Используй реальные фото или Unsplash для демо
export const photos: PhotoItem[] = [
  // Film
  {
    id: "f1",
    src: "/photo/film/1.jpg",
    alt: "Film photo 1",
    type: "film",
  },
  {
    id: "f2",
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    alt: "Film photo 2",
    type: "film",
  },
  {
    id: "f3",
    src: "https://images.unsplash.com/photo-1452587922970-c6e4d29e7e5e?w=800&q=80",
    alt: "Film photo 3",
    type: "film",
  },
  {
    id: "f4",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    alt: "Film photo 4",
    type: "film",
  },
  // Digital
  {
    id: "d1",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    alt: "Digital photo 1",
    type: "digital",
  },
  {
    id: "d2",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Digital photo 2",
    type: "digital",
  },
  {
    id: "d3",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Digital photo 3",
    type: "digital",
  },
  {
    id: "d4",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    alt: "Digital photo 4",
    type: "digital",
  },
  {
    id: "d5",
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    alt: "Digital photo 5",
    type: "digital",
  },
  {
    id: "d6",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    alt: "Digital photo 6",
    type: "digital",
  },
];
