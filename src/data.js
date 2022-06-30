export const CAKES_DATA = [
    {id: "cake1", name: "Сметанный торт с ягодами", description: "Ванильный бисквит, сметанный крем, ягоды черники и ежевики", price: 200, type: "sour-cream", quantity: 0, img: "sour-cream-cake.jpg"},
    {id: "cake2", name: "Торт «Прага»", description: "Шоколадный бисквит, шоколадный масляный крем, яблочное повидло", price: 300, type: "chocolate", quantity: 0, img: "prague-cake.jpg"},
    {id: "cake3", name: "Торт «Чёрный лес»", description: "Шоколадный бисквит, вишнёвая начинка, свежие ягоды вишни, шоколадная глазурь", price: 250, type: "chocolate", quantity: 0, img: "black-forest-cake.jpg"},
    {id: "cake4", name: "Торт с ежевикой", description: "Ванильный бисквит, сливочный крем, молочная глазурь, ягоды ежевики", price: 270, type: "berry", quantity: 0, img: "berry-cake.jpg"},
    {id: "cake5", name: "Торт «Красный Бархат»", description: "Шоколадный бисквит, крем на основе сливочного сыра", price: 270, type: "chocolate", quantity: 0, img: "red-velvet-cake.jpg"},
    {id: "cake6", name: "Сметанный торт с ягодным ассорти", description: "Ванильный бисквит, сметанный крем, ягоды черники, малины и клубники", price: 270, type: "sour-cream", quantity: 0, img: "sour-cream-cake-strawberries.jpg"},
    {id: "cake7", name: "Клубничный торт", description: "Песочная основа, суфле, компоте из ягод, свежие ягоды клубники", price: 270, type: "berry", quantity: 0, img: "strawberry-cake.jpg"},
    {id: "cake8", name: "Апельсиновый торт", description: "Абрикосовое суфле, фруктовое желе, дольки апельсина", price: 250, type: "fruit", quantity: 0, img: "orange-cake.jpg"},
]
  
export const PASTRY_DATA = [
    {id: "pastry1", name: "Пирожное «Ламингтон»", description: "Бисквит, шоколадная глазурь, кокосовые стружки", price: 100, type: "biscuit", quantity: 0, img: "lamington.jpg"},
    {id: "pastry2", name: "Корзинка с ягодами", description: "Песочная основа, повидло, ягоды чёрной и красной смородины", price: 120, type: "shortbread", quantity: 0, img: "berry-basket-cake.jpg"},
    {id: "pastry3", name: "Пирожное «Наполеон»", description: "Слоёные коржи, сливочно-заварной крем", price: 150, type: "flaky", quantity: 0, img: "napoleon-cake.jpg"},
    {id: "pastry4", name: "Профитроли с заварным кремом", description: "Заварное тесто, заварной крем", price: 80, type: "custard", quantity: 0, img: "profitroles.jpg"}
]
  
export const ICECREAM_DATA = [
    {id: "ice-cream1", name: "Пломбир ванильный", description: "", price: 50, type: "plombir", quantity: 0, img: "plombir-classic.jpg"},
    {id: "ice-cream2", name: "Пломбир клубничный", description: "", price: 50, type: "plombir", quantity: 0, img: "plombir-strawberry.jpg"},
    {id: "ice-cream3", name: "Пломбир шоколадный", description: "", price: 50, type: "plombir", quantity: 0, img: "plombir-chocolate.jpg"},
    {id: "ice-cream4", name: "Пломбир фисташковый", description: "Мороженое с фисташками", price: 50, type: "plombir", quantity: 0, img: "plombir-pistachio.jpg"},
    {id: "ice-cream5", name: "Пломбир черничный", description: "Мороженое с ягодами черники и кусочками кешью", price: 50, type: "plombir", quantity: 0, img: "plombir-blueberry.jpg"},
]
  
export const DRINKS_DATA = [
    {id: "drink1", name: "Сок апельсиновый", description: "", price: 30, type: "", quantity: 0, img: "orange-juice.jpg"},
    {id: "drink2", name: "Чай зелёный", description: "", price: 60, type: "", quantity: 0, img: "green-tea.jpg"},
    {id: "drink3", name: "Чай чёрный", description: "", price: 70, type: "", quantity: 0, img: "black-tea.jpg"},
    {id: "drink4", name: "Кофе Американо", description: "", price: 80, type: "", quantity: 0, img: "coffee-americano.jpg"},
]
  
export const ALL_DATA = CAKES_DATA.concat(PASTRY_DATA, ICECREAM_DATA, DRINKS_DATA);