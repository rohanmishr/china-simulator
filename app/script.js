function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remove(array, v) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === v) {
            array.splice(i, 1);
            break;
        }
    }
}

function switchPage(p) {
    $(".page").hide();
    $("#" + p).show();
}

$("#homepage").hide();
$("#standings").hide();

var team;
function init() {
    // Create the team
    var teamF = $("#select-team")[0].value;
    remove(OPP_TEAM_NAMES, teamF);
    var team_location;
    var team_name;
    if (teamF.split(" ").length == 3 && teamF.split(" ")[0] !== "Portland") {
        team_location = teamF.split(" ")[0] + " " + teamF.split(" ")[1];
        team_name = teamF.split(" ")[2];
    } else if (teamF.split(" ").length == 2) {
        team_location = teamF.split(" ")[0];
        team_name = teamF.split(" ")[1];
    } else {
        team_location = teamF.split(" ")[0];
        team_name = teamF.split(" ")[1] + " " + teamF.split(" ")[2];
    }

    team = new Team(team_name, team_location);
    team.staff.owner = $("#coach-name")[0].value;
    // Add new players to the team
    team.players.starters.push(
        //Teams start out with 1-3 star players
        Player.autoGeneratePlayer([1, 3], ["PG"]),
        Player.autoGeneratePlayer([1, 3], ["SG"]),
        Player.autoGeneratePlayer([1, 3], ["SF"]),
        Player.autoGeneratePlayer([1, 3], ["PF"]),
        Player.autoGeneratePlayer([1, 3], ["C"])
    );

    //generate bench, will be 1-2 stars (to start)
    team.players.bench.push(
        Player.autoGeneratePlayer([1, 2], ["PG"]),
        Player.autoGeneratePlayer([1, 2], ["SG"]),
        Player.autoGeneratePlayer([1, 2], ["SF"]),
        Player.autoGeneratePlayer([1, 2], ["PF"]),
        Player.autoGeneratePlayer([1, 2], ["C"])
    )

    //Fix duplicate jersey numbers
    var full_roster = team.players.starters.concat(team.players.bench); console.log(full_roster);
    //sort it into numerical order
    full_roster.sort(function (a, b) {
        return a.number - b.number;
    });
    //fix duplicate numbers
    for (var i = 0; i < full_roster.length; i++) {
        if (i > 0 && full_roster[i].number == full_roster[i - 1].number) {
            while(full_roster[i].number == full_roster[i - 1].number) {
                full_roster[i].number = randomInt(0, 99);
            }
        }
    }

    //generate basic information about other teams, just the OVR for game purposes
    for(var i = 0; i < OPP_TEAM_NAMES.length; i++) {
        teamF = OPP_TEAM_NAMES[i];
        if (teamF.split(" ").length == 3 && teamF.split(" ")[0] !== "Portland") {
            team_location = teamF.split(" ")[0] + " " + teamF.split(" ")[1];
            team_name = teamF.split(" ")[2];
        } else if (teamF.split(" ").length == 2) {
            team_location = teamF.split(" ")[0];
            team_name = teamF.split(" ")[1];
        } else {
            team_location = teamF.split(" ")[0];
            team_name = teamF.split(" ")[1] + " " + teamF.split(" ")[2];
        }

        OPP_TEAMS.push(new OppTeam(team_name, team_location, randomInt(50, 100)));
    }

    //update some html
    for(var i = 0; i < full_roster.length; i++) {
        $("#homepage-roster-inner").append(`
            <div class="roster-card">
                <h2>${full_roster[i].name}</h2>
                <h2>${full_roster[i].number}</h2>
                <h1>${full_roster[i].position}</h1>
            </div>
        `);
    }
    console.log("------------------------------ TEAM STARTERS ------------------------------");
    console.table(team.players.starters);
    console.log("------------------------------- TEAM BENCH --------------------------------");
    console.table(team.players.bench);

    switchPage("homepage");

    $("#homepage-header-team").html(team.location + " " + team.name);

    //send alerts
    setTimeout(function() {
        alert("Welcome to the NBA! You are the new owner of the " + team.location + " " + team.name + "!");
        alert("Your job is lead your team through the season and into the postseason, where the fans are desperate for some playoff success. Good luck!");
    }, 1);
}