const inputCatatan = document.getElementById("inputCatatan");
const tambahButton = document.getElementById("tambahButton");
const selectHari = document.getElementById("selectHari");
const daftarCatatan = document.getElementById("daftarCatatan");

tambahButton.addEventListener("click", function () {
  const textCatatan = inputCatatan.value;
  const hariCatatan = selectHari.value;

  if (textCatatan.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = `${hariCatatan}: ${textCatatan}`;

    const hapusButton = document.createElement("Button");
    hapusButton.textContent = "x";
    li.appendChild(hapusButton);

    hapusButton.addEventListener("click", function () {
      li.remove();
    });
    daftarCatatan.appendChild(li);
    inputCatatan.value = "";
  }
});
