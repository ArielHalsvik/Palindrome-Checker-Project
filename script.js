function checkPalindrome() {
  const palindrome = document.getElementById("text-input").value;
  const changedPalindrome = palindrome.toLowerCase().replace(/[^a-z0-9]/g, "");

  const result = document.getElementById("result");

  if (!palindrome) {
    alert("Please input a value");
    return;
  } else if (palindrome && !changedPalindrome) {
    result.innerHTML = `<b>${palindrome}</b> is a palindrome.`;
  }

  if (palindrome.length === 1) {
    result.innerHTML = `<b>${palindrome}</b> is a palindrome.`;
    return;
  }

  const palindromeBackwards = changedPalindrome.split("").reverse().join("");

  if (changedPalindrome === palindromeBackwards) {
    result.innerHTML = `<b>${palindrome}</b> is a palindrome.`;
  } else {
    result.innerHTML = `<b>${palindrome}</b> is not a palindrome.`;
  }

  return;
}
