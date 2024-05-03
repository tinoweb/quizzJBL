document.addEventListener('DOMContentLoaded', function () {
    hideAllExcept();
});

function hideAllExcept() {
    // document.getElementById("popupContainer").style.display = "none";
    document.getElementById("pergunta01").style.display = "block";
    document.getElementById("pergunta02").style.display = "none";
    document.getElementById("pergunta03").style.display = "none";
    document.getElementById("pergunta04").style.display = "none";
    document.getElementById("pergunta05").style.display = "none";
    document.getElementById("finalizacao").style.display = "none";
}