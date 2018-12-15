  var filas=10;
  var Columnas=10;
  
  var posiciones = {};

  
  function vecindario($el,fila,columna){
    for(var i=0;i<fila;i++){
      var $fil = $('<tr>')
      var index = 'x'+i;
      posiciones[index] = {};
      for(var j=0;j<columna;j++){
        var $td = $('<td data-event="click : panel.nuevovecino" data-bind="text: panel.x' + i + '.y' + j + '">');
        var index2 = 'y'+j;
        posiciones[index][index2] = '';
        $fil.append($td);
      }
      $el.append($fil);
    }
  }
  vecindario($('.content'),filas,Columnas);
