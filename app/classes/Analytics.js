class Analytics { //This is for calculating advanced statistics
    static ovr(plr) {
        return (plr.speed + plr.shooting + plr.strength + plr.iq)/4;
    }
    
    static team_ovr(team) {
        var starters_ovr = 0;
        for (var i = 0; i < team.players.starters.length; i++) {
            starters_ovr += Analytics.ovr(team.players.starters[i]);
        }
        starters_ovr /= team.players.starters.length;

        var bench_ovr = 0;
        for (var i = 0; i < team.players.bench.length; i++) {
            bench_ovr += Analytics.ovr(team.players.bench[i]);
        }
        bench_ovr /= team.players.bench.length;

        return (starters_ovr * 0.75) + (bench_ovr * 0.25);
    }
}