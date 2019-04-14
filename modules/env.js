module.exports = {
  "endpoint": "http://melodyentertainment.net"
, "authenticated": function(){
    var token = localStorage.getItem('melody::authToken')
    if ( ! token || ! token.length )
      return false;
    return true;
  }
}
