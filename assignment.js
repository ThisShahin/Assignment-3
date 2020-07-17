// Problem One
function feetToMile(feet){
    var mile = Math.round(feet / 5280);
    if(feet < 5280){
        console.log('Plz give me input more than or equal 5280;');
    }else{
        console.log('Feet to miles is :', mile);
    }
    
}
// plz enter your 5280 More than input 
feetToMile(500000);


// Problem Two
function woodCalculator(char, table, khat){
    if(char < 0 || table<0 || khat<0){
        console.log('Plz give me positive numbers');
    }else{
        var getChar = 1 * char;
        var getTable = 3 * table;
        var getKhat = 5 * khat;
        var totalGet = Math.round(getChar + getTable + getKhat);
        console.log('Total qbitfeet is :', totalGet);
    }

}
// plz enter your three  input number
woodCalculator(4, 4, 4);


// Problem Three
function brickCalculator(tola){
    if(tola < 0){
        console.log('Plz give me positive numbers :');
    }else{
        var brick = 0;
        for(var i = 1; i <= tola; i++){
             if(i == 11){
                 break;
             }
             brick += 15;
        }
        for(var j = 11; j <= tola; j++){
             if(j == 21){
                 break;
             }
             brick += 12;
         }
         for(var k = 21; k <= tola; k++){
             brick += 10;
         }
         var totalBrick = brick * 1000;
     
        console.log('Total brick is :', totalBrick);
    }

}
// plz enter your  input number
brickCalculator(4);


// Problem Four
function tinyFriend(arry){
    if(arry.length <= 0){
        console.log('Array can not be empty!!');
    }else{
        var tinyString = arry[0];
        for(var i = 0; i < arry.length; i++){
            var presentName = arry[i];
            if(presentName.length < tinyString.length){
                tinyString = presentName;
            }
        }
        console.log('tinyfriend name is :', tinyString);
    }

}
var friends = ['shahin', 'Sojib', 'Rakib', 'Mone', 'mow'];
// Plz Enter Name of Array
tinyFriend(friends);