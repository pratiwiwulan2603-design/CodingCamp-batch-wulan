document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const interest = document.getElementById("interest").value;

  if (!name || !email || !interest) {
    alert("Harap isi semua data!");
    return;
  }

  alert(`Terima kasih, ${name}! Kami akan menghubungi Anda dalam 1x24 jam.`);
  document.getElementById("contactForm").reset();
});
