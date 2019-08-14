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
    if (this.readyState == 4 && this.status == 200) {
      var myArr = JSON.parse(this.responseText);
      myFunction(myArr);
    }

  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();

})


