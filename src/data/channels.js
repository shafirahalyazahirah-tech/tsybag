export const channels = {
  phone: "+62 815-6495-9640",
  whatsappNumber: "6281564959640",
  whatsappCS: "https://wa.me/6281564959640?text=Halo%20Admin%20TSY.bag%2C%20mau%20tanya%20produk%20tas%20dan%20order",
  shopeeStore: "https://shopee.co.id/fashionbag_bandung",
  tiktokShop: "https://www.tiktok.com/@tsy.bag/shop",
  tiktokLive: "https://www.tiktok.com/@tsy.bag/live",
  shopeeLive: "https://shopee.co.id/fashionbag_bandung",
};

export const getProductWhatsappUrl = (productName) => {
  const message = encodeURIComponent(`Halo Admin TSY.bag, saya mau tanya & order ${productName}. Apakah stok warna cerah/pastelnya masih ready?`);
  return `https://wa.me/6281564959640?text=${message}`;
};
