// Similar to above, but this one recognizes palindromicness and ignores spaces
function isPalindromeWithSpaces(string){
    // Keep track of an iterator for the left half and the right half of the text itself
    let i = 0;
    let j = string.length-1;
    
    // While i < j --> This means we're going to repeat this logic until the two iterators meet
    while(i<j) {
        // If the character at the left iterator is a space, move the left iterator to the right by one place
        if(string[i] == " ") {
            i++;
        }
        // If the character at the right iterator is a space, move the right iterator to the left by one place
        else if(string[j] == " ") {
            j--;
        }
        // If the character at the left iterator does not match the character at the right iterator, it's not a palindrome
        else if(string[i] != string[j]) {
            return false;
        }
        // If the character at both iterators match, move the left iterator to the right by one space, and the right iterator to the left by one space
        else {
            console.log(`${string[i]} -- ${string[j]}`)
            i++;
            j--;
        }
    }
    // If we made it all the way through, it must be a palindrome
    return true;
}

/* Mini walkthrough!!
t ac  ocat
i        j
 are either of these characters spaces? -> no
 are they NOT the same? -> no, they ARE the same, so lets move them in one each

t ac  ocat
 i      j
  are either of these characters spaces? -> yes! i is at a space. so we increment i, and leave j

t ac  ocat
  i     j
   are either of these characters spaces? -> no
   are they NOT the same? -> no, they ARE the same, so let's move them in one each

t ac  ocat
   i   j
    are either of these characters spaces? -> no
    are they NOT the same? -> no, they ARE the same, so let's move them in one each

t ac  ocat
    i j
     are either of these characters spaces? -> yes! i is at a space, so we increment i and leave j

t ac  ocat
     ij
      are either of these characters spaces? -> yes! i is at a space, so we increment i and leave j

t ac  ocat
      i
      j
      i is at the same spot as j, so break out of the while loop
it's a palindrome!!
-- end walkthrough */
