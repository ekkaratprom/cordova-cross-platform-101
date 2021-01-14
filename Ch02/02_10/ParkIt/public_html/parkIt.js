/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var latitude;
var longitude;
var parkedLatitude;
var parkedLongitude;

var storage;

function init(){
    document.addEventListener("deviceready", onDeviceReady, false);
    storage = window.localStorage;
}



