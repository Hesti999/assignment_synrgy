const array1 = [2, 5, 10, "ini dia", "data", 100, 38];
const array2 = [3, 100, 283, "saya", "adalah", "kapiten", 75];
const array3 = [29, 12, 30, "ini", "saya", 85];
const array4 = [20, 12, 43, 54, 24];
const array5 = [20, "empat", "limat", 8, 29, 30];
const array6 = ["data", "empat", 8, 3, 100, 8, 100, 3];

const loopingArray = (nilai) => {
  nilai.forEach((elem) => {
    console.log(elem);
  });
};

// Soal1
const loopArray1 = (nilaiArray) => {
  nilaiArray.length < 50 ? loopingArray(nilaiArray) : console.log(true);
};

// Soal2
const loopArray2 = (nilaiArray, value) => {
  nilaiArray.length + value != 32 ? loopingArray(nilaiArray) : console.log(true);
};

// Soal3
const loopArray3 = (nilaiArray, value) => {
  nilaiArray.length + value == 28 ? loopingArray(nilaiArray) : console.log(true);
};

//Soal4&5
const loopArray4 = (nilaiArray, value) => {
  nilaiArray.length + value != 35 ? loopingArray(nilaiArray) : console.log(true);
};

// Soal6
const loopArray6 = (nilaiArray, valueSat, valueDu) => {
  valueSat + nilaiArray.length + valueDu != 25 ? loopingArray(nilaiArray) : console.log(true);
};
