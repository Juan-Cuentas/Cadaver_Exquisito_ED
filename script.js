function irRandom() {
  const paginas = [
    "cap1_part1.html",
    "cap2_part1.html",
    "cap3_part1.html",
    "cap4_part1.html"
  ];

  const random = Math.floor(Math.random() * paginas.length);
  window.location.href = paginas[random];
}