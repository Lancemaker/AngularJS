angular.module('minhasDiretivas',[])
.directive('meuPainel', function(){
    var ddo = {};
    ddo.restric = "AE";

    ddo.scope ={
        titulo : '@'
    };

    ddo.transclude = true;    
    return ddo.templateUrl = 'js/directives/meu-painel.html';
});
