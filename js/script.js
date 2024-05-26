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
  const waktu = `${jam}:${menit}:${detik} ${amPm}`;

  // Memastikan elemen dengan id 'tanggal' dan 'waktu' ada sebelum mengaksesnya
  const tanggalElement = document.getElementById("tanggal");
  const waktuElement = document.getElementById("waktu");

  if (tanggalElement) {
    tanggalElement.innerText = tanggalLengkap;
  }
  if (waktuElement) {
    waktuElement.innerText = waktu;
  }
}

// Fungsi untuk menunjukkan overlay dengan gambar penuh
function showOverlay(imageSrc) {
  const overlay = document.getElementById("overlay");
  const fullImage = document.getElementById("full-image");
  if (overlay && fullImage) {
    fullImage.src = imageSrc;
    overlay.style.display = "flex";
  }
}

// Fungsi untuk menyembunyikan overlay
function hideOverlay() {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}

// Menambahkan event listener ketika DOM sudah sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Panggil fungsi untuk menampilkan tanggal saat halaman dimuat
  setInterval(tampilkanTanggal, 1000);
  tampilkanTanggal();

  // Menambahkan event listener ke thumbnail
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const imageSrc = thumbnail.getAttribute("data-image");
      if (imageSrc) {
        showOverlay(imageSrc);
      }
    });
  });

  // Menambahkan event listener untuk menutup overlay
  const closeButton = document.getElementById("close-button");
  const fullImage = document.getElementById("full-image");

  if (closeButton) {
    closeButton.addEventListener("click", hideOverlay);
  }
  if (fullImage) {
    fullImage.addEventListener("click", hideOverlay);
  }
});
