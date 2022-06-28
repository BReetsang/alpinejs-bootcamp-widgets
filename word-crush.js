function longestWord(longWord){     
    var longWordSplit = longWord.split(' ');     
    var longestWordInString = 0;
    var result='';    
    for(var i = 0; i < longWordSplit.length; i++){
      if(longWordSplit[i].length >= longestWordInString){ 
      longestWordInString = longWordSplit[i].length; 
      result=longWordSplit[i];
       }
    }     
    console.log(longWord);
    return result; 
  }
  console.log(longestWord('The dog jumped over the shipyarddddd fence'));
  
  function shortestWord(shortWord){     
    var shortWordSplit = shortWord.split(' ');    
     var result=shortWordSplit[0];   
    for(var i = 0; i < shortWordSplit.length; i++){
      if(shortWordSplit[i].length <= result.length){       
      result=shortWordSplit[i];
       }
    } 
    console.log(shortWord);
    return result; 
  }
  console.log(shortestWord('The dog jumped over the shipyarddddd fence'));
  
  
  function wordLengths(sumWord){ 
    var sumWordSplit = sumWord.split(' ');
    var wordLen = sumWordSplit.map(w => w.length);
    var sum=0;     
    for(var i = 0; i < sumWordSplit.length; i++){
      sum += wordLen[i];
       }
      return sum;
   }  
  console.log(wordLengths('The dog jumped over the shipyardddddyyy fence'));
  
  
