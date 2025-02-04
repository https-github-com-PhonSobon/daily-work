let data = [];

function addRow() {
    const name = document.getElementById('name').value;
    const responsibility = document.getElementById('responsibility').value;
    const other = document.getElementById('other').value;

    if (name && responsibility) {
        const newRow = { name, responsibility, other };
        data.push(newRow);

        const tableBody = document.querySelector('#dataTable tbody');
        const row = tableBody.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = name;
        cell2.textContent = responsibility;
        cell3.textContent = other;

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('responsibility').value = '';
        document.getElementById('other').value = '';
    } else {
        alert('Please fill in the Name and Responsibility fields.');
    }
}

function storeData() {
    if (data.length > 0) {
        localStorage.setItem('dailyWorkData', JSON.stringify(data));
        alert('Data stored successfully!');
    } else {
        alert('No data to store.');
    }
}

function downloadAsImage() {
    const table = document.getElementById('dataTable');
    html2canvas(table).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'daily_work.png';
        link.click();
    });
}

function downloadAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const table = document.getElementById('dataTable');
    doc.autoTable({ html: table });
    doc.save('daily_work.pdf');
}