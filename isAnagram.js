function isAnagram(str1, str2) {
  var freq1 = {};
  var freq2 = {};

  if (str1.length !== str2.length) {
    return false;
  } //checking for equal string lengths

  for (var i = 0; i < str1.length; i++) {
    if (freq1.hasOwnProperty(str1.charAt(i))) {
      freq1[str1.charAt(i)]++;
    } else {
      freq1[str1.charAt(i)] = 1;
    } // str1 and freq1

    if (freq2.hasOwnProperty(str2.charAt(i))) {
      freq2[str2.charAt(i)]++;
    } else {
      freq2[str2.charAt(i)] = 1;
    } // str2 and freq2
  }

  for (key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  } //checking that both freq objects have the same keys with the same values

  return true;
}