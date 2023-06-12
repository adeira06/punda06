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
    ang11 = document.querySelector("#a11");
    ang12 = document.querySelector("#a12");
    ang21 = document.querySelector("#a21");
    ang22 = document.querySelector("#a22");
    ang31 = document.querySelector("#a31");
    ang32 = document.querySelector("#a32");
    ang41 = document.querySelector("#a41");
    ang42 = document.querySelector("#a42");

    if (ang11.value.trim() === "3") {
        ang11.style.border = "green 2px solid"
    } else 
    {
        ang11.style.border = "red 2px solid"
    }
    if (ang12.value.trim() === "2") {
        ang12.style.border = "green 2px solid"
    } else 
    {
        ang12.style.border = "red 2px solid"
    }
    if (ang21.value.trim() === "2") {
        ang21.style.border = "green 2px solid"
    } else 
    {
        ang21.style.border = "red 2px solid"
    }
    if (ang22.value.trim() === "3") {
        ang22.style.border = "green 2px solid"
    } else 
    {
        ang22.style.border = "red 2px solid"
    }
    if (ang31.value.trim() === "4") {
        ang31.style.border = "green 2px solid"
    } else 
    {
        ang31.style.border = "red 2px solid"
    }
    if (ang32.value.trim() === "4") {
        ang32.style.border = "green 2px solid"
    } else 
    {
        ang32.style.border = "red 2px solid"
    }
    if (ang41.value.trim() === "3") {
        ang41.style.border = "green 2px solid"
    } else 
    {
        ang41.style.border = "red 2px solid"
    }
    if (ang42.value.trim() === "3") {
        ang42.style.border = "green 2px solid"
    } else 
    {
        ang42.style.border = "red 2px solid"
    }
}

function cek_isian1() {
    cag11 = document.querySelector("#c11");
    cag12 = document.querySelector("#c12");
    cag21 = document.querySelector("#c21");
    cag22 = document.querySelector("#c22");
    cag31 = document.querySelector("#c31");
    cag32 = document.querySelector("#c32");
    cag41 = document.querySelector("#c41");
    cag42 = document.querySelector("#c42");
    cag51 = document.querySelector("#c51");
    cag52 = document.querySelector("#c52");
    cag61 = document.querySelector("#c61");
    cag62 = document.querySelector("#c62");

    if (cag11.value.trim() === "2") {
        cag11.style.border = "green 2px solid"
    } else 
    {
        cag11.style.border = "red 2px solid"
    }
    if (cag12.value.trim() === "2") {
        cag12.style.border = "green 2px solid"
    } else 
    {
        cag12.style.border = "red 2px solid"
    }
    if (cag21.value.trim() === "4") {
        cag21.style.border = "green 2px solid"
    } else 
    {
        cag21.style.border = "red 2px solid"
    }
    if (cag22.value.trim() === "5") {
        cag22.style.border = "green 2px solid"
    } else 
    {
        cag22.style.border = "red 2px solid"
    }
    if (cag31.value.trim() === "2") {
        cag31.style.border = "green 2px solid"
    } else 
    {
        cag31.style.border = "red 2px solid"
    }
    if (cag32.value.trim() === "1") {
        cag32.style.border = "green 2px solid"
    } else 
    {
        cag32.style.border = "red 2px solid"
    }
    if (cag41.value.trim() === "2") {
        cag41.style.border = "green 2px solid"
    } else 
    {
        cag41.style.border = "red 2px solid"
    }
    if (cag42.value.trim() === "0") {
        cag42.style.border = "green 2px solid"
    } else 
    {
        cag42.style.border = "red 2px solid"
    }
    if (cag51.value.trim() === "1") {
        cag51.style.border = "green 2px solid"
    } else 
    {
        cag51.style.border = "red 2px solid"
    }
    if (cag52.value.trim() === "2") {
        cag52.style.border = "green 2px solid"
    } else 
    {
        cag52.style.border = "red 2px solid"
    }
    if (cag61.value.trim() === "1") {
        cag61.style.border = "green 2px solid"
    } else 
    {
        cag61.style.border = "red 2px solid"
    }
    if (cag62.value.trim() === "2") {
        cag62.style.border = "green 2px solid"
    } else 
    {
        cag62.style.border = "red 2px solid"
    }
}



function cek_isian2(){
  kolomd1 = document.querySelector("#d1");
  kolomd2 = document.querySelector("#d2");
  kolomd3 = document.querySelector("#d3");

  if (kolomd1.value.trim() === "kolong meja") {
    kolomd1.style.border = "green 2px solid"
} else 
{
    kolomd1.style.border = "red 2px solid"
}
if (kolomd2.value.trim() === "buku tulis") {
    kolomd2.style.border = "green 2px solid"
} else 
{
    kolomd2.style.border = "red 2px solid"
}
if (kolomd3.value.trim() === "atas meja") {
    kolomd3.style.border = "green 2px solid"
} else 
{
    kolomd3.style.border = "red 2px solid"
}
}