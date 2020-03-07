
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { HaikuChecker } from './haiku';

////////////////////////////////////////

$(document).ready(function () {
  $('form#enter').submit(function () {
    event.preventDefault();
    let textHaiku = $('.haiku-line').text();
    let fline = $('#fline').text();
    let sline = $('#sline').text();
    let tline = $('#tline').text();
    console.log(textHaiku);

    let myHaiku=new Haiku(textHaiku);


    let numberOfSyllables=0;
    // numberOfSyllables+=myHaiku.LocateFirstLineSyllables();
    // numberOfSyllables+=myHaiku.LocateSecondLineSyllables();
    numberOfSyllables+=myHaiku.LocateNumberOfSyllables();


  $("button#verify-haiku").click(function(event) {
    if (numberOfSyllables == 17) {
      $("#result").text("THIS IS A HAIKU! There are " + numberOfSyllables + " syllables");
    } else {
      $("#result").text("NOT A HAIKU. There are " + numberOfSyllables + " syllables");
    }

    console.log(numberOfSyllables);
  });



});
