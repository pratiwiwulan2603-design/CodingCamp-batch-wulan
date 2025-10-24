// SLIDER NAVIGATION
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let currentSlide = 0;

document.getElementById("btnNext").addEventListener("click", () => {
  if (currentSlide < slides.length - 1) currentSlide++;
  updateSlide();
});

document.getElementById("btnPrev").addEventListener("click", () => {
  if (currentSlide > 0) currentSlide--;
  updateSlide();
});

function updateSlide() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// FORM BELAJAR
document.getElementById("formBelajar")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  const table = document.querySelector("#dataTable tbody");
  const row = table.insertRow();
  row.insertCell(0).innerText = nama;
  row.insertCell(1).innerText = new Date(tanggal).toDateString();
  row.insertCell(2).innerText = gender;
  row.insertCell(3).innerText = pesan;
  const del = row.insertCell(4);
  del.innerHTML = `<button class="delete-btn">🗑️</button>`;
  del.querySelector("button").addEventListener("click", () => row.remove());

  e.target.reset();
});

// CONTACT FORM
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  alert(`Terima kasih, ${name}! Kami akan menghubungi Anda dalam 1x24 jam.`);
  e.target.reset();
});

// MESSAGE US OUTPUT
document.getElementById("messageForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("outNama").innerText = document.getElementById("msgNama").value;
  document.getElementById("outTanggal").innerText = document.getElementById("msgTanggal").value;
  document.getElementById("outGender").innerText = document.querySelector('input[name="msgGender"]:checked').value;
  document.getElementById("outPesan").innerText = document.getElementById("msgPesan").value;
});

// WAKTU REALTIME
setInterval(() => {
  const now = new Date();
  document.getElementById("currentTime").innerText = now.toLocaleString("id-ID");
}, 1000);
