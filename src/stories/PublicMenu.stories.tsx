import type { Story } from "@ladle/react";

import MenuPage, {
  type MenuData,
} from "@/app/[username]/_components/MenuPage";

const mockData: MenuData = {
  restaurant: {
    id: 1,
    name: "Pork Basket Entebbe",
    username: "porkbasketentebbe",
    description:
      "Ugandan street food at its finest. Crispy pork, roasted chicken, and cold drinks by the lakeside.",
    address: "Circular Road, Entebbe",
    logo_url: null,
    cover_image_url:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    cover_position: "center",
    brand_color: "#cc3500",
    currency_code: "UGX",
  },
  categories: [
    {
      id: 1,
      name: "Pork Dishes",
      description: "Freshly grilled over charcoal",
      items: [
        {
          id: 1,
          name: "Full Pork Ribs",
          description: "Slow-grilled ribs served with kachumbari and chips",
          price: "35000",
          image_url:
            "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=80",
          available: true,
        },
        {
          id: 2,
          name: "Pork Chops",
          description: "Juicy bone-in chops with roasted matooke",
          price: "28000",
          image_url: null,
          available: true,
        },
        {
          id: 3,
          name: "Pork Sausages (6 pcs)",
          description: "Spiced pork sausages with tomato dip",
          price: "18000",
          image_url: null,
          available: true,
        },
      ],
    },
    {
      id: 2,
      name: "Chicken",
      description: null,
      items: [
        {
          id: 4,
          name: "Whole Roasted Chicken",
          description: "Herb-marinated, slow-roasted with sides",
          price: "45000",
          image_url:
            "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=200&q=80",
          available: true,
        },
        {
          id: 5,
          name: "Half Chicken",
          description: null,
          price: "25000",
          image_url: null,
          available: true,
        },
      ],
    },
    {
      id: 3,
      name: "Sides & Extras",
      description: null,
      items: [
        {
          id: 6,
          name: "Chips",
          description: null,
          price: "8000",
          image_url: null,
          available: true,
        },
        {
          id: 7,
          name: "Matooke",
          description: null,
          price: "6000",
          image_url: null,
          available: true,
        },
        {
          id: 8,
          name: "Kachumbari",
          description: "Fresh tomato and onion salad",
          price: "4000",
          image_url: null,
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
          name: "Cold Beer (500ml)",
          description: null,
          price: "7000",
          image_url: null,
          available: true,
        },
        {
          id: 10,
          name: "Soft Drink",
          description: null,
          price: "3000",
          image_url: null,
          available: true,
        },
        {
          id: 11,
          name: "Water (500ml)",
          description: null,
          price: "2000",
          image_url: null,
          available: true,
        },
      ],
    },
  ],
  social_links: [
    { key: "instagram", url: "https://instagram.com/porkbasketentebbe" },
    { key: "facebook", url: "https://facebook.com/porkbasketentebbe" },
  ],
  menu_url: "https://mymenyu.com/porkbasketentebbe",
  show_cta: true,
  growth_cta_text: "Join Pork Basket Entebbe on Menyu",
  register_url: "https://app.mymenyu.com/register",
  seo: {
    title: "Pork Basket Entebbe | Menyu",
    description:
      "Ugandan street food at its finest. Crispy pork, roasted chicken, and cold drinks by the lakeside.",
    og_title: "Pork Basket Entebbe | Menyu",
    og_description:
      "Ugandan street food at its finest. Crispy pork, roasted chicken, and cold drinks by the lakeside.",
    og_image: null,
    schemas: [],
  },
};

export const Default: Story = () => <MenuPage data={mockData} />;

Default.storyName = "Default";
