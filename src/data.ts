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
    alt: "<div dir='auto'>абстракция</div>",
    type: "film",
  },
  { id: "f2", src: "/photo/film/бабочка.jpg", alt: "<div dir='auto'>бабочка</div>", type: "film" },
  { id: "f3", src: "/photo/film/бегущие.jpg", alt: "<div dir='auto'>бегущие</div>", type: "film" },
  { id: "f4", src: "/photo/film/без имени.jpg", alt: "<div dir='auto'>без имени</div>", type: "film" },
  { id: "f5", src: "/photo/film/брус.jpg", alt: "<div dir='auto'>брус</div>", type: "film" },
  { id: "f6", src: "/photo/film/брызги.jpg", alt: "<div dir='auto'>брызги</div>", type: "film" },
  { id: "f7", src: "/photo/film/в закатных лучях отразись на стену безымянного дома.jpg", alt: "<div dir='auto'>в закатных лучях отразись на стену безымянного дома</div>", type: "film" },
  { id: "f8", src: "/photo/film/вода об камни как стекло об асфальт.jpg", alt: "<div dir='auto'>вода об камни как стекло об асфальт</div>", type: "film" },
  { id: "f9", src: "/photo/film/волнорез.jpg", alt: "<div dir='auto'>волнорез</div>", type: "film" },
  { id: "f10", src: "/photo/film/вся краска иссякла.jpg", alt: "<div dir='auto'>вся краска иссякла</div>", type: "film" },
  { id: "f11", src: "/photo/film/дерево украсили сосульками.jpg", alt: "<div dir='auto'>дерево украсили сосульками</div>", type: "film" },
  { id: "f12", src: "/photo/film/и на зеленый никто не идет.jpg", alt: "<div dir='auto'>и на зеленый никто не идет</div>", type: "film" },
  { id: "f13", src: "/photo/film/игор.jpg", alt: "<div dir='auto'>игор</div>", type: "film" },
  { id: "f14", src: "/photo/film/карандаш.jpg", alt: "<div dir='auto'>карандаш</div>", type: "film" },
  { id: "f15", src: "/photo/film/колодец свежего воздуха.jpg", alt: "<div dir='auto'>колодец свежего воздуха</div>", type: "film" },
  { id: "f16", src: "/photo/film/корни идут под землю.jpg", alt: "<div dir='auto'>корни идут под землю</div>", type: "film" },
  { id: "f17", src: "/photo/film/красивое желейное существо аморфо де креатуре.jpg", alt: "<div dir='auto'>красивое желейное существо аморфо де креатуре</div>", type: "film" },
  { id: "f18", src: "/photo/film/любимое место в парке.jpg", alt: "<div dir='auto'>любимое место в парке</div>", type: "film" },
  { id: "f19", src: "/photo/film/медуза.jpg", alt: "<div dir='auto'>медуза</div>", type: "film" },
  { id: "f20", src: "/photo/film/мох пересвет.jpg", alt: "<div dir='auto'>мох пересвет</div>", type: "film" },
  { id: "f21", src: "/photo/film/настороженность.jpg", alt: "<div dir='auto'>настороженность</div>", type: "film" },
  { id: "f22", src: "/photo/film/небесные шаги.jpg", alt: "<div dir='auto'>небесные шаги</div>", type: "film" },
  { id: "f23", src: "/photo/film/огненные листья.jpg", alt: "<div dir='auto'>огненные листья</div>", type: "film" },
  { id: "f24", src: "/photo/film/огненные скрепы.jpg", alt: "<div dir='auto'>огненные скрепы</div>", type: "film" },
  { id: "f25", src: "/photo/film/окно в крепости.jpg", alt: "<div dir='auto'>окно в крепости</div>", type: "film" },
  { id: "f26", src: "/photo/film/осенняя соната.jpg", alt: "<div dir='auto'>осенняя соната</div>", type: "film" },
  { id: "f27", src: "/photo/film/отражение в воде.jpg", alt: "<div dir='auto'>отражение в воде</div>", type: "film" },
  { id: "f28", src: "/photo/film/паттерн.jpg", alt: "<div dir='auto'>паттерн</div>", type: "film" },
  { id: "f29", src: "/photo/film/плавно переходит с зеденого в красный.jpg", alt: "<div dir='auto'>плавно переходит с зеденого в красный</div>", type: "film" },
  { id: "f30", src: "/photo/film/плазматические нити.jpg", alt: "<div dir='auto'>плазматические нити</div>", type: "film" },
  { id: "f31", src: "/photo/film/побегушки.jpg", alt: "<div dir='auto'>побегушки</div>", type: "film" },
  { id: "f32", src: "/photo/film/подсох.jpg", alt: "<div dir='auto'>подсох</div>", type: "film" },
  { id: "f33", src: "/photo/film/портал 2.jpg", alt: "<div dir='auto'>портал 2</div>", type: "film" },
  { id: "f34", src: "/photo/film/портал в заброшенном здании.jpg", alt: "<div dir='auto'>портал в заброшенном здании</div>", type: "film" },
  { id: "f35", src: "/photo/film/потрескавшийся песок.jpg", alt: "<div dir='auto'>потрескавшийся песок</div>", type: "film" },
  { id: "f36", src: "/photo/film/райончик у моря.jpg", alt: "<div dir='auto'>райончик у моря</div>", type: "film" },
  { id: "f37", src: "/photo/film/рой мушек над источником воды.jpg", alt: "<div dir='auto'>рой мушек над источником воды</div>", type: "film" },
  { id: "f38", src: "/photo/film/случайный в метро.jpg", alt: "<div dir='auto'>случайный в метро</div>", type: "film" },
  { id: "f39", src: "/photo/film/Сфера.jpg", alt: "<div dir='auto'>Сфера</div>", type: "film" },
  { id: "f40", src: "/photo/film/текстура дерева во мху.jpg", alt: "<div dir='auto'>текстура дерева во мху</div>", type: "film" },
  { id: "f41", src: "/photo/film/тление углей.jpg", alt: "<div dir='auto'>тление углей</div>", type: "film" },
  { id: "f42", src: "/photo/film/треугольник с девушкой в переходе 2.jpg", alt: "<div dir='auto'>треугольник с девушкой в переходе 2</div>", type: "film" },
  { id: "f43", src: "/photo/film/фейерверк.jpg", alt: "<div dir='auto'>фейерверк</div>", type: "film" },
  { id: "f44", src: "/photo/film/шелест в ушах.jpg", alt: "<div dir='auto'>шелест в ушах</div>", type: "film" },
  
  // Digital
  {
    id: "d1",
    src: "/photo/digital/абстракция.jpg",
    alt: "<div dir='auto'>абстракция (digital)",
    type: "digital",
  },
];
