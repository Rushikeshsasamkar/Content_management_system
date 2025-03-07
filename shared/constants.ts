export const SUPPORTED_LANGUAGES = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
  ja: "日本語",
  ar: "العربية",
  ru: "Русский",
  pt: "Português",
  hi: "हिन्दी",
  ko: "한국어",
  it: "Italiano"
} as const;

export const SUPPORTED_CURRENCIES = {
  USD: { symbol: "$", name: "US Dollar" },
  EUR: { symbol: "€", name: "Euro" },
  GBP: { symbol: "£", name: "British Pound" },
  JPY: { symbol: "¥", name: "Japanese Yen" },
  INR: { symbol: "₹", name: "Indian Rupee" },
  AUD: { symbol: "A$", name: "Australian Dollar" },
  CAD: { symbol: "C$", name: "Canadian Dollar" },
  CHF: { symbol: "CHF", name: "Swiss Franc" },
  CNY: { symbol: "¥", name: "Chinese Yuan" },
  RUB: { symbol: "₽", name: "Russian Ruble" },
  KRW: { symbol: "₩", name: "South Korean Won" },
  BRL: { symbol: "R$", name: "Brazilian Real" }
} as const;

export const RTL_LANGUAGES = ["ar"];

export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: "149.99",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop",
    inventory: 75
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: "299.99",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&auto=format&fit=crop",
    inventory: 30
  },
  {
    id: 3,
    name: "Laptop Stand",
    description: "Ergonomic aluminum laptop stand with adjustable height",
    price: "49.99",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop",
    inventory: 100
  },
  {
    id: 4,
    name: "Professional Camera",
    description: "High-resolution DSLR camera for professional photography",
    price: "899.99",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop",
    inventory: 15
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Non-slip yoga mat with carrying strap",
    price: "29.99",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&auto=format&fit=crop",
    inventory: 200
  }
];