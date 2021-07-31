document.getElementById("userScore").innerText=" Your Score =>  "+sessionStorage.getItem("score");
document.getElementById("userTimeTaken").innerText=sessionStorage.getItem("min")+" minutes "+sessionStorage.getItem("sec")+" seconds";

