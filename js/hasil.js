let tanggal = sessionStorage.getItem("tanggal")
let waktu = sessionStorage.getItem("waktu")
let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let nameUser = sessionStorage.getItem("nama")
let classUser = sessionStorage.getItem("kelas")
let questionLength = sessionStorage.getItem("questionLength")
let jwbSiswa = JSON.parse(sessionStorage.getItem("jawaban"))
let nextt = document.querySelector("#next")
let kett = document.querySelector("#ket")
let ulangi = document.querySelector("#ulangi")

console.log(jwbSiswa)

let quizResults = {}
quizResults.results = []

let result = {}

let note
let score = (parseInt(correctAnswer) / parseInt(questionLength)) * 100
if(score >= 65) {
    note = "Lulus"
    kett.style.color='green'
    kett.innerHTML = 'Selamat! Anda Telah Menyelesaikan Seluruh Materi pada Penyusunan Sata.'
    localStorage.setItem("unduh","unduh");
} else {
    note = "Tidak Lulus"
    kett.style.color='red'
    kett.innerHTML = 'Sayang Sekali Skor Anda Belum Memenuhi Kriteria Ketuntasan Minimal'
}
score = score < 100 ? score.toFixed(2) : score

result.nameUser = nameUser
result.classUser = classUser
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.tanggal = tanggal
result.waktu = waktu
result.scoreUser = score
result.noteUser = note

if(localStorage && localStorage.getItem('evaluasi')) {
    quizResults = JSON.parse(localStorage.getItem('evaluasi'))

    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('evaluasi', JSON.stringify(quizResults))
    clearResults()
} else {
    localStorage.setItem('evaluasi', JSON.stringify(quizResults))
    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('evaluasi', JSON.stringify(quizResults))
    clearResults()
}

function clearResults() {
    sessionStorage.setItem("correct", "")
    sessionStorage.setItem("wrong", "")
    sessionStorage.setItem("nama", "")
    sessionStorage.setItem("kelas", "")
    sessionStorage.setItem("tanggal", "")
    sessionStorage.setItem("waktu", "")
    sessionStorage.setItem("jawaban", "")
}

function newResults(tanggal, waktu, nameUser, classUser, numCorrect, numWrong, score) {

    let tanggalSkrg = document.querySelector("#tanggal")
    let waktuSkrg = document.querySelector("#waktu")
    let namaSiswa = document.querySelector("#namaSiswa")
    let kelasSiswa = document.querySelector("#kelasSiswa")
    let jawabanBenar = document.querySelector("#jawabanBenar")
    let jawabanSalah = document.querySelector("#jawabanSalah")
    let nilaiSiswa = document.querySelector("#nilaiSiswa")

    tanggalSkrg.innerHTML = `${tanggal}`
    waktuSkrg.innerHTML = `${waktu}`
    namaSiswa.innerHTML = `${nameUser}`
    kelasSiswa.innerHTML = `${classUser}`
    jawabanBenar.innerHTML = `${numCorrect}`
    jawabanSalah.innerHTML = `${numWrong}`
    nilaiSiswa.innerHTML = `${score}`
}

document.addEventListener("DOMContentLoaded", function(){
    let latihan = quizResults["results"].length
    let testNumber = 1

    if(result.nameUser != ""){
        newResults(quizResults["results"][latihan-1].tanggal, quizResults["results"][latihan-1].waktu, quizResults["results"][latihan-1].nameUser, quizResults["results"][latihan-1].classUser, quizResults["results"][latihan-1].correctAnswer, quizResults["results"][latihan-1].wrongAnswer, quizResults["results"][latihan-1].scoreUser)
    }

    let tryAgain = document.querySelector("#try-again")
    tryAgain.addEventListener("click", function(){
        location.href = 'soalE.html'
    })
})


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJ9mU5RasjOHqw75x2LKoeHPucdBgYJHM",
    authDomain: "punda-0612.firebaseapp.com",
    databaseURL: "https://punda-0612-default-rtdb.firebaseio.com",
    projectId: "punda-0612",
    storageBucket: "punda-0612.appspot.com",
    messagingSenderId: "490129650306",
    appId: "1:490129650306:web:25c1508e93dc6faea7ba9b"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let data = {
    nama : nameUser,
    kelas : classUser,
    nilai : score,
    jawaban: jwbSiswa,
    tanggal : tanggal,
    waktu : waktu
}

const database = firebase.database();
database.ref("evaluasi").push(data);


