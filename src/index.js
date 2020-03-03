module.exports = function toReadable (number) {
    var first = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var second = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var third = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number < 10){
        number = first[number];
        return number
    }
    else if(number < 20 && number >= 10){
      number = second[number-10];
      return number
    }
  
    else if (number <100 && number%10 != 0){
        number = third[Math.trunc(number/10) - 2]+' '+first[number%10];
        return number
    }
    else if(number<100 && number%10 == 0){
        number = third[Math.trunc(number/10) - 2];
        return number;
    }
    else if (number < 1000 && number%100 > 9 && number%100 < 20){
        number = first[Math.trunc(number/100)]+' hundred ' +second[number%10];
        return number;
    }
    else if(number < 1000 && number%100 == 0){
        number = first[Math.trunc(number/100)]+' hundred';
        return number;
      }
    else if (number < 1000 && number%10 == 0){
        number = first[Math.trunc(number/100)]+' hundred ' +third[(Math.trunc(number/10))%10 - 2];
        return number;
    }
    else if (number < 1000 && number%100 > 0 && number%100 < 10){
        number = first[Math.trunc(number/100)]+' hundred ' +first[number%10];
        return number;
    }
    
    else if(number < 1000 && number%100 != 0){
        number = first[Math.trunc(number/100)]+' hundred '+third[(Math.trunc(number/10))%10 - 2]+' '+first[number%10];
         return number;
      }
  }