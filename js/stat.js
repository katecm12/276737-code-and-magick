(function () {
    'use strict';
    window.renderStatistics = function (ctx, names, times) {
        ctx.strokeRect(110, 20, 420, 270);
        ctx.fillRect(110, 20, 420, 270);
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.fillStyle = 'white';
        ctx.strokeRect(100, 10, 420, 270);
        ctx.fillRect(100, 10, 420, 270);
        ctx.fillStyle = '#000';
        ctx.font = '16px PT Mono';
        ctx.fillText('Ура, вы победили!', 120, 40);
        ctx.fillText('Список результатов:', 120, 60);
        var max = 0;
        var leaderIdx;
        for (var i=0; i < times.length; i++) {
            if (times[i] > max) {
                max = times[i];
                leaderIdx = i;
            }
        }
        var histogramHeight = 150;//px
        var step = histogramHeight / (max-0);//px
        var barWidth = 40;//px
        var ident = 90;//px
        var initialX = 140;//px
        var initialY = 80;//px
        function random(min,max) {
            return min + Math.random()*(max-min);
        }
        function getColor(idx) {
            var defaultColor = 'rgba(0,0,255, ' + random(0.3, 0.8,) + ')';
            leaderColor = 'rgba(255, 0, 0, 1)';
            return idx === leaderIdx ? leaderColor : defaultColor;
        }
        for (var i=0; i < times.length; i++) {
            var realHeight = step * times[i];
            var x = initialX + indent * i;
            var y = initialY + (histogramHeight - realHeight);
            var roundedTime = Math.round(times[i]);
            ctx.fillStyle = getColor(i);
            ctx.fillRect(x, y, barWidth, realHeight);
            ctx.fillText(names[i], initialX + ident*i, 250);
            ctx.fillText(roundedTime, initialX + indent * i, y-5);
        }
    };
}());
        
        

