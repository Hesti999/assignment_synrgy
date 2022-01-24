// Input banyak barang yang dibeli
var jumBar = parseInt(prompt("Masukan jumlah barang yang dibeli"));
// Inisialisasi variabel hasil & harga
var hasil = "";
var totalHarga = 0;

// Menentukan kondisi pada jumlah barang
// Jika barang > 5 maka dilakukan perulangan total harga
if (jumBar > 5) {
  for (var i = 1; i <= jumBar; i++) {
    var harga = parseInt(prompt("Masukan harga tiap barang: ", "Masukan harga dengan nilai > 10.000"));
    totalHarga = totalHarga + harga;
  }
  // Menentukan kondisi jika harga > 100.000 maka mendapatkan diskon 10% jika tidak maka diskon 5%
  hasil = totalHarga > 100000 ? "Diskon 10 %" : "Diskon 5 %";
  // Barang < 5 hasil = Harga normal
} else {
  hasil = "Harga normal";
}

// Output
alert(`${hasil}`);
