function afficherLeaderboard(data) {
    for (let i = 0; i < data.length; i++) {
        document.getElementById('leaderboard').innerHTML += `
            <strong>${i+1}.</strong> ${data[i].bestScore}pts - ${data[i].nom}
            <hr/>
        `

    }
}

window.onload = () => {
    fetch('http://localhost:3000/leaderboard/listUsers', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then((results) => {
            afficherLeaderboard(results)
        })
        .catch(err => console.log(err))
}