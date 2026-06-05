import type { Story } from "@ladle/react";

import MenuPage, {
  type MenuData,
} from "@/app/[username]/_components/MenuPage";

const logoUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'%3E%3Crect width='100' height='100' rx='22' fill='%23cc3500'/%3E%3Cg fill='white'%3E%3Crect x='33' y='18' width='5' height='22' rx='2.5'/%3E%3Crect x='44' y='18' width='5' height='22' rx='2.5'/%3E%3Crect x='55' y='18' width='5' height='22' rx='2.5'/%3E%3Cpath d='M33 38 Q33 50 46.5 52 L46.5 82 Q46.5 84 48.5 84 L51.5 84 Q53.5 84 53.5 82 L53.5 52 Q67 50 67 38 Z'/%3E%3C/g%3E%3C/svg%3E`;

const img = (id: string, w = 400) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${w}&fit=crop&auto=format&q=80`;

const mockData: MenuData = {
  restaurant: {
    id: 1,
    name: "The Golden Fork",
    username: "thegoldenfork",
    description: "Modern European cuisine in the heart of the city.",
    address: "14 Marylebone Lane, London",
    logo_url: logoUrl,
    cover_image_url: img("photo-1414235077428-338989a2e8c0", 1200),
    cover_position: "center",
    brand_color: "#cc3500",
    currency_code: "GBP",
  },
  categories: [
    {
      id: 1,
      name: "Starters",
      description: "Light bites to begin your meal.",
      items: [
        {
          id: 1,
          name: "Bruschetta",
          description: "Toasted bread with tomato, basil and olive oil.",
          price: "12",
          image_url: img("photo-1572695157366-5e585ab2b69f"),
          available: true,
        },
        {
          id: 2,
          name: "French Onion Soup",
          description: "Classic broth with gruyère crouton.",
          price: "10",
          image_url: img("photo-1547592180-85f173990554"),
          available: true,
        },
        {
          id: 3,
          name: "Mezze Platter",
          description: "Hummus, olives, pita and pickled vegetables.",
          price: "18",
          image_url: img("photo-1541014741259-de529411b96a"),
          available: true,
        },
      ],
    },
    {
      id: 2,
      name: "Mains",
      description: null,
      items: [
        {
          id: 4,
          name: "Grilled Salmon",
          description: "Served with seasonal vegetables and lemon butter.",
          price: "28",
          image_url: img("photo-1467003909585-2f8a72700288"),
          available: true,
        },
        {
          id: 5,
          name: "Beef Tenderloin",
          description: "200g with truffle mash and red wine jus.",
          price: "36",
          image_url: img("photo-1546833999-b9f581a1996d"),
          available: true,
        },
        {
          id: 6,
          name: "Mushroom Risotto",
          description: "Arborio rice with wild mushrooms and parmesan.",
          price: "22",
          image_url: img("photo-1476124369491-e7addf5db371"),
          available: true,
        },
      ],
    },
    {
      id: 3,
      name: "Desserts",
      description: null,
      items: [
        {
          id: 7,
          name: "Chocolate Fondant",
          description: "Warm chocolate cake with vanilla ice cream.",
          price: "11",
          image_url: img("photo-1563805042-7684c019e1cb"),
          available: true,
        },
        {
          id: 8,
          name: "Crème Brûlée",
          description: "Classic vanilla custard with caramelised sugar.",
          price: "10",
          image_url: img("photo-1470124182917-cc6e71b22ecc"),
          available: true,
        },
      ],
    },
    {
      id: 4,
      name: "Drinks",
      description: null,
      items: [
        {
          id: 9,
          name: "Fresh Juice",
          description: "Orange, apple, or grapefruit.",
          price: "5",
          image_url: img("photo-1613478223719-2ab802602423"),
          available: true,
        },
        {
          id: 10,
          name: "House Wine (glass)",
          description: "Red or white — ask your server.",
          price: "12",
          image_url: img("photo-1510812431401-41d2bd2722f3"),
          available: true,
        },
      ],
    },
  ],
  social_links: [
    { key: "instagram", url: "#" },
    { key: "facebook", url: "#" },
    { key: "tiktok", url: "#" },
    { key: "website", url: "#" },
    { key: "maps", url: "#" },
  ],
  menu_url: "https://mymenyu.com/thegoldenfork",
  show_cta: true,
  growth_cta_text: "Join The Golden Fork on Menyu",
  register_url: "https://app.mymenyu.com/register",
  seo: {
    title: "The Golden Fork | Menyu",
    description: "Modern European cuisine in the heart of the city.",
    og_title: "The Golden Fork | Menyu",
    og_description: "Modern European cuisine in the heart of the city.",
    og_image: null,
    schemas: [],
  },
};

export const Default: Story = () => <MenuPage data={mockData} />;

Default.storyName = "Default";
