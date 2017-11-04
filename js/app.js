
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

//Zadanie 2

var buttons = document.querySelectorAll('.read-more');
 
 function showHide() {
	var textArea = this.previousElementSibling;
      if (textArea.style.display === 'none' || textArea.style.display === '') {
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } else {
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      };
  };
     // buttons[0].addEventListener('click', showHide);
 for (var i = 0; i <= buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
  });