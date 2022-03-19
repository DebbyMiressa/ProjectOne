"use strict";

function setId (){
    document.getElementsByClassName("main-section")[0].id = document.getElementsByClassName("main-section").innerHTML.split(' ').join('_');
}
