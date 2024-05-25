// Array nama hari dan bulan dalam bahasa Indonesia
const namaHari = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

// Fungsi untuk menampilkan tanggal dalam format yang diinginkan
function tampilkanTanggal() {
  const tanggal = new Date();
  const hari = namaHari[tanggal.getDay()];
  const tanggalHariIni = tanggal.getDate();
  const bulan = namaBulan[tanggal.getMonth()];
  const tahun = tanggal.getFullYear();

  // Mengambil jam, menit, dan detik
  let jam = tanggal.getHours();
  const menit = tanggal.getMinutes().toString().padStart(2, "0");
  const detik = tanggal.getSeconds().toString().padStart(2, "0");

  // Mengatur format AM atau PM
  const amPm = jam >= 12 ? "PM" : "AM";
  jam = jam % 12 || 12; // Konversi ke format 12 jam

  const tanggalLengkap = `${hari}, ${tanggalHariIni} ${bulan} ${tahun}`;
  const waktu = `${jam}:${menit}:${detik}  ${amPm}`;
  document.getElementById("tanggal").innerText = tanggalLengkap;
  document.getElementById("waktu").innerText = waktu;
}

// Panggil fungsi untuk menampilkan tanggal saat halaman dimuat
setInterval(tampilkanTanggal, 1000);
tampilkanTanggal();

const thumbnails = document.querySelectorAll(".thumbnail");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");
const fullImage = document.getElementById("full-image");
function showOverlay(imageSrc) {
  fullImage.src = imageSrc;
  overlay.style.display = "flex";
}
function hideOverlay() {
  overlay.style.display = "none";
}
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const imageSrc = thumbnail.getAttribute("data-image");
    showOverlay(imageSrc);
  });
});
closeButton.addEventListener("click", () => {
  hideOverlay();
});
fullImage.addEventListener("click", () => {
  hideOverlay();
});
