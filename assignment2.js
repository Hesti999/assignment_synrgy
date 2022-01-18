// input banyak barang yang dibeli
const jumBar = prompt("Masukan jumlah barang yang dibeli");
var hasil = "";
var totHarga;
// menentuka decision
// jumlah barang > 5 melakukan proses penjumlahan total harga
if (jumBar > 5) {
  for (let i = 1; i <= jumBar; i++) {
    let Harg = prompt("Masukan harga tiap barang: ");
    totHarg += Harg;
  }
  hasil = "diskon 10 % dari" + totHarg;
  //   kurang dari 5, harga normal
} else {
  hasil = "harga normal";
}
// menentukan decision, apabila total harga lebih dari 100k diskon 10% jika kurang 100k diskon 5%
hasil = totHarg > 100.0 ? "Diskon 10 %" : "Diskon 5 %";

// menunjukan nilai diskon
alert(hasil);
