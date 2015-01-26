function controlaTareas($scope){
	for(i=0; i == localStorage.length; i++){
		$scope.tareas[i] = localStorage.getItem( localStorage.key( i ) );
		console.log(JSON.parse(localStorage.getItem( localStorage.key( i ))));
	};
	
	$scope.tareas = [{'texto': 'Limpiar el living', 'fecha': '', 'hecho': false}]
	
	$scope.submit = function(){
		viaja = $scope.tareas.push({texto:$scope.texto, fecha:$scope.fecha, hecho: false});
		$scope.formTareas.texto = '';
		$scope.formTareas.fecha = '';
		$scope.formTareas.hecho = '';
		total++;
		localStorage.setItem('tarea', JSON.stringify(viaja));

	}
	
	$scope.restantes = function(){
		cuenta = 0;
		angular.forEach($scope.tareas, function(tarea){
			cuenta += tarea.hecho ? 0 : 1;
		});
		return cuenta;
	}
};

angular.module('ngTestApp', []).controller('controlaTareas', controlaTareas);
controlaTareas.$inject = ['$scope'];
