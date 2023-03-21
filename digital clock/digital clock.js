function displaytime ()
{
let currenttime = new Date () ;
let hr = currenttime.getHours();
let min = currenttime.getMinutes();
let sec = currenttime.getSeconds();

document.querySelector('.hour').textContent = hr;
document.querySelector('.minute').textContent = min ;
document.querySelector('.seconds').textContent = sec ;

if (hr >= 12) 
{
    document.querySelector('.daynight').innerHTML = 'PM';
}
else {
    document.querySelector('.daynight').innerHTML = 'AM';
}
}

setInterval ( displaytime,1000) ;


