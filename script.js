function irRandom() {
  const paginas = [
    "parte_1/cap1_part1.html",
    "parte_1/cap2_part1.html",
    "parte_1/cap3_part1.html",
    "parte_1/cap4_part1.html"
  ];

  const random = Math.floor(Math.random() * paginas.length);
  window.location.href = paginas[random];
}