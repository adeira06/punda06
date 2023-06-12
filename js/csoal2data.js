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




function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function cek_isian() {
    baris1 = document.querySelector("#a1");
    baris2 = document.querySelector("#a2");
    baris3 = document.querySelector("#a3");
    baris4 = document.querySelector("#a4");
    baris5 = document.querySelector("#b1");
    baris6 = document.querySelector("#b2");
    baris7 = document.querySelector("#b3");
    baris8 = document.querySelector("#b4");
    baris9 = document.querySelector("#b5");

    if (baris1.value.trim() === "2") {
        baris1.style.border = "green 2px solid"
    } else 
    {
        baris1.style.border = "red 2px solid"
    }
    if (baris2.value.trim() === "4") {
        baris2.style.border = "green 2px solid"
    } else 
    {
        baris2.style.border = "red 2px solid"
    }
    if (baris3.value.trim() === "5") {
        baris3.style.border = "green 2px solid"
    } else 
    {
        baris3.style.border = "red 2px solid"
    }
    if (baris4.value.trim() === "3") {
        baris4.style.border = "green 2px solid"
    } else 
    {
        baris4.style.border = "red 2px solid"
    }
    if (baris5.value.trim() === "2") {
        baris5.style.border = "green 2px solid"
    } else 
    {
        baris5.style.border = "red 2px solid"
    }
    if (baris6.value.trim() === "9") {
        baris6.style.border = "green 2px solid"
    } else 
    {
        baris6.style.border = "red 2px solid"
    }
    if (baris7.value.trim() === "4") {
        baris7.style.border = "green 2px solid"
    } else 
    {
        baris7.style.border = "red 2px solid"
    }
    if (baris8.value.trim() === "5") {
        baris8.style.border = "green 2px solid"
    } else 
    {
        baris8.style.border = "red 2px solid"
    }
    if (baris9.value.trim() === "3") {
        baris9.style.border = "green 2px solid"
    } else 
    {
        baris9.style.border = "red 2px solid"
    }
}


