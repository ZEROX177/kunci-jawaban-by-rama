document.addEventListener("DOMContentLoaded", function() {
    // Muat jawaban dari Local Storage saat halaman dimuat
    loadAnswers();
});

function addAnswer() {
    const title = document.getElementById('questionTitle').value;
    const content = document.getElementById('answerContent').value;

    if (title === "" || content === "") {
        alert("Harap isi judul dan konten jawaban.");
        return;
    }

    // Ambil jawaban yang ada di Local Storage
    const answers = JSON.parse(localStorage.getItem("answers")) || [];

    // Tambahkan jawaban baru ke dalam array
    const newAnswer = { title: title, content: content };
    answers.push(newAnswer);

    // Simpan kembali ke Local Storage
    localStorage.setItem("answers", JSON.stringify(answers));

    // Tampilkan jawaban di halaman
    displayAnswer(newAnswer);

    // Bersihkan input
    document.getElementById('questionTitle').value = "";
    document.getElementById('answerContent').value = "";
}

function loadAnswers() {
    // Ambil jawaban dari Local Storage
    const answers = JSON.parse(localStorage.getItem("answers")) || [];

    // Tampilkan setiap jawaban yang tersimpan
    answers.forEach(answer => displayAnswer(answer));
}

function displayAnswer(answer) {
    const answerItem = document.createElement('li');
    answerItem.classList.add('answer-item');
    answerItem.innerHTML = `
        <h3>${answer.title}</h3>
        <p>${answer.content}</p>
    `;
    document.getElementById('answersList').appendChild(answerItem);
}
