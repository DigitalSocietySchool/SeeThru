'use strict';
angular.module('ecosenseUiApp')
  .factory('apiService', ['$http', '$q', '$rootScope', '$cookies', 'authService', 'userModel', function ($http, $q, $rootScope, $cookies, authService, userModel) {
  $rootScope.baseURL = '//localhost/ecosense-platform/public/';
  var userToken = $cookies.get('userToken');
  if(typeof userToken !== 'undefined') {
    authService.setToken(userToken);
    $rootScope.loggedIn = true;
  }
  var baseURL = '//localhost/ecosense-platform/public/';

  var get = function(url, params) {
    return $http({
      method: 'get',
      url: encodeAuthToken(url+encodeQueryParameters(params))
    });
  };

  var post = function(url, data) {
    return $http({
      method: 'POST',
      url: encodeAuthToken(url),
      data: data
    });
  };

  var put = function(url, data) {
    return $http({
      method: 'PUT',
      url: encodeAuthToken(url),
      data: data
    });
  };

  var destroy = function(url) {
    return $http({
      method: 'DELETE',
      url: encodeAuthToken(url)
    });
  };

  var encodeQueryParameters = function(params) {
    var toReturn = '';
    if(params !== null) {
      var index = 0;
      for(var field in params) {
        var operator = '&';
        if(index === 0) {
          operator = '?';
        }
        toReturn += operator+field+'='+encodeURI(params[field]);
        index++;
      }
    }
    return toReturn;
  }; 

  var encodeAuthToken = function(url) {
    var token = authService.getToken();
    if(token !== null) {
      var operator = '&';
      if(url.indexOf('?') === -1) {
        operator = '?';
      }
      return url+= operator+'token='+token;
    }
    return url;
  }; 
    
  return {
    login: function(data) {
      return $q(function(resolve, reject) {
        return post(baseURL+'login', data).then(function(response){
          if(response.data.status === 200 && response.data.error === null) {
            authService.setToken(response.data.result.token);
            resolve(response);
          } else {
            reject(response.data.error);
          }
        }).catch(function(error) {
          reject(error);
        });
      });
    },
    getAuthenticatedUser: function() {
      return $q(function(resolve, reject) {
        return get(baseURL+'authuser').then(function(response){
          if(response.data.status === 200 && response.data.error === null) {
            var user = response.data.result.user;
            $rootScope.user = user;
            userModel.setUser(user);
            resolve(user);
          } else {
            reject(response.data.error);
          }
        }).catch(function(error) {
          reject(error);
        });
      });
    },
    getSingle: function(type, id, params) {
      return $q(function(resolve, reject) {
        return get(baseURL+type+'/'+id, params).then(function(response) {
          if(response.data.status === 200 && response.data.error === null) {
            resolve(response.data.result);  
          } else {
            reject(response.data.error);
          }
        }).catch(function(error) {
          reject(error);
        });
      });
    },
    getMultiple: function(type, params) {
      return $q(function(resolve, reject) {
        return get(baseURL+type, params).then(function(response) {
          if(response.data.status === 200 && response.data.error === null) {
            resolve(response.data.result);  
          } else {
            reject(response.data.error);
          }
        }).catch(function(error) {
          reject(error);
        });
      });
    },
    createObject: function(type, data) {
      return $q(function(resolve, reject) {
        return post(baseURL+type, data).then(function(response) {
          if(response.data.status === 200 && response.data.error === null) {
            resolve(response.data.result);  
          } else {
            reject(response.data.error);
          }
        }).catch(function(error) {
          reject(error);
        });
      });
    },
    updateObject: function(type, id, data) {
      return $q(function(resolve, reject) {
        return put(baseURL+type+'/'+id, data).then(function(response) {
          if(response.data.status === 200 && response.data.error === null) {
            resolve(response.data.result);  
          } else {
            reject(response.data.error);
          }
        }).catch(function(error) {
          reject(error);
        });
      });
    },
    deleteObject: function(type, id) {
      return $q(function(resolve, reject) {
        return destroy(baseURL+type+'/'+id).then(function(response) {
          if(response.data.status === 200 && response.data.error === null) {
            resolve(response.data.result);  
          } else {
            reject(response.data.error);
          }
        }).catch(function(error) {
          reject(error);
        });
      });
    }
  };
}]);