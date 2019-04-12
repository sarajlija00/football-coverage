let token = `6205c51f2f31438ab76389b3644da184`;
let html = ``;

function laLiga() {
    let xhttp = new XMLHttpRequest ();
    let url = `http://api.football-data.org/v2/competitions/PD/matches/?matchday=31`;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let result = JSON.parse (xhttp.responseText);
            result.matches.forEach(laLigaResult);
    console.log(html);

            document.getElementById('result').innerHTML = html;
        }
    }
    xhttp.open ("GET", url, true);
    xhttp.setRequestHeader ('X-Auth-Token', token);
    xhttp.send();
}

function laLigaResult(match){
    html +=`
        <tr>
            <td class="text">${match.homeTeam.name}</td>
            <td class="text">-</td>  
            <td class="text">${match.awayTeam.name}</td>
            <td class="text">${match.score.fullTime.homeTeam} : ${ match.score.fullTime.awayTeam}</td>
        </tr>
     `
}

function laLigaTable() {
    let xhttp = new XMLHttpRequest();
    let url = "http://api.football-data.org/2/competitions/PD/leagueTable";
    xhttp.onreadystatechange =function() {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let table = JSON.parse (xhttp.responseText);
            
        }
        
    }
    xhttp.open ("GET", url, true);
    xhttp.setRequestHeader ('X-Auth-Token', token);
    xhttp.send();
}
