let token = `6205c51f2f31438ab76389b3644da184`;
let html = ``;

function laLiga() {
    let xhttp = new XMLHttpRequest ();
    let url = `http://api.football-data.org/v2/competitions/PD/matches/?matchday=31`;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let result = JSON.parse (xhttp.responseText);
            result.matches.forEach(laLigaResult);
            document.getElementById('result').innerHTML = html;
        }
    }
    xhttp.open ("GET", url, true);
    xhttp.setRequestHeader ('X-Auth-Token', token);
    xhttp.send();
}

function laLigaResult(match){
    html +=`
    <div>
    <table class="font">
      <td>${match.homeTeam.name}</td>
      <td>-</td>  
      <td>${match.awayTeam.name}</td>
      <td>${match.score.fullTime.homeTeam} : ${ match.score.fullTime.awayTeam}</td>
    </div>`
}
