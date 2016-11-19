var app = angular.module("MyAppAgenda",[]);

/** el primer controller **/
app.controller("FirstController",["$scope","$http", function($scope,$http){
	$scope.nombre = "Jhon F";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{ 
			comentario: "buen tutorial",
			usuario: "jhon F"
		},
		{ 
			comentario: "buen tutorial2",
			usuario: "jhon Freddy"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}

	
}]);

app.controller("SecondController",["$scope","$http", function($scope,$http){
	/*<!-- consumir api rest con get-->*/
	//$http.get("https://jsonplaceholder.typicode.com/posts");
	/* array para listar los usuarios por get*/
	$scope.users = [];
	/* objeto dondese agregaran los nuevos uuarios*/
	$scope.NewUser = {};
	$http.get("http://localhost/api-app/public/users")
		.success(function(data){
			//console.log(data);
			$scope.users = data;
		}).error(function(err){

		});

	$scope.addUser = function(){
		$http.post("http://localhost/api-app/public/users/create",{
			name: $scope.NewUser.name,
			email: $scope.NewUser.email,
			password : $scope.NewUser.password,
			typeuser_id: 1
		})
		.success(function(data,status,headers,config){
			$scope.users.push($scope.NewUser);
			$scope.NewUser = {};
			if (data.status = true) {
				alert('se registro');
			};
		}).error(function(error,status,headers,config){
			if (error.status = false) {
				alert('error registro');
			};
		});	
	}
}]);

