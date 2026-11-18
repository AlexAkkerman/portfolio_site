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
    src: "/photo/film/текстура дерева во мху.jpg",
    alt: "Film photo 1",
    type: "film",
  },
 {
    id: "f2",
    src: "/photo/film/Сергеевка.png",
    alt: "Film photo 2",
    type: "film",
  },
 {
    id: "f3",
    src: "/photo/film/треугольник в переходе с тенью.jpg",
    alt: "Film photo 3",
    type: "film",
  },
   {
    id: "f4",
    src: "/photo/film/фейерверк.jpg",
    alt: "Film photo 4",
    type: "film",
  },
   {
    id: "f5",
    src: "/photo/film/карандаш.jpg",
    alt: "Film photo 5",
    type: "film",
  },
 {
    id: "f6",
    src: "/photo/film/небесные шаги.jpg",
    alt: "Film photo 6",
    type: "film",
  },
   {
    id: "f7",
    src: "/photo/film/медуза.jpg",
    alt: "Film photo 7",
    type: "film",
  },
   {
    id: "f8",
    src: "/photo/film/там рыбы плачут , а у спрутов в головах дыра.jpg",
    alt: "Film photo 8",
    type: "film",
  },
 {
    id: "f9",
    src: "/photo/film/подгорцы.jpg",
    alt: "Film photo 9",
    type: "film",
  },
   {
    id: "f10",
    src: "/photo/film/рожь.jpg",
    alt: "Film photo 10",
    type: "film",
  },
   {
    id: "f11",
    src: "/photo/film/Одесса поездная.jpg",
    alt: "Film photo 11",
    type: "film",
  },
 {
    id: "f12",
    src: "/photo/film/вся краска иссякла.jpg",
    alt: "Film photo 12",
    type: "film",
  },
   {
    id: "f13",
    src: "/photo/film/нападение.png",
    alt: "Film photo 13",
    type: "film",
  },
   {
    id: "f14",
    src: "/photo/film/без имени.jpg",
    alt: "Film photo 14",
    type: "film",
  },
 {
    id: "f15",
    src: "/photo/film/не пройти терновник загородил путь.jpg",
    alt: "Film photo 15",
    type: "film",
  },
   {
    id: "f16",
    src: "/photo/film/Между деревьев Юна.jpg",
    alt: "Film photo 16",
    type: "film",
  },
   {
    id: "f17",
    src: "/photo/film/бегущие.jpg",
    alt: "Film photo 17",
    type: "film",
  },
 {
    id: "f18",
    src: "/photo/film/теля.png",
    alt: "Film photo 18",
    type: "film",
  },
   
  // Digital
  // {
  //   id: "d1",
  //   src: "/photo/digital/1.jpg",
  //   alt: "Digital photo 1",
  //   type: "digital",
  // },
];
