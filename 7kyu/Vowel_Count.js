function getCount(str) {
    var vowelsCount = 0;
    
    for(var i = 0; i < str.length; i++){
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        vowelsCount++
      }
    }
    
    return vowelsCount;
  }

//   function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

getCount("abracadabra")