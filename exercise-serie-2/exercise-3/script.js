let clicks = 0;

function Coockieclick(){
document.getElementById('clicked').value = ++clicks;
console.log(clicks)
if (clicks >= 10){
document.getElementById('clickes').style.display = 'block';
}
if (clicks >= 50)
document.getElementById('clickes2').style.display = 'block';
}
// function Coockieclick2(){
// document.getElementById('clicked').value = --clicks;
// }


let hasBeenClicked = false;
$('#clickes').click(function () {
    hasBeenClicked = true;
if (hasBeenClicked = true) {
    document.getElementById('clickes').style.display = 'none';    

console.log(clicks);
}
});

// $('#clickes2').click(function () {
//     hasBeenClicked = true;
// if (hasBeenClicked) {
//     document.getElementById('clickes2').style.display = 'none';
// }});

function multipl(){
    document.getElementById('clicked').value = Math.pow(clicks.value, 2 );
    console.log(clicks);
}


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));