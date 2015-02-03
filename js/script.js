///////////////////////////////////////////////
/**
// Author: Virginia DeLorenzo 
// Creation Date: 
// Revised: 
// Note: Short app to slide the front page 
// to reveal a dashboard or menu.
*/
///////////////////////////////////////////////
var openSize = "75rem";
var menuOpen = true;
var menu = O("menu");
var contentDiv = O("content");
window.onload = init;
window.onresize = resize;
//====== Event Handlers ================
menu.onclick = toggleMenu;

//-----------------------------------


//====== Functions ======================
function init(){
	resize();
	toggleMenu();
}
//-------------------------
function resize(){
    S(document.documentElement).fontSize = innerWidth/100 + "px";
}
//-------------------------
function toggleMenu(){
	if(menuOpen){
		closeMenu();
	}
	else{
		openMenu();
	}
	
	////// Helper Functions //////
	function closeMenu(){
		S("front").width = "100rem";
		menuOpen = false;
	}
	function openMenu(){
		S("front").width = openSize;
		menuOpen = true;
		//alert("Will open the menu!");
	}
	////////////////////////////
}
//-------------------------------






