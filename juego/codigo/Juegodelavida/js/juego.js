$(function(){
	var filas=20;
	var Columnas=20;
	
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
	

	var Panel = Gnd.Model.extend('panels');

	var panel = new Panel(posiciones);
  panel.set('delay',500);



panel.aumentarviviendas = function(){
  
  filas++;
  Columnas++;
  

  }
  panel.disminuirviviendas = function(){
  
  filas--;
  Columnas--;
  

  }


	panel.nuevovecino = function(el,ev,ese){
    var path = $(el).attr('data-bind').replace('text: panel.','')
    if(el.innerHTML == '') {
      this.set(path,'<div class="life-active"></div>');
    } else {
      this.set(path,'');
    }
  }
  panel.reglas = function(){
    var nacimiento = [];
    var muerte = [];
    var _this = this;
    for(var fil=0;fil<filas;fil++){
      for(var column=0;column<Columnas;column++){
        var x = fil;
        var y = column;

        var sobrevivir = 0;
        for(var i=x-1;i<=x+1;i++) {
          var index = i<0 ? (Columnas-1): i>(Columnas-1) ? 0 : i;
          for(var j=y-1;j<=y+1;j++) {
            var indexy = j<0 ? (filas-1) : j>(filas-1) ? 0 : j;
            if(!(index==fil && indexy==column)){ 
              if(_this['x'+index]['y'+indexy]) {
                sobrevivir++;
              } 
            }
          }
        }
        //reglas
        var current = _this['x'+fil]['y'+column];
        var path = 'x' + fil + '.y' + column;
        if(current != '') {
          switch (sobrevivir) {
            case 2 :
            case 3 :
              break;
            default :
              muerte.push(path);
          }
          
        } else {
          if(sobrevivir == 3) {
            nacimiento.push(path);    
          }
        }
      }
    }
    _.each(nacimiento, function(path){
      _this.set(path,_this.cambiovecino());
    });
    _.each(muerte,function(path){
      _this.set(path,'');
    })
  }
  panel.cambiovecino = function(){
    return '<div class="life-active"></div>';
  };
  panel.jugar= function(el,ev){
    var _this = this;
    if(!_this.jugando) {
      _this.jugando = setInterval(function(){
        panel.reglas();
      },_this.get('delay'))
    }
  }
  panel.parar = function(){
    if(this.jugando) {
      clearTimeout(this.jugando)
      this.jugando = null;
    }
  }

  panel.vaciar = function(){
    for(var i=0;i<filas;i++){
      for(var j=0;j<Columnas;j++){
        var path = 'x'+i+'.y'+j;
        this.set(path,'');
      }
    }
  }

   
  var viewModel = new Gnd.ViewModel(Gnd.$('.gnd-view')[0], {panel:panel});

  
})