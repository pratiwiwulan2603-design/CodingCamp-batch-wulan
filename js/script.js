document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    const table = document.querySelector('table');
    const newRow = table.insertRow();
    
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = dob;
    newRow.insertCell(2).textContent = gender;
    newRow.insertCell(3).textContent = message;
    newRow.insertCell(4).innerHTML = '<a href="#">Klik Disini</a>';
    newRow.insertCell(5).innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
});

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}
