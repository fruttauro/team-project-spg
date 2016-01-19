var tIn = ['zoomIn', 'zoomInUp', 'rollIn', 'lightSpeedIn', 'flipInX'];
var tOut = ['rotateOutDownRight', 'hinge', 'rollOut', 'lightSpeedOut', 'flipOutX'];
window.location.href.split('#')[0];
$(".questionSelect > a, .btn").click(function(){
    window.onhashchange = function(e){
        var rTIn = tIn[Math.floor(Math.random() * tIn.length)];
        var rTOut = tOut[Math.floor(Math.random() * tOut.length)];
         
        var oDiv = e.oldURL.split("#")[1];
        var nDiv = e.newURL.split("#")[1];
        
        var oldDiv = document.getElementById(oDiv);
        var newDiv = document.getElementById(nDiv);
         
        if (!oldDiv == null) {
            oldDiv.className='cover-container hidden';
        }
         
        newDiv.getElementsByClassName('cover-container')[0].className='cover-container ' + rTIn;
         
    }
});
 
function removeHash () {
    history.pushState("", document.title, window.location.pathname + window.location.search);
}
removeHash();