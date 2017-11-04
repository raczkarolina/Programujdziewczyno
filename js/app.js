
'use strict';
document.addEventListener('DOMContentLoaded', function() {
   
    var forDropdown=document.querySelector('.for-dropdown');
	var dropdown=document.querySelector('.dropdown');
    

forDropdown.addEventListener('mouseover', function(){
	dropdown.style.display='block';

});

forDropdown.addEventListener('mouseleave', function(){

	dropdown.style.display='none';
});


    })

