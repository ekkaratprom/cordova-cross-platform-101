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

function onDeviceReady(){
    var node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('type','text/css');
    if(cordova.platformId == 'ios'){
        node.setAttribute('href', 'parkItios.css');
        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefault();
    }else{
        node.setAttribute('href', 'parkItandroid.css');
        window.StatusBar.backgroundColorByHexString('#1565C0');
    }
    document.getElementsByTagName('head')[0].appendChild(node);
}

