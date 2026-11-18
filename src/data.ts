export type VideoItem = {
  id: string;
  title: string;
  description: string;
  // YouTube: use "youtube" + videoId
  // Vimeo: use "vimeo" + videoId
  provider: "youtube" | "vimeo";
  videoId: string;
  // Optional custom thumbnail (if empty — uses provider default via embed)
  thumbnail?: string;
};

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  type: "film" | "digital";
};

// ——— Замени на свои работы ———
export const videos: VideoItem[] = [
  {
    id: "1",
    title: "Commercial — Brand Film",
    description: "Рекламный ролик / Advertising film",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ", // placeholder — замени на свой ID
  },
  {
    id: "2",
    title: "Music Video",
    description: "Клип / Music video",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Motion Design Reel",
    description: "Шоурил motion-работ",
    provider: "vimeo",
    videoId: "148751763", // пример
  },
  {
    id: "4",
    title: "Short Film",
    description: "Короткометражка",
    provider: "youtube",
    videoId: "dQw4w9WgXcQ",
  },
];

// Используй реальные фото или Unsplash для демо
export const photos: PhotoItem[] = [
  // Film
  {
    id: "f1",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
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
