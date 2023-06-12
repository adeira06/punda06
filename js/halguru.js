const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

// Munculkan popup tambah data saat tombol "Tambah Data" diklik
document.getElementById("tambah").addEventListener("click", function() {
  document.getElementById("tambahdata").style.display = "block";
});

// Sembunyikan popup saat tombol "Keluar" di dalam popup diklik
document.querySelector("#tambahdata .btn-close").addEventListener("click", function() {
  document.getElementById("tambahdata").style.display = "none";
});

// Fungsi untuk menambah data siswa
function tambah_data_siswa() {
  // Implementasikan fungsi tambah_data_siswa() sesuai kebutuhan Anda
}
