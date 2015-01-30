function controlaTareas($scope){
        var igualdad = false;
	
	$scope.tareas = [{'texto': 'Limpiar el living', 'fecha': '', 'hecho': false}]
	
	$scope.submit = function(){
            angular.forEach($scope.tareas, function cheqIguales(tarea){
                    if(tarea.texto == $scope.texto){
                        igualdad = true;
                        $scope.texto = '';
                        igualdad = false;
                    };
                });
            if ($scope.texto && $scope.fecha){
		var dia = $scope.fecha.getDate();
                var mes = $scope.fecha.getMonth()+1;
                var anio = $scope.fecha.getFullYear();
                var fechaFormateada = dia+'/'+mes+'/'+anio;
                if(igualdad == false){
                $scope.tareas.push({texto:$scope.texto, fecha:fechaFormateada, hecho: false});
		$scope.texto = '';
		$scope.fecha = '';
		$scope.hecho = '';
                igualdad == false;
                }
            } else if ($scope.texto){
		if(igualdad == false){
                $scope.tareas.push({texto:$scope.texto, fecha:$scope.fecha, hecho: false});
		$scope.texto = '';
		$scope.fecha = '';
		$scope.hecho = '';
                igualdad == false;
                }
            }
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
