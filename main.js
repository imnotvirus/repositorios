function myFunction(arr) {
  var out = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    out += '<ul>'
    out += '<li id="nome">' + arr[i].name + '</li>';
    out += '<li id="descricao">' + arr[i].description + '</li>';
    out += '<li id="linguagem">' + arr[i].language + '</li>';
    out += '<li id="link"><a href="' + arr[i].html_url + ' " target="_blank">' + 'Clique aqui para ver mais' + '</a></li>';
    out += '</ul>'
  }
  document.getElementsByClassName("github")[0].innerHTML = out;
}

document.getElementById('enviar').addEventListener("click", (event) => {
  event.preventDefault();
  var user = document.getElementById('user').value;

  var xmlhttp = new XMLHttpRequest();
  var url = `https://api.github.com/users/${user}/repos?per_page=100`;

  xmlhttp.onreadystatechange = function () {
    switch (this.readyState) {
      case 1:
        console.log("carregando");
        let out = "";
        out += '<img src="http://www.ajaxload.info/cache/D2/2C/2C/00/00/00/8-1.gif" alt="loading"/>'
        document.querySelector(".header").innerHTML = out;

      case 4:

        if (this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          mudaHeader();
          myFunction(myArr);
        }
        break;
    }

  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();

})

function mudaHeader() {
  var saida = ""
  saida +='<form action="">'
  saida +='      <button id="enviar">resetar</button>'
  saida +='</form>'
  document.querySelector(".header").innerHTML = saida;
}
