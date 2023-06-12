// function selesai() {
//     const jno1 = document.querySelector('#jno1')
//     const jno2 = document.querySelector('#jno2')
//     const jno3 = document.querySelector('#jno3')
//     const jno4 = document.querySelector('#jno4')
//     const jno5 = document.querySelector('#jno5')
//     const jno6 = document.querySelector('#jno6')
//     const jno7 = document.querySelector('#jno7')
//     const jno8 = document.querySelector('#jno8')
//     const jno9 = document.querySelector('#jno9')
//     const jno10 = document.querySelector('#jno10')

// const rno1 = document.querySelector('#rno1')
// const rno2 = document.querySelector('#rno2')
// const rno3 = document.querySelector('#rno3')
// const rno4 = document.querySelector('#rno4')
// const rno5 = document.querySelector('#rno5')
// const rno6 = document.querySelector('#rno6')
// const rno7 = document.querySelector('#rno7')
// const rno8 = document.querySelector('#rno8')
// const rno9 = document.querySelector('#rno9')
// const rno10 = document.querySelector('#rno10')
// const nilai = document.querySelector('#nilai')

// let response
// let poin = 0 
// if(jno1.checked){
//     response = 'Jawaban Kamu Benar'
//     rno1.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno1.style = 'color:red;'
// }
//     rno1.innerHTML = response

// if(jno2.checked){
//     response = 'Jawaban Kamu Benar'
//     rno2.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno2.style = 'color:red;'
// }
// rno2.innerHTML = response

// if(jno3.checked){
//     response = 'Jawaban Kamu Benar'
//     rno3.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno3.style = 'color:red;'
// }
// rno3.innerHTML = response
    
// if(jno4.checked){
//     response = 'Jawaban Kamu Benar'
//     rno4.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno4.style = 'color:red;'
// }
//     rno4.innerHTML = response

// if(jno5.checked){
//     response = 'Jawaban Kamu Benar'
//     rno5.style = 'color:green;'
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno5.style = 'color:red;'
// }
//     rno5.innerHTML = response
    
// if(jno6.checked){
//     response = 'Jawaban Kamu Benar'
//     rno6.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno6.style = 'color:red;'
// }
//     rno6.innerHTML = response
    
// if(jno7.checked){
//     response = 'Jawaban Kamu Benar'
//     rno7.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno7.style = 'color:red;'
// }
//     rno7.innerHTML = response
        
// if(jno8.checked){
//     response = 'Jawaban Kamu Benar'
//     rno8.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno8.style = 'color:red;'
// }
//     rno8.innerHTML = response
// if(jno9.checked){
//     response = 'Jawaban Kamu Benar'
//     rno9.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno9.style = 'color:red;'
// }
//     rno9.innerHTML = response
// if(jno10.checked){
//     response = 'Jawaban Kamu Benar'
//     rno10.style = 'color:green;'
//     poin = poin+10
// }else{
//     response = 'Jawaban Kamu Salah'
//     rno10.style = 'color:red;'
// }
//     rno10.innerHTML = response


//     nilai.innerHTML = poin
// }




const myQuestions = [
	{
		question:"<table border='1' style='margin-left: 50px; margin-bottom: 10px;'><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Denis</td><td><img src='shuttlecock.png' alt=' style='width: 20px; height: auto; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Fery</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Noni</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Anto</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Tomo</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Yanti</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Yeny</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Mety</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Dion</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Deka</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Toni</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Lili</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td>Iko</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Joni</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Keke</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Kiki</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr></table><p>Rudi, Eka, dan Indra sedang menanyakan olahraga yang disukai siswa kelas 4. Terdapat 2 olahraga yang ada disekolahnya yaitu badminton dan sepak bola.</p><p style='margin-bottom: 0px;'>Pada tabel ada berapa siswa yang menyukai olahraga badminton ada</p>",
		answers:{
			"a": "8 orang",
	        "b": "9 orang",
	        "c": "11 orang",
	        "d": "10 orang",
			"e": "12 orang"
		},
		correctAnswer:"b"
	},
    {
		question:"<table border='1' style='margin-left: 50px; margin-bottom: 10px;'><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Denis</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Fery</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Noni</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Anto</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Tomo</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Yanti</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Yeny</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Mety</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Dion</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Deka</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Toni</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Lili</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td>Iko</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Joni</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Keke</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Kiki</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr></table><p>Pada tabel ada berapa siswa yang menyukai olahraga sepakbola ada </p>",
		answers:{
			"a": "9 orang",
	        "b": "10 orang",
	        "c": "11 orang",
	        "d": "12 orang",
			"e": "13 orang"
		},
		correctAnswer:"a"
	},
    {
		question:"<table border='1' style='margin-left: 50px; margin-bottom: 10px;'><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Denis</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Fery</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Noni</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Anto</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Tomo</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Yanti</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Yeny</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Mety</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Dion</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Deka</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Toni</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Lili</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td>Iko</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Joni</td><td><img src='shuttlecock.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Keke</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Kiki</td><td><img src='shuttlecock2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='football2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr></table><p>Pada tabel ada berapa siswa yang menyukai kedua olahraga ada </p>",
		answers:{
			"a": "4 orang",
	        "b": "5 orang",
	        "c": "6 orang",
	        "d": "7 orang",
			"e": "8 orang"
		},
		correctAnswer:"b"
	},
    {
		question:"Perhatikan diagram berikut ini! <br><img src='1data.png' alt=' style='margin-top: 5px;'></p><p style='margin-top:15px;'>Jenis pelajaran yang paling banyak disukai oleh siswa kelas IV adalah</p>",
		answers:{
			"a": "Matematika",
	        "b": "IPA",
	        "c": "IPS",
	        "d": "Agama",
			"e": "Seni"
		},
		correctAnswer:"a"
	},
    {
		question:"Kiki sedang makan siang dikelas, ia sedang mengamati bekal yang dibawa teman-temannya. Terdapat 2 jenis bekal yaitu roti dan buah-buahan. Perhatikan tabel dibawah ini !</p><table border='1' style='margin-left: 50px; margin-bottom: 10px;'><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Anto</td><td><img src='fruits2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Kiki</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Mety</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Fery</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Keke</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Dion</td><td><img src='fruits2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Fery</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Noni</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Yosi</td><td><img src='fruits2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Yanti</td><td><img src='fruits2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Yeni</td><td><img src='fruits2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Ika</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Tomo</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Yuli</td><td><img src='fruits2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Ika</td><td><img src='fruits.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Loli</td><td><img src='fruits2.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='bread2.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr></table><p style='margin-top:15px;'>Dibawah ini yang merupakan diagram yang tepat untuk menunjukkan data pada tabel diatas adalah </p>",
        answers:{
			"a": "<img src='551.png' alt=''>",
	        "b": "<img src='552.png' alt=''>",
	        "c": "<img src='553.png' alt=''>",
	        "d": "<img src='554.png' alt=''>",
			"e": "<img src='555.png' alt=''>"
		},
		correctAnswer:"e"
	},
    {
		question:"Bu Feni sedang bertanya pada siswa kelas IV buku mana yang mereka sukai antara buku merah jambu dengan buku abu-abu</p><table border='1' style='margin-left: 50px; margin-bottom: 10px;'><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Lala</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Tika</td><td></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Dito</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td><td>Fery</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Denis</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td><td>Deka</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Tomo</td><td></td><td></td><td>Toni</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Deni</td><td></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Cika</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Eka</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td><td>Anto</td><td></td><td></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Tony</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Kana</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Kaila</td><td></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Dela</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td></tr></table>",
		answers:{
			"a": "9",
	        "b": "10",
	        "c": "11",
	        "d": "12",
			"e": "13"
		},
		correctAnswer:"a"
	},
    {
		question:"<table border='1' style='margin-left: 50px; margin-bottom: 10px;'><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Lala</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Tika</td><td></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Dito</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td><td>Fery</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Denis</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td><td>Deka</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Tomo</td><td></td><td></td><td>Toni</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Deni</td><td></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Cika</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Eka</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td><td>Anto</td><td></td><td></td></tr><tr style='padding-left: 5px; padding-right: 5px;'><td margin-top: 0px;>Tony</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Kana</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td margin-top: 0px;>Kaila</td><td></td><td><img src='open-book23.png' alt=' style='width: 50px; height: 50px;margin-top: 0px;'></td><td>Dela</td><td><img src='open-book.png' alt=' style='width: 50px; height: 50px; margin-top: 0px;'></td><td></td></tr></table><p>Diagram yang sesuai dengan tabel diatas adalah </p>",		
        answers:{
			"a": "<img src='71.png' alt=''>",
	        "b": "<img src='72.png' alt=''>",
	        "c": "<img src='73.png' alt=''>",
	        "d": "<img src='74.png' alt=''>",
			"e": "<img src='75.png' alt=''>"
		},
		correctAnswer:"d"
	},
    {
		question:"<img src='74.png' alt=''><p>Banyak siswa yang menyukai buku merah muda dan buku abu-abu ada ..</p>",
		answers:{
			"a": "2 orang",
	        "b": "3 orang",
	        "c": "4 orang",
	        "d": "5 orang",
			"e": "6 orang"
		},
		correctAnswer:"b"
	},
    {
		question:"Disekolah tono sedang diadakan lomba pekan olahraga. Ada beberapa lomba yang akan diadakan yaitu Tarik tambang, makan kerupuk, dan lompat karung Setiap kelas harus berpartisipasi dalam lomba.</p><img src='9991.png' alt='' style='margin-top: 5px;'><p style='margin-bottom: 0px;'><p>Diantara ketiga lomba, lomba tarik tambang memiliki pesertanya paling banyak yang berjumlah",
		answers:{
			"a": "14 orang",
	        "b": "10 orang",
	        "c": "12 orang",
	        "d": "11 orang",
			"e": "13 orang"
		},
		correctAnswer:"e"
	},
    {
		question:"<img src='9991.png' alt='' style='margin-top: 5px;'><p>Diantara ketiga lomba, lomba lompat karung memiliki peserta paling sedikit yang berjumlah </p>",
		answers:{
			"a": "7 orang",
	        "b": "4 orang",
	        "c": "8 orang",
	        "d": "6 orang",
			"e": "5 orang"
		},
		correctAnswer:"b"
	},
]