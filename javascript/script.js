let token = `6205c51f2f31438ab76389b3644da184`;
let html = ``;

function laLiga() {
    let xhttp = new XMLHttpRequest ();
    let week = document.getElementById('week').value;
    let url = `http://api.football-data.org/v2/competitions/PD/matches/?matchday=` + week;   
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let result = JSON.parse (xhttp.responseText);
            console.log(result);
            html = ""
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
        <tr>
           <td class="text padd">${match.homeTeam.name}</td>
           <td class="text">-</td>  
           <td class="text padd">${match.awayTeam.name}</td>
           <td class="text">${match.score.fullTime.homeTeam} : ${match.score.fullTime.awayTeam}</td>
        </tr>
     `
}

function laLigaTable(position) {
    xhttp = new XMLHttpRequest();
    let url = `http://api.football-data.org/v2/competitions/PD/standings/?matchday=31`;
    xhttp.onreadystatechange =function() {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let table = JSON.parse (xhttp.responseText);
            console.log(table);
            table.standings.table.forEach(laLigaPos);
            document.getElementById('standing').innerHTML = html;
            
       }
    }
   xhttp.open ("GET", url, true);
   xhttp.setRequestHeader ('X-Auth-Token', token);
   xhttp.send();
}

function laLigaPos(position){
    html +=`
        <tr>
            <td class="text padd">${position.team.name}</td>
        </tr>
        `
}
