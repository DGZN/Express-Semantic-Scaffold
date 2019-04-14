module.exports = {
  "endpoint": "http://45.56.87.206:3131/"
, "authenticated": function(){
    var token = localStorage.getItem('melody::authToken')
    if ( ! token || ! token.length )
      return false;
    return true;
  }
}
