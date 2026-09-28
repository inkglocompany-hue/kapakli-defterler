const CONFIG={
  catalog:"https://www.nurajanda.com/",
  factory:"https://www.google.com/maps/search/?api=1&query=Nur+Ajanda+Maltepe+Mah+Hastane+Yolu+Sk+No+6+Zeytinburnu+Istanbul",
  showroom:"https://www.google.com/maps/search/?api=1&query=Nur+Ajanda+Davutpasa+Caddesi+Kazim+Dincöl+San+Sit+No+81%2F132+Zeytinburnu+Istanbul",
  whatsapp:"https://wa.me/905533330687?text=Merhaba%20Nur%20Ajanda%2C%20NFC%20sayfan%C4%B1zdan%20ula%C5%9F%C4%B1yorum."
};

document.querySelectorAll("[data-url]").forEach(el=>{
  const key=el.dataset.url;
  if(CONFIG[key])el.href=CONFIG[key];
});

const hero=document.getElementById("heroProduct");
const placeholder=document.getElementById("heroPlaceholder");
hero.addEventListener("load",()=>placeholder.style.display="none");
hero.addEventListener("error",()=>{hero.style.display="none";placeholder.style.display="grid"});

const logo=document.getElementById("logo");
const fallback=document.getElementById("logoFallback");
logo.addEventListener("error",()=>{logo.style.display="none";fallback.style.display="block"});

/* NFC ürün parametresi:
   https://nfc.nurajanda.com/?urun=sunflower
   https://nfc.nurajanda.com/?urun=starry-night
*/
const product=new URLSearchParams(location.search).get("urun");
const products={
  "sunflower":{name:"Van Gogh Sunflower Defter",color:"Sunflower"},
  "starry-night":{name:"Van Gogh Starry Night Defter",color:"Starry Night"},
  "white-rose":{name:"Van Gogh White Rose Defter",color:"White Roses"},
  "almond-tree":{name:"Van Gogh Almond Tree Defter",color:"Almond Tree"}
};
if(product&&products[product]){
  document.getElementById("productModel").textContent=products[product].name;
}
