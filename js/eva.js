let selanjutnya = document.querySelector('.lanjut');
let datadiri = document.querySelector('.card-body');
namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
let kelasfix = '';

selanjutnya.addEventListener('click', function () {

    let cek = 0;
    if (namanya.value == "") {
        if (namanya.className.indexOf('tt_salah') == -1) {
            namanya.className += ' tt_salah';
        }
    } else {
        namanya.className = namanya.className.replace('tt_salah', '');
        cek += 1;

    }

    if (kelasnya.value == "0") {
        if (kelasnya.className.indexOf('tt_salah') == -1) {
            kelasnya.className += ' tt_salah';
        }
    } else {
        kelasnya.className = kelasnya.className.replace('tt_salah', '');
        if (kelasnya.value == "1") {
            kelasfix = "IV A";
        } else if (kelasnya.value == "2") {
            kelasfix = "IV B";
        }else if (kelasnya.value == "3") {
            kelasfix = "IV C";
        }else if (kelasnya.value == "4") {
        kelasfix = "IV D";
    } 
        cek += 1;
    }

    // console.log(sekolahfix);

    if (cek != 3) {
        alert("lengkapi dulu data dari anda");
    } else if (cek == 3) {
        document.getElementById('data').className += ' hilang';
        datadiri.className += ' hilang';
        document.getElementById('kiri').className = document.getElementById('kiri').className.replace('hilang', '');
        document.getElementById('kanan').className = document.getElementById('kanan').className.replace('hilang', '');
    }
});

function readlah() {
    var task = firebase.database().ref("kontrolkuis1/");
    let tmp = document.querySelector('body');

    task.on("child_added", function (data) {
        var taskvalue = data.val();

        if ((taskvalue.id == "12093499") && (taskvalue.nilai == 0)) {
            tmp.innerHTML += '<div class = "full" > <p>HALAMAN TIDAK DAPAT DIAKSES</p> </div>'
            // console.log('0');
        } else {
            // console.log('1');
        }



    });
}

window.onload = function () {
    namanya.value = "";
    kelasnya.value = value = "0";
    sekolah.value = value = "0";


    document.getElementById('kiri').className += ' hilang';
    document.getElementById('kanan').className += ' hilang';

    readlah();

}



// mengambil data dan menampilkanya

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
    
    cek = [];
    jwbs = [];
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * data.length) + 0;
            cek.push(angka);
        }
        // membuang angka yang sama
        cek = Array.from(new Set(cek));
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let nih = data[nilai]["soal" + nilai]["nih"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3,  nih];

            jwbs.push(bnr);

            let nomor = document.querySelectorAll(".soal #nomornya");
            nomor[i].innerHTML = i+1;

            //soal
            let soal = document.querySelectorAll(".bg_pertanyaan #soalnya");
            soal[i].innerHTML = soaldata;
            
            //pilihan a
            let piliha = document.querySelectorAll(".textnya #pilihannya0");
            piliha[i].innerHTML = jwb0;

            //pilihan b
            let pilihb = document.querySelectorAll(".textnya #pilihannya1");
            pilihb[i].innerHTML = jwb1;
            
            //pilihan c
            let pilihc = document.querySelectorAll(".textnya #pilihannya2");
            pilihc[i].innerHTML = jwb2;

            //pilihan d
            let pilihd = document.querySelectorAll(".textnya #pilihannya3");
            pilihd[i].innerHTML = jwb3;
            let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");
            
            for(let u=0; u<bg_pertanyaan.length; u++){
                if(u!=0){
                    if(bg_pertanyaan[u].className.indexOf('hilang') == -1){
                        bg_pertanyaan[u].className += " hilang";
                    }
                }
            }
        }
    }
}