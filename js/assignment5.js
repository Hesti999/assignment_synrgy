arraysatu = [2, 5, 10, "saya", 29, 99, 38];
arraydua = [100, 3, 66, 20, "abjad"];
arraytiga = [3, 100, 283, "saya", "adalah", "kapiten", 75];
arrayempat = [200, 300, 21, "dari", "indonesia"];
arraylima = [29, 12, 30, "ini", "saya", 85];
arrayenam = ["cyber", "security", 20, 15, 21];
arraytujuh = [20, 12, 43, 54, 24];
arraydelapan = ["saya", "adalah", "seorang", "pemusik", 0, 201];
arraysembilan = [20, "empat", "limat", 8, 29, 30];
arraysepuluh = [19, "tujuh", "sepuluh", 11, 23, 40];
arraysebelas = ["data", "empat", 8, 3, 100, 8, 100, 3];
arrayduabelas = [9, 7, 24, "data", "lima", 25];

class Jumat {
  constructor(array1, array2) {
    this.array1 = array1;
    this.array2 = array2;
    this.totalArray = array1.concat(array2);
    this.lengthTotalArray = this.totalArray.length;
    this.arrayNumber1 = array1.filter(function (number) {
      return parseInt(number) == number;
    });
    this.arrayNumber2 = array2.filter(function (number) {
      return parseInt(number) == number;
    });
    this.arrayHuruf = this.totalArray.filter(function (number) {
      return parseInt(number) != number;
    });
    this.jumlahAngka = this.arrayNumber1.map((a, i) => a + this.arrayNumber2[i]);
  }

  soalSatu() {
    if (this.lengthTotalArray < 50) {
      let indexMod = [];
      for (let i = 0; i < this.lengthTotalArray; i++) {
        if (this.lengthTotalArray % i == 0) {
          indexMod.push(this.totalArray[i]);
        }
      }
      console.log(indexMod);
      console.log(this.jumlahAngka);
      console.log(this.arrayHuruf);
    } else {
      console.log(true);
    }
  }
  soalDua() {
    if (this.lengthTotalArray != 32) {
      console.log(this.arrayHuruf);
      let indexMod = [];
      for (let i = 0; i < this.lengthTotalArray; i++) {
        if (this.lengthTotalArray % i == 1) {
          indexMod.push(this.totalArray[i]);
        }
      }
      console.log(indexMod);
      console.log(this.jumlahAngka);
    } else {
      console.log(true);
    }
  }
  soalTiga(x) {
    if (this.lengthTotalArray + x == 28) {
      console.log(this.arrayHuruf);
      console.log(this.jumlahAngka);
      let indexMod = [];
      for (let i = 0; i < this.lengthTotalArray; i++) {
        if (this.lengthTotalArray % i == 0) {
          indexMod.push(this.totalArray[i]);
        }
      }
    } else {
      console.log(true);
    }
  }

  soalEmpat() {
    if (this.lengthTotalArray + 1 != 35) {
      let indexMod = [];
      for (let i = 0; i < this.lengthTotalArray; i++) {
        if (this.lengthTotalArray % i == 1) {
          indexMod.push(this.totalArray[i]);
        }
      }
      console.log(indexMod);
      console.log(this.arrayHuruf);
    } else {
      console.log(true);
    }
  }

  soalLima(x) {
    if (this.lengthTotalArray + x != 50) {
      console.log(this.jumlahAngka);
      let indexMod = [];

      for (let i = 0; i < this.lengthTotalArray; i++) {
        if (this.lengthTotalArray % i == 0) {
          indexMod.push(this.totalArray[i]);
        }
      }
      console.log(indexMod);
    } else {
      console.log(true);
    }
  }

  soalEnam(u) {
    if (this.lengthTotalArray + u != 25) {
      let indexMod = [];
      console.log(this.jumlahAngka);
      for (let i = 0; i < this.lengthTotalArray; i++) {
        if (this.lengthTotalArray % i == 0) {
          indexMod.push(this.totalArray[i]);
        }
      }
      console.log(indexMod);
    } else {
      console.log(true);
    }
  }
}
