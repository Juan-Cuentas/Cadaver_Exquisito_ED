function irRandom() {
  const paginas = [
    "cap1_part1.html",
    "cap2_part1.html",
    "cap3_part1.html",
    "cap4_part1.html",
    "cap5_part1.html",
    "cap6_part1.html",
    "cap7_part1.html",
    "cap8_part1.html",
    "cap9_part1.html",
    "cap10_part1.html",
    "cap11_part1.html",
    "cap12_part1.html",
    "cap13_part1.html",
    "cap14_part1.html",
    "cap15_part1.html",
    "cap16_part1.html",
    "cap17_part1.html",
    "cap18_part1.html",
    "cap19_part1.html",
    "cap20_part1.html",
    "cap21_part1.html",
    "cap22_part1.html",
    "cap23_part1.html",
    "cap1_part2.html",
    "cap2_part2.html",
    "cap3_part2.html",
    "cap4_part2.html",
    "cap5_part2.html",
    "cap6_part2.html",
    "cap7_part2.html",
    "cap8_part2.html",
    "cap9_part2.html",
    "cap10_part2.html",
    "cap11_part2.html",
    "cap12_part2.html",
    "cap13_part2.html",
    "cap14_part2.html",
    "cap15_part2.html",
    "cap16_part2.html",
    "cap17_part2.html",
    "cap18_part2.html",
    "cap19_part2.html"
  ];

  const random = Math.floor(Math.random() * paginas.length);
  window.location.href = paginas[random];
}

// elementos
const rueda = document.getElementById("rueda");
const slider = document.getElementById("slider");

// ⚠️ IMPORTANTE: debes tener EXACTAMENTE 42 rutas
const opciones = [
  "cap1_part1.html",
  "cap2_part1.html",
  "cap3_part1.html",
  "cap4_part1.html",
  "cap5_part1.html",
  "cap6_part1.html",
  "cap7_part1.html",
  "cap8_part1.html",
  "cap9_part1.html",
  "cap10_part1.html",
  "cap11_part1.html",
  "cap12_part1.html",
  "cap13_part1.html",
  "cap14_part1.html",
  "cap15_part1.html",
  "cap16_part1.html",
  "cap17_part1.html",
  "cap18_part1.html",
  "cap19_part1.html",
  "cap20_part1.html",
  "cap21_part1.html",
  "cap22_part1.html",
  "cap23_part1.html",
  "cap1_part2.html",
  "cap2_part2.html",
  "cap3_part2.html",
  "cap4_part2.html",
  "cap5_part2.html",
  "cap6_part2.html",
  "cap7_part2.html",
  "cap8_part2.html",
  "cap9_part2.html",
  "cap10_part2.html",
  "cap11_part2.html",
  "cap12_part2.html",
  "cap13_part2.html",
  "cap14_part2.html",
  "cap15_part2.html",
  "cap16_part2.html",
  "cap17_part2.html",
  "cap18_part2.html",
  "cap19_part2.html"
];

// número de secciones
const total = opciones.length;
const gradosPorSeccion = 360 / total;

// mover la rueda con el slider
slider.addEventListener("input", () => {
  rueda.style.transform = `rotate(${slider.value}deg)`;
});

// función para ir a la página seleccionada
function ir() {
  let grados = slider.value;

  // normalizar (por si pasa de 360)
  grados = grados % 360;

  // calcular en qué sección cae
  let index = Math.floor(grados / gradosPorSeccion);

  // invertir porque la rueda gira al revés respecto al puntero
  index = total - 1 - index;

  // asegurar rango válido
  index = (index + total) % total;

  // redirigir
  window.location.href = opciones[index];
}