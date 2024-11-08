function addAnswer() {
    const title = document.getElementById('questionTitle').value;
    const content = document.getElementById('answerContent').value;

    if (title === "" || content === "") {
        alert("Harap isi judul dan konten jawaban.");
        return;
    }

    const answerItem = document.createElement('li');
    answerItem.classList.add('answer-item');
    answerItem.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
    `;

    document.getElementById('answersList').appendChild(answerItem);

    document.getElementById('questionTitle').value = "";
    document.getElementById('answerContent').value = "";
}
