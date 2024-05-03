function removeDiv(divID) {
    let divRemover = document.getElementById(divID);
    if (divRemover) {
        let parentDiv = divRemover.parentNode;
        parentDiv.removeChild(divRemover);
    }
}

function scrollToTop() {
    // Rola a página para o topo
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adiciona um efeito de rolagem suave (opcional)
    });
}

function scrollToDown() {
    window.scrollTo({
        top: 250,
        behavior: 'smooth' // Adiciona um efeito de rolagem suave (opcional)
    });
}

function playAudio(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
}

function pergunta01() {
    removeDiv('pergunta01');
    document.getElementById("pergunta02").style.display = "block";

    // document.getElementById('saldo').innerHTML = 'R$50,00';
    scrollToTop();

    playAudio('assets/check.html');
}

function pergunta02() {
    removeDiv('pergunta02');
    document.getElementById("pergunta03").style.display = "block";

    // document.getElementById('saldo').innerHTML = 'R$75,00';
    scrollToTop();

    playAudio('assets/check.html');
}

function pergunta03() {
    removeDiv('pergunta03');
    document.getElementById("pergunta04").style.display = "block";

    // document.getElementById('saldo').innerHTML = 'R$81,25';
    scrollToTop();

    playAudio('assets/check.html');
}

function pergunta04() {
    removeDiv('pergunta04');
    document.getElementById("pergunta05").style.display = "block";

    // document.getElementById('saldo').innerHTML = 'R$100,00';
    scrollToTop();

    playAudio('assets/check.html');
}

function pergunta05() {
    removeDiv('pergunta05');
    document.getElementById("finalizacao").style.display = "block";

    // document.getElementById('saldo').innerHTML = 'R$100,00';
    scrollToTop();

    playAudio('assets/check.html');
}