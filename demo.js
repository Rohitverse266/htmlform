var b=100;//global
function msg(){
    window.a=10//global 
    alert("value of a="+a);
}
function display(){
    alert("value of a="+window.a);
}