module.exports = {
  "endpoint": "http://dgzn.io:8080"
, "authenticated": function(){
    var token = localStorage.getItem('melody::authToken')
    if ( ! token || ! token.length )
      return false;
    return true;
  }
}
