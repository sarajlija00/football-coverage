let token = `6205c51f2f31438ab76389b3644da184`;
let html = ``;
let stng = ``;

function laLiga() {
    let xhttp = new XMLHttpRequest ();
    let week = document.getElementById('week').value;
    //document.getElementById('week').value = '';
    let url = `http://api.football-data.org/v2/competitions/PD/matches/?matchday=` + week;  
    //ako je week false prvo odraditi gresku pa tek onda slati 
    if(!week){
        document.getElementById ('error').style = 'display:block';
        document.getElementById('error').innerHTML = 'Enter the week';
        document.getElementById('result').innerHTML = week;
        return;
    }
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let result = JSON.parse (xhttp.responseText);
            html = ""
            result.matches.forEach(laLigaResult);
            document.getElementById('result').innerHTML = html;
        }
        //namjenjeno da se ukloni error nakon ponovnog klika
        if (week !==''){
            document.getElementById('error').style = 'display:none';
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
    let weekTable = document.getElementById('weekTable').value;
    let url = `http://api.football-data.org/v2/competitions/PD/standings/?matchday=` + weekTable;
    xhttp.onreadystatechange =function() {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            let table = JSON.parse (xhttp.responseText);
            stng = "";
            console.log(table);
            table.standings[0].table.forEach(laLigaPos);
            document.getElementById('standing').innerHTML = stng;
            
        
       }
    }
   xhttp.open ("GET", url, true);
   xhttp.setRequestHeader ('X-Auth-Token', token);
   xhttp.send();
}

function laLigaPos(position){

    stng +=`
        <tr>
            <td class="text padd">${position.position}</td>
            <td class="text padd">${position.team.name}</td>
            <td class="text padd">${position.playedGames}</td>
            <td class="text padd">${position.won}</td>
            <td class="text padd">${position.draw}</td>
            <td class="text padd">${position.lost}</td>
            <td class="text padd">${position.goalsFor} : ${position.goalsAgainst}</td>    
            <td class="text padd">${position.points}</td>
        </tr>
        `
}