// ==UserScript==
// @name         Highlights
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        file:///C:/Users/Josh/Downloads/JavaScript%20Project.pdf
// @require http://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


//Get all the links by getting the ones that start with a, so the href links.
var links = document.querySelectorAll(' a'),
i, href, anchortext;

//run a loop for how many links i grabbed.
for(i = 0; i < links.length; i++) {

	//get the href link
  href = links[i].getAttribute('href');

  //grab the anchor text
  anchortext =  links[i].innerHTML;

  //check to make sure the anchor text is a url by grabbing the first 5 chars of the string.  which would be https
  anchortext2 = anchortext.substring(0,5);

  //new variable to hold href link that removes everything after ".com" to easily compare to anchor text
  href2 = href.substring(0, href.indexOf("com") + 'com'.length);

  //if the href doesn't match the text and it's not a url make yellow
  if(anchortext2 !== "https"){
	links[i].style.backgroundColor = 'yellow';
  }
  //if the href matches the anchortext make green.
  else if(href2 === anchortext) {
    links[i].style.backgroundColor = 'green';
  }
  //else make red
  else if(href2 !== anchortext) {
   links[i].style.backgroundColor = 'red';
  }

}
})();