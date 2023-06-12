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



function alert1() { 
    alert("Tulis semua isian didalam kotak "); 
}



function cek_isian() {
  baris11 = document.querySelector("#b11");
  baris12 = document.querySelector("#b12");
  baris21 = document.querySelector("#b21");
  baris22 = document.querySelector("#b22");
  baris31 = document.querySelector("#b31");
  baris32 = document.querySelector("#b32");
  baris41 = document.querySelector("#b41");
  baris42 = document.querySelector("#b42");
  baris51 = document.querySelector("#b51");
  baris52 = document.querySelector("#b52");

  if (baris11.value.trim() === "2") {
      baris11.style.border = "green 2px solid"
  } else 
  {
      baris11.style.border = "red 2px solid"
  }
  if (baris12.value.trim() === "1") {
      baris12.style.border = "green 2px solid"
  } else 
  {
      baris12.style.border = "red 2px solid"
  }
  if (baris21.value.trim() === "3") {
      baris21.style.border = "green 2px solid"
  } else 
  {
      baris21.style.border = "red 2px solid"
  }
  if (baris22.value.trim() === "3") {
      baris22.style.border = "green 2px solid"
  } else 
  {
      baris22.style.border = "red 2px solid"
  }
  if (baris31.value.trim() === "2") {
      baris31.style.border = "green 2px solid"
  } else 
  {
      baris31.style.border = "red 2px solid"
  }
  if (baris32.value.trim() === "3") {
      baris32.style.border = "green 2px solid"
  } else 
  {
      baris32.style.border = "red 2px solid"
  }
  if (baris41.value.trim() === "4") {
      baris41.style.border = "green 2px solid"
  } else 
  {
      baris41.style.border = "red 2px solid"
  }
  if (baris42.value.trim() === "3") {
      baris42.style.border = "green 2px solid"
  } else 
  {
      baris42.style.border = "red 2px solid"
  }
  if (baris51.value.trim() === "0") {
      baris51.style.border = "green 2px solid"
  } else 
  {
      baris51.style.border = "red 2px solid"
  }
  if (baris52.value.trim() === "1") {
      baris52.style.border = "green 2px solid"
  } else 
  {
      baris52.style.border = "red 2px solid"
  }
}

function cek_isian1() {
  kolom11 = document.querySelector("#k11");
  kolom12 = document.querySelector("#k12");
  kolom21 = document.querySelector("#k21");
  kolom22 = document.querySelector("#k22");
  kolom31 = document.querySelector("#k31");
  kolom32 = document.querySelector("#k32");
  kolom41 = document.querySelector("#k41");
  kolom42 = document.querySelector("#k42");
  kolom51 = document.querySelector("#k51");
  kolom52 = document.querySelector("#k52");
  kolom61 = document.querySelector("#k61");
  kolom62 = document.querySelector("#k62");

  if (kolom11.value.trim() === "2") {
      kolom11.style.border = "green 2px solid"
  } else 
  {
      kolom11.style.border = "red 2px solid"
  }
  if (kolom12.value.trim() === "1") {
      kolom12.style.border = "green 2px solid"
  } else 
  {
      kolom12.style.border = "red 2px solid"
  }
  if (kolom21.value.trim() === "3") {
      kolom21.style.border = "green 2px solid"
  } else 
  {
      kolom21.style.border = "red 2px solid"
  }
  if (kolom22.value.trim() === "3") {
      kolom22.style.border = "green 2px solid"
  } else 
  {
      kolom22.style.border = "red 2px solid"
  }
  if (kolom31.value.trim() === "5") {
      kolom31.style.border = "green 2px solid"
  } else 
  {
      kolom31.style.border = "red 2px solid"
  }
  if (kolom32.value.trim() === "5") {
      kolom32.style.border = "green 2px solid"
  } else 
  {
      kolom32.style.border = "red 2px solid"
  }
  if (kolom41.value.trim() === "1") {
      kolom41.style.border = "green 2px solid"
  } else 
  {
      kolom41.style.border = "red 2px solid"
  }
  if (kolom42.value.trim() === "0") {
      kolom42.style.border = "green 2px solid"
  } else 
  {
      kolom42.style.border = "red 2px solid"
  }
  if (kolom51.value.trim() === "0") {
      kolom51.style.border = "green 2px solid"
  } else 
  {
      kolom51.style.border = "red 2px solid"
  }
  if (kolom52.value.trim() === "1") {
      kolom52.style.border = "green 2px solid"
  } else 
  {
      kolom52.style.border = "red 2px solid"
  }
  if (kolom61.value.trim() === "0") {
      kolom61.style.border = "green 2px solid"
  } else 
  {
      kolom61.style.border = "red 2px solid"
  }
  if (kolom62.value.trim() === "1`") {
      kolom52.style.border = "green 2px solid"
  } else 
  {
      kolom62.style.border = "red 2px solid"
  }
}


function cek_isian2(){
  kolomd1 = document.querySelector("#d1");
  kolomd2 = document.querySelector("#d2");
  kolomd3 = document.querySelector("#d3");
  kolomd4 = document.querySelector("#d4");

  if (kolomd1.value.trim() === "ruang olahraga") {
    kolomd1.style.border = "green 2px solid"
} else 
{
    kolomd1.style.border = "red 2px solid"
}
if (kolomd2.value.trim() === "luka kecil") {
    kolomd2.style.border = "green 2px solid"
} else 
{
    kolomd2.style.border = "red 2px solid"
}
if (kolomd3.value.trim() === "4a") {
    kolomd3.style.border = "green 2px solid"
} else 
{
    kolomd3.style.border = "red 2px solid"
}
if (kolomd4.value.trim() === "4a") {
    kolomd4.style.border = "green 2px solid"
} else 
{
    kolomd4.style.border = "red 2px solid"
}
}