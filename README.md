# Nur Ajanda NFC — Kapaklı Defterler

Bu repository, **ikinci NFC projesi** için hazırlanmıştır. İlk NFC projesine dokunulmaz.

## Tasarım

Gönderdiğiniz mobil konsept temel alınmıştır:

- mobil öncelikli tek kolon yapı
- üstte ürün/hero görseli
- Nur Ajanda logosu
- hızlı bağlantı kartları
- kartlarda ikon + başlık + açıklama + küçük görsel + ok
- ürün bilgisi
- kurumsal üretim bilgileri
- fabrika ve showroom
- iletişim alanı

## Dosyalar

```
index.html
style.css
script.js
assets/
```

## Görselleri nereye koyacağız?

`assets/` klasörüne:

- `logo.png` → gerçek Nur Ajanda logosu
- `hero-product.jpg` → üstteki büyük ürün görseli
- `website.jpg`
- `instagram.jpg`
- `production.jpg`
- `catalog.jpg`
- `factory.jpg`
- `showroom.jpg`
- `whatsapp.jpg`
- `contact.jpg`
- `products.jpg`
- `product-info.jpg`

### Önerilen ölçüler

- logo.png: **1000 × 300 px** PNG, şeffaf arka plan
- hero-product.jpg: **1200 × 800 px** (3:2)
- kart görselleri: **600 × 400 px** (3:2)
- ürün detay görselleri: **1000 × 1000 px** (1:1)

Kart görsellerinde başka oran da kullanılabilir; CSS otomatik olarak kırpar.

## Linkler

Linklerin tamamı `script.js` içindeki `CONFIG` bölümünden yönetiliyor.

**Katalog linki şu anda geçici olarak ana siteye bağlıdır.** Gerçek katalog URL'si geldiğinde sadece:

```js
catalog:"BURAYA_KATALOG_LINKI"
```

satırını değiştirmek yeterlidir.

## NFC ürün sistemi

Aynı arayüzü farklı ürünlerde kullanmak için URL parametresi hazır:

```
https://nfc.nurajanda.com/?urun=sunflower
https://nfc.nurajanda.com/?urun=starry-night
https://nfc.nurajanda.com/?urun=white-rose
https://nfc.nurajanda.com/?urun=almond-tree
```

Bir sonraki aşamada bu sistemi gerçek ürün görselleri, üretim videoları ve ürün açıklamalarıyla genişletebiliriz.

## Cloudflare Pages

GitHub repository'si Cloudflare Pages'e bağlanabilir.

- Framework: **None**
- Build command: **boş**
- Build output directory: **/**
