/**
 * Bogmolov Vladilslav
 */
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    magazineStr = magazine.toString();
    
    if( magazine.length === m && ransom.length === n  ){
       for(var i=0;i<n;i++){
          if( magazineStr.indexOf(ransom[i]) ===  -1 ){
              console.log('No');
              return;
          }else{
              magazineStr = magazineStr.replace(ransom[i],'');
          }
       }
       console.log('Yes');
    }else{
       console.log('No');
    }

}
