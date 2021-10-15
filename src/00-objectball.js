const gameObjectz = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    }
}

function gameObject() {
    return gameObjectz
}

function homeTeamName() {
  return gameObject()['home']['teamName']
}

function numPointsScored(x) {
    let game = gameObjectz;
    for (let team in game) {
        for (let player in game[team]['players']) {
            if (player == `${x}`) {
                return game[team]['players'][player]["points"]
            }
        }
    }
}

function shoeSize(x) {
    let game = gameObjectz;
    for (let team in game) {
        for (let player in game[team]['players']) {
            if (player == `${x}`) {
                return game[team]['players'][player]["shoe"]
            }
        }
    }
}

function teamColors(x) {
    let game = gameObjectz;
    for (let team in game) {
        if (game[team]['teamName'] == `${x}`) {
            return game[team]['colors']
        }
    }
}

function teamNames() {
    let teams = []
    let game = gameObjectz;
    for (let team in game) {
        teams.push(game[team]['teamName'])
    }
    return teams
}

function playNumbers(x) {
    let numbers = []
    let game = gameObjectz;
    for (let team in game) {
        if (game[team]['teamName'] == x) {
            for (player in game[team][`players`]) {
                numbers.push(game[team][`players`][player]['number'])
            }
        }
    }
    return numbers
}

function playerStats(x) {
    let game = gameObjectz;
    for (let team in game) {
        for (let player in game[team]['players']) {
            if (player == `${x}`) {
                return game[team]['players'][player]
            }
        }
    }
}

function bigShoeRebounds() {
    let shoe = 0 
    let playa = []
    let name = ''
    let game = gameObjectz;
    for (let team in game) {
        for (let player in game[team]['players']) {
            if (game[team]['players'][player]['shoe']>shoe) {
                shoe = game[team]['players'][player]['shoe']
                playa = game[team]['players'][player]
                name = player
            }
        }
    }
    return `${name} ${playa['rebounds']} rebounds`
}

function mostPointsScored() {
    let points = 0 
    let playa = ''
    let game = gameObjectz;
    for (let team in game) {
        for (let player in game[team]['players']) {
            if (game[team]['players'][player]['points']>points) {
                points = game[team]['players'][player]['points']
                playa = player
            }
        }
    }
    return `${playa} ${points} points`
}

function winningTeam() {
    let home = 0
    let away = 0
    let homename = ''
    let awayname = ''
    let game = gameObjectz;
    for (let team in game) {
        if (team == 'home') {
            for (let player in game[team]['players']) {
                home = home + game[team]['players'][player]['points']
                homename = game[team]['teamName']
            }
        }
        if (team == 'away') {
            for (let player in game[team]['players']) {
                away = away + game[team]['players'][player]['points']
                awayname = game[team]['teamName']
            }
        }
    }
    return home > away? `${homename} ${home} points`:`${awayname} ${away} points`
}

function playerWithLongestName() {
    let name = ''
    let game = gameObjectz;
    for (let team in game) {
        for (let player in game[team]['players']) {
            if (player.length > name.length) {
                name = player
            }
        }
    }
    return name
}

function doesLongNameStealATon() {
    let name = playerWithLongestName()
    let steals = 0
    let moststeals = ''
    let game = gameObjectz;
    for (let team in game) {
        for (let player in game[team]['players']) {
            if (game[team]['players'][player]['steals'] > steals) {
                steals = game[team]['players'][player]['steals']
                moststeals = player
            }
        }
    }
    return name == moststeals ? true:false

}

console.log(numPointsScored('Brendan Haywood'))

console.log(shoeSize('Brendan Haywood'))

console.log(teamColors('Charlotte Hornets'))

console.log(teamNames())

console.log(playNumbers('Brooklyn Nets'))

console.log(playerStats('Alan Anderson'))

console.log(bigShoeRebounds())

console.log(mostPointsScored())

console.log(winningTeam())

console.log(playerWithLongestName())

console.log(doesLongNameStealATon())
