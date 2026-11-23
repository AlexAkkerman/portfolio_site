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
// Файлы расположены так:
//   public/photo/film/1.jpg (или оригинальное имя)
//   public/photo/digital/1.jpg
// Для кириллических названий используйте HTML-атрибут для отображения оригинального названия
export const photos: PhotoItem[] = [
  // Film
  {
    id: "f1",
    src: "/photo/film/абстракция.jpg",
    alt: "абстракция",
    type: "film",
  },
  { id: "f2", src: "/photo/film/бабочка.jpg", alt: "бабочка", type: "film" },
  { id: "f3", src: "/photo/film/бегущие.jpg", alt: "бегущие", type: "film" },
  { id: "f4", src: "/photo/film/без имени.jpg", alt: "без имени", type: "film" },
  { id: "f5", src: "/photo/film/брус.jpg", alt: "брус", type: "film" },
  { id: "f6", src: "/photo/film/брызги.jpg", alt: "брызги", type: "film" },
  { id: "f7", src: "/photo/film/в закатных лучях отразись на стену безымянного дома.jpg", alt: "в закатных лучях отразись на стену безымянного дома", type: "film" },
  { id: "f8", src: "/photo/film/вода об камни как стекло об асфальт.jpg", alt: "вода об камни как стекло об асфальт", type: "film" },
  { id: "f9", src: "/photo/film/волнорез.jpg", alt: "волнорез", type: "film" },
  { id: "f10", src: "/photo/film/вся краска иссякла.jpg", alt: "вся краска иссякла", type: "film" },
  { id: "f11", src: "/photo/film/дерево украсили сосульками.jpg", alt: "дерево украсили сосульками", type: "film" },
  { id: "f12", src: "/photo/film/и на зеленый никто не идет.jpg", alt: "и на зеленый никто не идет", type: "film" },
  { id: "f13", src: "/photo/film/игор.jpg", alt: "игор", type: "film" },
  { id: "f14", src: "/photo/film/карандаш.jpg", alt: "карандаш", type: "film" },
  { id: "f15", src: "/photo/film/колодец свежего воздуха.jpg", alt: "колодец свежего воздуха", type: "film" },
  { id: "f16", src: "/photo/film/корни идут под землю.jpg", alt: "корни идут под землю", type: "film" },
  { id: "f17", src: "/photo/film/красивое желейное существо аморфо де креатуре.jpg", alt: "красивое желейное существо аморфо де креатуре", type: "film" },
  { id: "f18", src: "/photo/film/любимое место в парке.jpg", alt: "любимое место в парке", type: "film" },
  { id: "f19", src: "/photo/film/медуза.jpg", alt: "медуза", type: "film" },
  { id: "f20", src: "/photo/film/мох пересвет.jpg", alt: "мох пересвет", type: "film" },
  { id: "f21", src: "/photo/film/настороженность.jpg", alt: "настороженность", type: "film" },
  { id: "f22", src: "/photo/film/небесные шаги.jpg", alt: "небесные шаги", type: "film" },
  { id: "f23", src: "/photo/film/огненные листья.jpg", alt: "огненные листья", type: "film" },
  { id: "f24", src: "/photo/film/огненные скрепы.jpg", alt: "огненные скрепы", type: "film" },
  { id: "f25", src: "/photo/film/окно в крепости.jpg", alt: "окно в крепости", type: "film" },
  { id: "f26", src: "/photo/film/осенняя соната.jpg", alt: "осенняя соната", type: "film" },
  { id: "f27", src: "/photo/film/отражение в воде.jpg", alt: "отражение в воде", type: "film" },
  { id: "f28", src: "/photo/film/паттерн.jpg", alt: "паттерн", type: "film" },
  { id: "f29", src: "/photo/film/плавно переходит с зеденого в красный.jpg", alt: "плавно переходит с зеденого в красный", type: "film" },
  { id: "f30", src: "/photo/film/плазматические нити.jpg", alt: "плазматические нити", type: "film" },
  { id: "f31", src: "/photo/film/побегушки.jpg", alt: "побегушки", type: "film" },
  { id: "f32", src: "/photo/film/подсох.jpg", alt: "подсох", type: "film" },
  { id: "f33", src: "/photo/film/портал 2.jpg", alt: "портал 2", type: "film" },
  { id: "f34", src: "/photo/film/портал в заброшенном здании.jpg", alt: "портал в заброшенном здании", type: "film" },
  { id: "f35", src: "/photo/film/потрескавшийся песок.jpg", alt: "потрескавшийся песок", type: "film" },
  { id: "f36", src: "/photo/film/райончик у моря.jpg", alt: "райончик у моря", type: "film" },
  { id: "f37", src: "/photo/film/рой мушек над источником воды.jpg", alt: "рой мушек над источником воды", type: "film" },
  { id: "f38", src: "/photo/film/случайный в метро.jpg", alt: "случайный в метро", type: "film" },
  { id: "f39", src: "/photo/film/Сфера.jpg", alt: "Сфера", type: "film" },
  { id: "f40", src: "/photo/film/текстура дерева во мху.jpg", alt: "текстура дерева во мху", type: "film" },
  { id: "f41", src: "/photo/film/тление углей.jpg", alt: "тление углей", type: "film" },
  { id: "f42", src: "/photo/film/треугольник с девушкой в переходе 2.jpg", alt: "треугольник с девушкой в переходе 2", type: "film" },
  { id: "f43", src: "/photo/film/фейерверк.jpg", alt: "фейерверк", type: "film" },
  { id: "f44", src: "/photo/film/шелест в ушах.jpg", alt: "шелест в ушах", type: "film" },
  
  // Digital
  {
    id: "d1",
    src: "/photo/digital/абстракция.jpg",
    alt: "<div dir='auto'>абстракция (digital)",
    type: "digital",
  },
];
