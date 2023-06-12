// function kirim() {
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
		question:"Tabel merupakan daftar yg berisi sejumlah informasi yang biasanya berupa.</p>",
		answers:{
			"a": "Bilanagan ganjil",
	        "b": "Bilangan genap",
	        "c": "Kata-kata",
	        "d": "Angka",
			"e": "Kalimat"
		},
		correctAnswer:"c"
	},
    {
		question:"Pada penyusunan data terbagi 2 cara penyusunan yaitu</p>",
		answers:{
			"a": "Penyusunan diagram dan penyusunan tabel",
	        "b": "Penyusunan tabel dan penyusunan kata",
	        "c": "Penyusunan tabel dan penyusunan data",
	        "d": "Penyusunan data dan menyusunan diagram",
			"e": "Penyusunan data dan penyusunan huruf"
		},
		correctAnswer:"c"
	},
    {
		question:"Perhatikan nilai matematika siswa kelas IV dibawah ini! <br> 70, 60, 75, 90, 65, 70, 90, 85, 85, 55, 65, 85, 80, <br> 95, 100, 55, 50, 75, 85, 80, 60, 80, 70, 65, 75, 80 <br>Tabel yang tepat untuk data di atas adalah</p>",
		answers:{
			"a": "<table style='margin-left: 40px; width: 500px; margin-bottom: 15px;'><tr><th>Nilai</th><td>50</td><td>55</td><td>60</td><td>65</td><td>70</td><td>75</td><td>80</td><td>85</td><td>90</td><td>95</td><td>100</td></tr><tr><th>Banyak siswa</th><td>2</td><td>1</td><td>2</td><td>2</td><td>3</td><td>4</td><td>2</td><td>1</td><td>2</td><td>1</td><td>1</td></tr></table>",
	        "b": "<table style='margin-left: 40px; width: 500px; margin-bottom: 15px;'><tr><th>Nilai</th><td>50</td><td>55</td><td>60</td><td>65</td><td>70</td><td>75</td><td>80</td><td>85</td><td>90</td><td>95</td><td>100</td></tr><tr><th>Banyak siswa</th><td>1</td><td>2</td><td>2</td><td>3</td><td>3</td><td>3</td><td>4</td><td>4</td><td>2</td><td>1</td><td>1</td></tr></table>",
	        "c": "<table style='margin-left: 40px; width: 500px; margin-bottom: 15px;'><tr><th>Nilai</th><td>50</td><td>55</td><td>60</td><td>65</td><td>70</td><td>75</td><td>80</td><td>85</td><td>90</td><td>95</td><td>100</td></tr><tr><th>Banyak siswa</th><td>2</td><td>2</td><td>3</td><td>3</td><td>2</td><td>1</td><td>2</td><td>4</td><td>1</td><td>2</td><td>2</td></tr></table>",
	        "d": "<table style='margin-left: 40px; width: 500px; margin-bottom: 15px;'><tr><th>Nilai</th><td>50</td><td>55</td><td>60</td><td>65</td><td>70</td><td>75</td><td>80</td><td>85</td><td>90</td><td>95</td><td>100</td></tr><tr><th>Banyak siswa</th><td>2</td><td>3</td><td>4</td><td>1</td><td>2</td><td>2</td><td>3</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></table>",
			"e": "<table style='margin-left: 40px; width: 500px; margin-bottom: 15px;'><tr><th>Nilai</th><td>50</td><td>55</td><td>60</td><td>65</td><td>70</td><td>75</td><td>80</td><td>85</td><td>90</td><td>95</td><td>100</td></tr><tr><th>Banyak siswa</th><td>1</td><td>1</td><td>1</td><td>3</td><td>3</td><td>3</td><td>2</td><td>2</td><td>2</td><td>1</td><td>1</td></tr></table>"
		},
		correctAnswer:"b"
	},
    {
		question:"Perhatikan data diagram dibawah ini!</p><img src='41.png' alt='' style='margin-top: 0; width: 400px;'><p style='margin-bottom: 0px; margin-top: 10px;'>Pernyataan yang benar tentang data diagram diatas adalah </p>",
		answers:{
			"a": "Banyak anak yang memiliki nilai 85 terdapat lebih dari 5 orang",
	        "b": "Banyak anak yang memiliki nilai 75 terdapat 2 orang",
	        "c": "Banyak anak yang memiliki nilai kurang dari 60 terdapat lebih dari 2 orang",
	        "d": "Banyak anak yang memiliki nilai lebih dari 80 terdapat kurang dari 2 orang",
			"e": "Banyak anak yang memiliki nilai nilai 90 terdapat 5 orang"
		},
		correctAnswer:"a"
	},
    {
		question:"Dito adalah ketua siswa kelas 4. Ia sedang membeli sejumlah kebutuhan alat-alat tulis dikoperasi sekolah untuk teman-temannya disekolah. Berikut data barang-barang yang akan dibeli Dito</p><table style='margin-top: 10px; margin-left: 40px; width: 200px; padding: 10px;'><tr><th>Nama Barang</th><th>Jumlah</th></tr><tr><td>Buku Tulis</td><td>70</td></tr><tr><td>Buku Gambar</td><td>50</td></tr><tr><td>Pensil</td><td>40</td></tr><tr><td>Bolpoin</td><td>60</td></tr><tr><td>Penghapus</td><td>45</td></tr><tr><td>Penggaris</td><td>50</td></tr></table><p style='margin-bottom: 0px; margin-top: 10px;'>Diagram batang yang benar dalam menyajikan data tersebut adalah </p>",
		answers:{
			"a": "<img src='55.png' alt='' style='margin-top: 5px; width:350px;'>",
	        "b": "<img src='52.png' alt='' style='margin-top: 5px; width:350px;'>",
	        "c": "<img src='53.png' alt='' style='margin-top: 5px; width:350px;'>",
	        "d": "<img src='54.png' alt='' style='margin-top: 5px; width:350px;'>",
			"e": "<img src='51.png' alt='' style='margin-top: 5px; width:350px;'>"
		},
		correctAnswer:"e"
	},
    {
		question:"Disekolah tono diadakan pengukuran tinggi badan. Kemudian Ibuguru mengumpulkan teman-teman tono didalam ruangan uks danberbaris untuk melakukan pengukuran tinggi badan siswa kelas 4 SD.Data yang didapat setelah pengukuran yaitu 140 143 145 146 141 140 143 143 145 143 140 142 143 147 146 140 142 145 142 147 141 142 145 145 143 142 146 124 130 134. Tabel yang tepat untuk datadi atas adalah</p>",
		answers:{
			"a": "<table style='margin-top: 10px; margin-left: 40px; width: 450px;'><tr><th>Tinggi Badan</th><td>124</td><td>130</td><td>134</td><td>140</td><td>141</td><td>142</td><td>143</td><td>145</td><td>146</td><td>147</td></tr><tr><th>Banyak siswa</th><td>1</td><td>1</td><td>1</td><td>4</td><td>2</td><td>5</td><td>6</td><td>5</td><td>3</td><td>2</td></tr></table>",
	        "b": "<table style='margin-top: 10px; margin-left: 40px; width: 450px;'><tr><th>Tinggi Badan</th><td>124</td><td>130</td><td>134</td><td>140</td><td>141</td><td>142</td><td>143</td><td>145</td><td>146</td><td>147</td></tr><tr><th>Banyak siswa</th><td>3</td><td>2</td><td>1</td><td>2</td><td>4</td><td>2</td><td>3</td><td>4</td><td>1</td><td>2</td></tr></table>",
	        "c": "<table style='margin-top: 10px; margin-left: 40px; width: 450px;'><tr><th>Tinggi Badan</th><td>124</td><td>130</td><td>134</td><td>140</td><td>141</td><td>142</td><td>143</td><td>145</td><td>146</td><td>147</td></tr><tr><th>Banyak siswa</th><td>1</td><td>3</td><td>2</td><td>3</td><td>2</td><td>4</td><td>5</td><td>6</td><td>4</td><td>3</td></tr></table>",
	        "d": "<table style='margin-top: 10px; margin-left: 40px; width: 450px;'><tr><th>Tinggi Badan</th><td>124</td><td>130</td><td>134</td><td>140</td><td>141</td><td>142</td><td>143</td><td>145</td><td>146</td><td>147</td></tr><tr><th>Banyak siswa</th><td>2</td><td>2</td><td>2</td><td>3</td><td>1</td><td>1</td><td>1</td><td>4</td><td>4</td><td>5</td></tr></table>",
			"e": "<table style='margin-top: 10px; margin-left: 40px; width: 450px;'><tr><th>Tinggi Badan</th><td>124</td><td>130</td><td>134</td><td>140</td><td>141</td><td>142</td><td>143</td><td>145</td><td>146</td><td>147</td></tr><tr><th>Banyak siswa</th><td>1</td><td>1</td><td>1</td><td>1</td><td>3</td><td>2</td><td>4</td><td>4</td><td>3</td><td>1</td></tr></table>"
		},
		correctAnswer:"a"
	},
    {
		question:"Lala ingin mengetahui buah kesukaan teman-temannya dikelas. Lalabertanya kepada Beni, Tania, Jeni, Andi, Jojo, Tono, Dan Bela. Berikut data buah yang sudah disusun Lala. </p><table style='margin-top: 10px; margin-left: 40px; width: 250px; padding: 10px;'><tr><th>Nama Buah</th><th>Jumlah</th></tr><tr><td>Anggur</td><td>6</td></tr><tr><td>Apel</td><td>4</td></tr><tr><td>Nanas</td><td>2</td></tr><tr><td>Strowberry</td><td>3</td></tr><tr><td>Jeruk</td><td>4</td></tr><tr><td>Pisang</td><td>2</td></tr></table><p style='margin-bottom: 0px; margin-top: 10px;'>Berikut pernyataan yang benar tentang data di atas adalah </p>",		
        answers:{
			"a": "Teman-teman Lala lebih suka buah pisang dibandingkan dengan buah apel",
	        "b": "Teman-teman Lala suka dengan buah pisang dan nanas dibandingkan buah anggur",
	        "c": "Teman-teman Lala kurang suka dengan buah anggur",
	        "d": "Teman-teman Lala lebih suka buah anggur dibandingkan buah nanas",
			"e": "Teman-teman Lala suka buah nanas dan pisang"
		},
		correctAnswer:"d"
	},
    {
		question:"<table style='margin-top: 10px; margin-left: 40px; width: 250px; padding: 10px;'><tr><th>Nama Buah</th><th>Jumlah</th></tr><tr><td>Anggur</td><td>6</td></tr><tr><td>Apel</td><td>4</td></tr><tr><td>Nanas</td><td>2</td></tr><tr><td>Strowberry</td><td>3</td></tr><tr><td>Jeruk</td><td>4</td></tr><tr><td>Pisang</td><td>2</td></tr></table><p>Diagram yang tepat untuk menunjukkan data pada tabel diatas</p>",
		answers:{
			"a": "<img src='82.png' alt='' style='margin-top: 5px;'>",
	        "b": "<img src='81.png' alt='' style='margin-top: 5px;'>",
	        "c": "<img src='83.png' alt='' style='margin-top: 5px;'>",
	        "d": "<img src='84.png' alt='' style='margin-top: 5px;'>",
			"e": "<img src='85.png' alt='' style='margin-top: 5px;'>"
		},
		correctAnswer:"e"
	},
    {
		question:"Tono sedang menjaga toko buku ABC. Tono sedang mencatat hasil penjualan buku selama satu minggu yaitu</p><table style='margin-bottom: 10px; margin-left: 40px; width: 250px; padding: 10px;'><tr><th>Jenis Buku</th><th>Jumlah</th></tr><tr><td>Buku cerita</td><td>50</td></tr><tr><td>Buku Agama</td><td>85</td></tr><tr><td>Majalah</td><td>60</td></tr><tr><td>Komik</td><td>48</td></tr><tr><td>Buku Pengetahuan</td><td>57</td></tr><tr><td>Jumlah</td><td>300</td></tr></table><p style='margin-bottom: 0px;'>Diagram yang tepat untuk menunjukkan data pada tabel diatas </p>",
		answers:{
			"a": "<img src='91.png' alt='' style='margin-top: 5px;'>",
	        "b": "<img src='92.png' alt='' style='margin-top: 5px;'>",
	        "c": "<img src='93.png' alt='' style='margin-top: 5px;'>",
	        "d": "<img src='94.png' alt='' style='margin-top: 5px;'>",
			"e": "<img src='95.png' alt='' style='margin-top: 5px;'>"
		},
		correctAnswer:"e"
	},
    {
		question:"<img src='95.png' alt='' style='margin-top: 5px;'><p>Berikut pernyataan yang benar tentang diagram data diatas adalah </p>",
		answers:{
			"a": "Penjualan buku cerita lebih banyak dari pada komik",
	        "b": "Penjualan buku agama adalah penjualn paling besar",
	        "c": "Penjualan majalah sama dengan buku pengetahuan",
	        "d": "Penjualan buku pengetahuan lebih sedikit dari pada buku agama",
			"e": "Penjualan majalah lebih sedikit daripada komik"
		},
		correctAnswer:"b"
	},
]

