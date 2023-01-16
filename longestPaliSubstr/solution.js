
    /**
     * @param {*} str string that will be checked for palindrome
     * @returns longest palindrome
     */
    const getLongestPalindrome = (str) => {
      // return if string is empty
      if (str.trim().length == 0 ){
          return "";
      }
  
      let longestPali;
      let leftPointer;
      let rightPointer;
      let palindrome = "";
      let i = 0
    
      while (i < str.length){
          // for odd palindrome
          leftPointer = i;
          rightPointer = i;
  
          longestPali = findPalindrome(str, leftPointer, rightPointer);
          if (palindrome.length < longestPali.length) {
              palindrome = longestPali;
          }
          
          // for even palindrome
          leftPointer = i;
          rightPointer = i + 1;
          longestPali = findPalindrome(str, leftPointer, rightPointer);
    
          if (palindrome.length < longestPali.length) {
              palindrome = longestPali;
          }
          i++;
        }
    
        return palindrome;
      }
    
      const findPalindrome = (str, leftPointer, rightPointer) => {
        let ls = str.length;
    
        // while left and right pointers are inbound and it's a palindrome (left and right word is equal)
        while (leftPointer >= 0 && rightPointer < ls && str[leftPointer] === str[rightPointer]) {
          //shift pointers to left and right
          leftPointer -= 1;
          rightPointer += 1;
        }
    
        return str.slice(leftPointer + 1, rightPointer);
      }