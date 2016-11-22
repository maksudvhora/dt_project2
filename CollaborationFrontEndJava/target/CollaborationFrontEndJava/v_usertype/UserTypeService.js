'user strict'

app.factory('UserTypeService', ['$http','$q','$rootScope', function($http, $q, $routeScope){
	
	var baseurl = 'http://localhost:8080/CollaborationBackEndJava';
	
	return {
		getAllUserTypes: function(){
			return $http.get(baseurl + "/allusertype").then(function (response) 
			{
				return response.data;
			},
			function(errResponse)
			{
                console.error('Error while fetching Users');
                deferred.reject(errResponse);
			}
		);
  	  }
	}
			
	userTypeUpdate = function (usertype){
		return $http.post(baseurl + '/addusertype/', usertype).then(function (response) 
		{
			return response.data;
		},
	    function(errResponse)
	    {
	        console.error('Error while creating User');
	        return $q.reject(errResponse);
	    }
	  );
	}

	getUserTypeByID = function (usertypeid)
	{
		return $http.get(baseurl + '/getusertype', usertypeid).then(function(response)
		{
			return response.data;
		},
		function(errResponse){
			console.error('Error while in fetching data');
			return $q.reject(errResponse);
		}
		);
	}
  }
]);