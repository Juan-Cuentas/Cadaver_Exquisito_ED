function irRandom() {
  const paginas = [
    "parte 1/cap1_part1.html",
    "parte 1/cap2_part1.html",
    "parte 1/cap3_part1.html",
    "parte 1/cap4_part1.html"
  ];

  const random = Math.floor(Math.random() * paginas.length);
  window.location.href = paginas[random];
}