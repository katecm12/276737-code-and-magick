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
    
  var max = -1;
  var maxIndex = -1;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }
 
  function round(time) {
    return Math.round(time); // попытка округлить время
};
        
  var histogramHeight = 150;              // px;
  var step = histogramHeight / (max - 0); // px;
  
  var barWidth = 40; // px; 
  var indent = 90;    // px;
  var initialX = 140; // px;
  var initialY = 80;  // px;
        
  for(var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
    ctx.fillText(names[i], 140 + indent * i, 250);    
    ctx.fillText(times[i], 140 + indent * i, times[i] * step); 
    ctx.fillStyle = 'rgba(255, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)';
    }   
    };    
 
}());

// ctx.fillRect(10, 10, 55, 50);   
// draws the rectangle at position 10, 10 with a width of 55 and a height of 50
// Высота гистограммы 150px.

// Ширина колонки 40px.

// Расстояние между колонками 50px.