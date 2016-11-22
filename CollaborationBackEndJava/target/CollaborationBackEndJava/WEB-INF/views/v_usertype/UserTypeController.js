'use strict';

app.controller('UserTypeController', ['$scope', 'UserTypeService', function($scope, UserTypeService) 
{
	var self = this;
	//initlize object
	self.usertype = {userid:'',username:''};
	
	//For usertype collection
    self.usertypes=[];
    
    
    self.getAllUserTypes = function()
    {
    	UserTypeService.getAllUserTypes()
    		.then(
    				function(d) {
    					self.usertypes = d;
    				},
    				function(errResponse){
    					console.error('Error while fething records from table');
    				}
    			);
    };
    
    self.userTypeUpdate = function(usertype){
    	UserTypeService.userTypeUpdate(usertype)
    		.then(
    				self.getAllUserTypes,
    				function(errResponse)
    				{
    					console.error('Error while creating record');
    				}
    		);
    	}
    
    self.getUserTypeByID - function(usertypeid){
    	UserTypeService.getUserTypeByID(usertypeid)
    		.then(
    				function(d)
    				{
    					self.usertype = d;
    				},
    				function(errResponse){
    					console.error('Error while fething records from table');
    				}
    		);
       }
    }
])