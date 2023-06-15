class Team {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.players = {
            starters: [],
            bench: []
        };
        this.staff = {
            owner: null,
            head_coach: null,
            assistant_coach: null
        };
        this.stats = {
            wins: 0,
            losses: 0,
            finals_appearances: 0,
            finals_wins: 0,
        }
    }

    game() {
        //play a game
        
    }
}

class OppTeam {
    constructor(name, location, ovr) {
        this.name = name;
        this.location = location;
        this.ovr = ovr;
    }
}