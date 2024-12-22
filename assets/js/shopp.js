const userNameMsg = "User Name :"
const mainManuMsg = "Wellcome to Shopping App\nSelect an action:\n1 - Product List\n2 - Show Cart\n3 - Buy Product\n4 - Add Account Balance\n5 - Show Account Balance\n\nİptal - Exist";
const choice = ["1", "2", "3", "4", "5"];
const existing = "Exited The Application"
const invalidEntry = "Invalid Entry";
const balanceAddingMsg = "How much balance do you want to load?";
const balanceAddedgMsg = "Congraculation!\n\nAccount Balance:";
const cart = [];
let accountBalance = 0;
const user = {};
let value;


const products = [
  { id: 1, productName: "Samsung", price: 32000, stock: 40 },
  { id: 2, productName: "Iphone", price: 76000, stock: 35 },
  { id: 3, productName: "Huawei", price: 30000, stock: 13 },
  { id: 4, productName: "Xiaomi", price: 38000, stock: 6 },
  { id: 5, productName: "Oppo", price: 20000, stock: 30 }
];

function newEntry(msg, ...keys) {
  const entry = prompt(msg);

  const isvalue = keys.includes(entry);

  if (!isvalue) {
    if (entry === null) {
      return false;
    }
    return newEntry(msg, ...keys);
  }

  return entry;
}

function addingUser() {
  let userName = prompt(userNameMsg);

  if (userName === null) {
    return false;
  }

  userName = userName.trim();

  if (!userName) {
    alert(invalidEntry);
    return addingUser();
  }

  user.name = userName;
  return userName;
}






function productList() {
  const productList = products.map((p, index) => `${index + 1} - Name: ${p.productName}, Price: ${p.price}, Stock:${p.stock}`);
  alert(productList.join("\n"));
}





function addBalance() {
  let balance = prompt(balanceAddingMsg);

  if (balance === null) {
    return false;
  }

  balance = balance.trim();

  if (!balance || isNaN(Number(balance)) || Number(balance) < 0) {
    alert(invalidEntry);
    return addBalance();
  }

  accountBalance += Number(balance);

  alert(`${balanceAddedgMsg} ${accountBalance}`);
}

function showBalance() {
  alert(accountBalance);
}





function mainManu() {

  if (Object.keys(user).length === 0) {
    if (!addingUser()) {
      alert(existing);
      return;
    }
  }

  value = newEntry(mainManuMsg, ...choice);

  if (!value) {
    alert(existing);
    return;
  }

  if (value === choice[0]) {
    productList();
  }

  if (value === choice[1]) {

  }

  if (value === choice[2]) {

  }

  if (value === choice[3]) {
    addBalance();
  }

  if (value === choice[4]) {
    showBalance();
  }




}

mainManu();





// Yapılacaklar:
// Ürün Listesi Oluşturma: Ürünlerin adı, fiyatı ve stok miktarını içeren bir ürün listesi oluşturulacaktır. Örnek ürünler Ürün A, Ürün B, vb. olacak ve her ürün için fiyat ve stok miktarı belirlenecektir.  ✅
// Sepet Fonksiyonu: Kullanıcı, satın aldığı ürünleri sepete ekleyebilir. Sepetteki ürünlerin adı, fiyatı ve miktarı gösterilecektir.
// Ürün Satın Alma İşlemi: Kullanıcı, ürünleri listeleyip bir ürün seçtikten sonra, kaç adet almak istediğini girecek. Stok ve bakiye kontrol edilecek, yeterli stok ve bakiye varsa ürün sepete eklenecek, stok ve bakiye güncellenecektir.
// Bakiye Ekle:Bakiye ekleme yapılabilecek
// Bakiyeyi Görüntüleme: Kullanıcı mevcut bakiyesini herhangi bir zamanda görüntüleyebilir.
// Menü Seçenekleri: Ana menüde 5 seçenek olacak: ✅
// Ürünleri listele ✅
// Sepeti göster
// Ürün satın al
// Bakiye Ekle      ✅
// Bakiyeyi göster  ✅
// Çıkış yap
// Geçersiz Seçenek Kontrolü: Kullanıcı geçerli olmayan bir seçenek girerse, hata mesajı gösterilecektir.