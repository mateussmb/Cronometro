" use strict "


var hh = 0;
var min = 0;
var seg = 0;

var tempo = 1000; //milesemos que valem 1 seg
var cron;
var ativo = true;

function start() {
    if (ativo==true) {
    cron= setInterval(() => { timer(); }, tempo);
    
        ativo=false;
    }
}

function pouse() {
    clearInterval(cron);
    ativo=true;
}

function zerar() {
    clearInterval(cron);
    ativo=true;
    hh = 0;
    min = 0;
    seg = 0;

    document.getElementById('counter').innerText = '00:00 '
    document.getElementById('seg').innerText = '.00 '
}   

function timer() {
    seg ++;

    if  (seg==60) {
    seg = 0;
    min++;
    
        if (min==60) {
            min = 0;
            hh++;
        }
    }

    var seg_f =  '.' + (seg <10 ? '0' + seg : seg)
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (min < 10 ? '0' + min : min);

    document.getElementById ('counter'). innerText = format;
    document.getElementById ('seg') .innerText = seg_f
}