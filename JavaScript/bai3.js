function tinhTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
  }
  
  let diemDolphins = tinhTrungBinh(96, 108, 89);
  let diemKoalas = tinhTrungBinh(88, 91, 110);
  console.log("Data 1:")
  console.log("Điểm của đội Dolphins: ", diemDolphins.toFixed(2));
  console.log("Điểm của đội Koalas: ", diemKoalas.toFixed(2));
  if (diemDolphins > diemKoalas) {
    console.log("Dolphins thắng cúp!")
  }
  else if (diemDolphins < diemKoalas) {
    console.log("diemKoalas thắng cúp!")
  }
  else {
    console.log("Hòa!")
  }
  
  let diemDolphins1 = tinhTrungBinh(97, 112, 101);
  let diemKoalas1 = tinhTrungBinh(109, 95, 123);
  console.log("Data Bonus 1:")
  console.log("Điểm của đội Dolphins: ", diemDolphins1.toFixed(2));
  console.log("Điểm của đội Koalas: ", diemKoalas1.toFixed(2));
  if (diemDolphins1 > diemKoalas1 && diemDolphins1 >= 100) {
    console.log("Dolphins thắng cúp!");
  } else if (diemDolphins1 < diemKoalas1 && diemKoalas1 >= 100) {
    console.log("Koalas thắng cúp!");
  } else {
    console.log("Hòa!");
  }
  
  let diemDolphins2 = tinhTrungBinh(97, 112, 101);
  let diemKoalas2 = tinhTrungBinh(109, 95, 106);
  console.log("Data Bonus 2:")
  console.log("Điểm của đội Dolphins: ", diemDolphins2.toFixed(2));
  console.log("Điểm của đội Koalas: ", diemKoalas2.toFixed(2));
  if (diemDolphins2 > diemKoalas2 && diemDolphins2 >= 100) {
    console.log("Dolphins thắng cúp!");
  } else if (diemDolphins2 < diemKoalas2 && diemKoalas2 >= 100) {
    console.log("Koalas thắng cúp!");
  } else if (diemDolphins2 >= 100 && diemKoalas2 >= 100 && diemDolphins2 === diemKoalas2) {
    console.log("Hòa!");
  } else {
    console.log("2 đội không đạt điều kiện!");
  }
  