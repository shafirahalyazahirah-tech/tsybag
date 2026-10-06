export const channels = {
  phone: "+62 815-6495-9640",
  whatsappNumber: "6281564959640",
  whatsappCS: "https://wa.me/6281564959640?text=Halo%20Kak%20Admin%20TSY.bag%2C%20aku%20mau%20tanya-tanya%20tasnya%20dong%20sebelum%20checkout.",
  shopeeStore: "https://shopee.co.id/fashionbag_bandung",
  tiktokShop: "https://www.tiktok.com/@tsy.bag/shop",
  tiktokLive: "https://www.tiktok.com/@tsy.bag/live",
  shopeeLive: "https://shopee.co.id/fashionbag_bandung",
};

export const getProductWhatsappUrl = (productName) => {
  const message = encodeURIComponent(`Halo Kak Admin, aku naksir sama tas ${productName} nih. Buat pilihan warna pastelnya masih ready stok nggak ya?`);
  return `https://wa.me/6281564959640?text=${message}`;
};