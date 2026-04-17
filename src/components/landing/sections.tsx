import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Каталог беседок 2024</Badge>,
    title: "Беседка для вашего сада.",
    content: 'Выберите идеальную беседку из нашей коллекции — от классических деревянных до современных металлических конструкций.',
    showButton: true,
    buttonText: 'Смотреть каталог'
  },
  {
    id: 'classic',
    title: 'Классическая деревянная',
    content: 'Тёплая атмосфера натурального дерева. Идеально вписывается в любой сад — от дачного участка до загородного поместья.',
    image: 'https://cdn.poehali.dev/projects/50076807-9e6c-4b43-a9a3-dafd6d22dd4a/files/301d4b7a-a2af-4593-bca6-abecd9258f0a.jpg',
    price: 'от 85 000 ₽',
    features: ['Массив сосны или лиственницы', 'Сборка за 1 день', 'Гарантия 5 лет'],
    isGazebo: true,
    showButton: true,
    buttonText: 'Заказать'
  },
  {
    id: 'modern',
    title: 'Современная металлическая',
    content: 'Стильный минимализм со стеклянной крышей. Не требует ухода, не боится непогоды — эстетика на десятилетия.',
    image: 'https://cdn.poehali.dev/projects/50076807-9e6c-4b43-a9a3-dafd6d22dd4a/files/ae53d42f-3a8e-4b88-9549-9863b15ca63b.jpg',
    price: 'от 120 000 ₽',
    features: ['Порошковое покрытие', 'Закалённое стекло', 'Гарантия 10 лет'],
    isGazebo: true,
    showButton: true,
    buttonText: 'Заказать'
  },
  {
    id: 'luxury',
    title: 'Люкс — восьмигранная',
    content: 'Эксклюзивная восьмигранная беседка с резными колоннами. Украшение сада, которое производит впечатление.',
    image: 'https://cdn.poehali.dev/projects/50076807-9e6c-4b43-a9a3-dafd6d22dd4a/files/27dee888-4b34-437c-8cb7-26289724bc07.jpg',
    price: 'от 210 000 ₽',
    features: ['Резьба ручной работы', 'Светодиодная подсветка', 'Индивидуальный проект'],
    isGazebo: true,
    showButton: true,
    buttonText: 'Заказать'
  },
  {
    id: 'cta',
    title: 'Не можете выбрать?',
    content: 'Оставьте заявку — наш мастер приедет, замерит участок и поможет подобрать идеальную беседку под ваш бюджет и стиль.',
    showButton: true,
    buttonText: 'Получить консультацию'
  },
]
