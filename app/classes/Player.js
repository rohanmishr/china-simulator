/*
PLAYER STAR RATINGS
1 star players can have 30-60 ratins
2 star players can have 40-70 ratings
3 star players can have 50-80 ratings
4 star players can have 60-90 ratings
5 star players can have 70-100 ratings
*/

class Player {
    constructor(name, number, star, position) {
        this.name = name;
        this.number = number;
        this.star = star;
        this.position = position;
        this.stats = {
            fga: 0, // field goals attempted
            fgm: 0, // field goals made
            tpa: 0, // three pointers attempted
            tpm: 0, // three pointers made
            fta: 0, // free throws attempted
            ftm: 0, // free throws made
            oreb: 0, // offensive rebounds
            dreb: 0, // defensive rebounds
            ast: 0, // assists
            stl: 0, // steals
            blk: 0, // blocks
            to: 0, // turnovers
            
            // ratings
            speed: null,
            shooting: null,
            strength: null,
            intelligence: null
        };
    }

    static autoGeneratePlayer(fixed_star_range = null, fixed_positions = null) {
        var player = new Player(
            PLR_FIRST_NAMES[randomInt(0, PLR_FIRST_NAMES.length - 1)] + " " + PLR_LAST_NAMES[randomInt(0, PLR_LAST_NAMES.length - 1)],
            randomInt(0, 99),
            randomInt(1, 3),
            ["PG", "SG", "SF", "PF", "C"][randomInt(0, 4)]
        )

        if (fixed_star_range !== null) {
            player.star = randomInt(fixed_star_range[0], fixed_star_range[1]);
        }
        if (fixed_positions !== null) {
            player.position = fixed_positions[randomInt(0, fixed_positions.length - 1)];
        }

        // generate ratings
        if (player.star == 1) {
            player.speed = randomInt(30, 60);
            player.shooting = randomInt(30, 60);
            player.strength = randomInt(30, 60);
            player.intelligence = randomInt(30, 60);
        } else if (player.star == 2) {
            player.speed = randomInt(40, 70);
            player.shooting = randomInt(40, 70);
            player.strength = randomInt(40, 70);
            player.intelligence = randomInt(40, 70);
        } else if (player.star == 3) {
            player.speed = randomInt(50, 80);
            player.shooting = randomInt(50, 80);
            player.strength = randomInt(50, 80);
            player.intelligence = randomInt(50, 80);
        } else if (player.star == 4) {
            player.speed = randomInt(60, 90);
            player.shooting = randomInt(60, 90);
            player.strength = randomInt(60, 90);
            player.intelligence = randomInt(60, 90);
        } else if (player.star == 5) {
            player.speed = randomInt(70, 100);
            player.shooting = randomInt(70, 100);
            player.strength = randomInt(70, 100);
            player.intelligence = randomInt(70, 100);
        }

        return player;
    }
}