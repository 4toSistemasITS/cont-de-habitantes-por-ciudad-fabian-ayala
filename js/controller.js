var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope) {
              $scope.letra="#322828";
              $scope.Tletra- 12;
              });


app.directive("direct1", function(){
		return {
			template:"Hola mundo"
		};

});

app.controller('lista',function ($scope){
	var nombres=
	['kevin','fabian','lady','angel','diego','joselyn'];
	$scope.data=nombres;
	
	
});


//-----suma de dos textos---
app.controller('listasuma',function ($scope){
	var ciudad=
	names=[{nombre:'uno',ciudad:'atlantis'},{nombre:'dos',ciudad:'jumangi'}]
	$scope.data2=ciudad;
	
});

app.controller ("lista2", function($scope){
	$scope.names=[1,2,3,5,5];
	$scope.getTotal= function (){
	var total=0;	
    for (var i=0; i< $scope.names.length; i++){
    	console.log($scope.names[i]);
    	total +=$scope.names[i];
    }
     return total;

	}

	$scope.getMayor= function(){
	var mayor =0;
	for (var i=0; i < $scope.names.length;i++){
		if (mayor <$scope.names [i]){
			mayor=($scope.names[i]);

		}
	}	
	return mayor;
	

	}

  $scope.getMenor= function(){
	var menor =100;
	for (var i=0; i  < $scope.names.length;i++){

		if (menor > $scope.names [i]){
			menor=($scope.names[i]);

		}
	}	
	return menor;
	

	}
	
	$scope.getCincos= function(){
	var cont5 =0;
	for (var i=0; i<$scope.names.length;i++){

		if (5 === $scope.names [i]){

			cont5=cont5+1;

		}
	}	
	return cont5;
	

	}

//-----contador de ciudades desde aca abajo comienza---
//-----contador de ciudades desde aca abajo comienza---
//-----contador de ciudades desde aca abajo comienza---

});
app.controller('listasuma2',function ($scope){
	var ciudad=
	names=[{nombre:'fabian',ciudad:'loja'},{nombre:'kevin',ciudad:'SinaloaMexico'},{nombre:'cristina',ciudad:'loja'},{nombre:'angel',ciudad:'SinaloaMexico'},{nombre:'katya',ciudad:'SinaloaMexico'},{nombre:'valeria',ciudad:'zamora'}]
	$scope.data2=ciudad;
	
});

app.controller ("lista3", function($scope){
	$scope.names=['loja','loja','SinaloaMexico','zamora','SinaloaMexico','SinaloaMexico'];
	$scope.getTotal= function (){
	var total=0;	
    for (var i=0; i< $scope.names.length; i++){
    	console.log($scope.names[i]);
    	total +=$scope.names[i];
    }
     return total;

	}

	
	$scope.getloja= function(){
	var contloja =0;
	for (var i=0; i<$scope.names.length;i++){

		if ('loja' === $scope.names [i]){

			contloja=contloja+1;

		}
	}	
	return contloja+','+'habitantes de la ciudad de  loja';
	

	}

	$scope.getsinaloa= function(){
	var contsina =0;
	for (var i=0; i<$scope.names.length;i++){

		if ('SinaloaMexico' === $scope.names [i]){

			contsina=contsina+1;

		}
	}	
	return contsina+','+'habitantes de la ciudad de  SinaloaMexico';
	

	}
	$scope.getzamora= function(){
	var contzamora =0;
	for (var i=0; i<$scope.names.length;i++){

		if ('zamora' === $scope.names [i]){

			contzamora=contzamora+1;

		}
	}	
	return contzamora+','+'habitantes de la ciudad de  zamora';
	

	}







});









