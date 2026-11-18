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

// Фото из public/photo/...
// Положи файлы так:
//   public/photo/film/1.jpg
//   public/photo/digital/1.jpg
// и т.д.
export const photos: PhotoItem[] = [
  // Film
  {
    id: "f1",
    src: "/photo/film/карандаш.jpg",
    alt: "Film photo 1",
    type: "film",
  },
  // Добавляй новые так:
  // {
  //   id: "f2",
  //   src: "/photo/film/2.jpg",
  //   alt: "Film photo 2",
  //   type: "film",
  // },

  // Digital
  // {
  //   id: "d1",
  //   src: "/photo/digital/1.jpg",
  //   alt: "Digital photo 1",
  //   type: "digital",
  // },
];
