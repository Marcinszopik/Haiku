


export class HaikuChecker {
  constructor(fline, sline, tline) 
  {
    this.fline = fline;
    this.sline = sline;
    this.tline = tline;

  }

  {
    LocateNumberOfSyllables() {
      let characterArr = this.textHaiku.split('');
      const vowels = ["a","A","e","E","i","I","o","O","u","U"];
      let numberOfSyllables=0;
        // counts vowels
      for (var i =0; i < characterArr.length; i++) {
        if (characterArr[i] == "e" && characterArr[i+1]== " " && (characterArr[i-1] == "h" || characterArr[i-1] == "l" || characterArr[i-1] == "i") || (characterArr[i] == "u" && characterArr[i+1]== "e")) {
          numberOfSyllables += 1;
        }
        else if (characterArr[i] == "e" && (characterArr[i+1] == " " || characterArr[i+1] =="s")) {
          numberOfSyllables += 0;
        }
        else if (vowels.indexOf(characterArr[i]) != -1 && vowels.indexOf(characterArr[i+1]) != -1) {
  
          numberOfSyllables += 0;
        }
        else if (vowels.indexOf(characterArr[i]) != -1) {
          numberOfSyllables += 1;
        }
      }
      return numberOfSyllables;
    }
  }
  
  
 
}


// let newDate = new CalculateWD(2, 2020, 29);

// let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// console.log(days[newDate.zeller()]);
//alert('It was a ' + newDate.zeller + ' !' )

// export class CalculateWD {
//   constructor(month, year, date) {
//     this.month = month;
//     this.year = year;
//     this.date = date;
//   }
//   CalDayOfWeek(day, month, year) {
//     var a = Math.floor((14 - month) / 12);
//     var y = year - a;
//     var m = month + 12 * a - 2;
//     var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
//       Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
//     return d;
//   }
//     var daysofaweek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',
//     'Thursday', 'Friday', 'Saturday');
// var monthsofayear = new Array('January', 'February', 'March', 'April', 'May',
//   'June', 'July', 'August', 'September', 'October', 'November', 'December');
// AddNths(day) {
//   if (day == 1 || day == 21 || day == 31){
//      return 'st';
// } else if (day == 2 || day == 22){
//   return 'nd';
// } else if (day == 3 || day == 23) {
//   return 'rd';
// }else {
//   return 'th';
// }

// }

// }
