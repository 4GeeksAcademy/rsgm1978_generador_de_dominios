/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let textForMap = ' '
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  pronoun.map((elementPronuon) => {
    adj.map((elementAdj) => {
      noun.map((elementNoun) => {
        textForMap += `<li class="list-group-item">
            ${elementPronuon}${elementAdj}${elementNoun}.es
            </li>`
          
    })
  })
})
  
  document.querySelector("#for-map").innerHTML = textForMap
  
  //write your code here
  
};
