document.getElementById("formBelajar").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById("pesan").value;

  if (!nama || !tanggal || !gender || !pesan) {
    alert("Harap isi semua data!");
    return;
  }

  const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
  const row = table.insertRow();

  row.insertCell(0).innerText = nama;
  row.insertCell(1).innerText = new Date(tanggal).toDateString();
  row.insertCell(2).innerText = gender;
  row.insertCell(3).innerText = pesan;
  row.insertCell(4).innerHTML = `<a href="#">Klik Disini</a>`;
  const delCell = row.insertCell(5);
  delCell.innerHTML = `<button class="delete-btn">🗑️</button>`;

  document.getElementById("formBelajar").reset();

  // Tombol delete
  delCell.querySelector(".delete-btn").addEventListener("click", function() {
    table.deleteRow(row.rowIndex - 1);
  });
});
