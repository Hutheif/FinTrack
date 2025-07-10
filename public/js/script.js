document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("transactionForm");
  const tableBody = document.getElementById("transactionTableBody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const trxType = document.getElementById("trxType").value;
    const description = document.getElementById("description").value;

    if (amount && trxType && description) {
      const newRow = document.createElement("tr");
      newRow.classList.add("border-t", "border-white");
      newRow.innerHTML = `
                <td class="p-2">1</td>
                <td class="p-2">${amount}</td>
                <td class="p-2">${new Date().toISOString().split("T")[0]}</td>
                <td class="p-2">${trxType}</td>
                <td class="p-2">${description}</td>
            `;
      tableBody.appendChild(newRow);
    }

    let transaction = [{}];
  });
});
