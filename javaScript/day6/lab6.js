var api =new    XMLHttpRequest();
api.open('GET'," https://dummyjson.com/users")
api.send()
api.onreadystatechange=function()
{
    if(api.readyState==4&&api.responseText){

    }
}