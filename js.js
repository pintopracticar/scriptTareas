function controlaTareas($scope){
        // Booleano util en la validacion de tareas repetidas
        var igualdad = false;
        var id = 1;
        // Array que contendra todos los objetos (tarea, fecha y hecho)
	$scope.tareas = [];
	
        // Cuando el usuario presiona el boton submit
	$scope.submit = function(){
            // Esto revisara tarea por tarea dentro del Array a ver si encuentra repeticiones
            angular.forEach($scope.tareas, function cheqIguales(tarea){
                    if(tarea.texto == $scope.texto){
                        igualdad = true;
                        $scope.feedback = 'No puede repetir las tareas en la lista.';
                        $scope.texto = '';
                        igualdad = false;
                    };
                });
                
            // Si el usuario completo el texto y la fecha...
            if ($scope.texto && $scope.fecha){
                //Formateamos la fecha
		var dia = $scope.fecha.getDate();
                var mes = $scope.fecha.getMonth()+1;
                var anio = $scope.fecha.getFullYear();
                var fechaFormateada = dia+'/'+mes+'/'+anio;
                // Si la tarea no esta repetida, entonces hay que agregarla al array tareas
                if(igualdad == false){
                $scope.tareas.push({texto:$scope.texto, fecha:fechaFormateada, hecho: false, id: id});
                $scope.feedback = 'Tarea agregada exitosamente';
                id++;
		$scope.texto = '';
		$scope.fecha = '';
		$scope.hecho = '';
                igualdad == false;
                }
                //Si el usuario completo solamente el texto
            } else if ($scope.texto){
		if(igualdad == false){
                $scope.tareas.push({texto:$scope.texto, fecha:$scope.fecha, hecho: false, id: id});
                $scope.feedback = 'Tarea agregada exitosamente';
                id++;
		$scope.texto = '';
		$scope.fecha = '';
		$scope.hecho = '';
                igualdad == false;
                }
                //No hay texto? Entonces completar el campo requerido
            } else if ($scope.texto==null) {
                $scope.feedback = 'Complete el campo requerido por favor (descripcion).';
            }
	}
	
        //Funcion para verificar cuantas tareas restan por realizarse
	$scope.restantes = function(){
		cuenta = 0;
		angular.forEach($scope.tareas, function(tarea){
			cuenta += tarea.hecho ? 0 : 1;
		});
		return cuenta;
	}
};

// NO BORRAR, necesitara esto o el script estallara en menos de 10 milisegundos
angular.module('ngTestApp', []).controller('controlaTareas', controlaTareas);
controlaTareas.$inject = ['$scope'];
