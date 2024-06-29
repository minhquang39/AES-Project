// Kiểm tra một số có là số nguyên tố hay không

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrimeArray(a) {
  for (let i = 0; i < a.length; i++) {
    if (isPrime(a[i]) == true) {
      return true;
    }
  }
  return false;
}

// document.write(isPrimeArray(a));
// document.write("Là số nguyên tố " + isPrime(1));

function addArray(a) {
  const b = [];
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (isPrime(a[i]) == true) {
      b[j++] = a[i];
    }
  }
  return b;
}

// document.write(addArray(a));

// Tìm UCLN BCNN của hai số a và b
function myFunction(a, b) {
  let UCLN = 0;
  let BCNN = 0;
  let c = a * b;
  while (a != b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  UCLN = a;
  BCNN = c / UCLN;
  document.write("<br>" + UCLN + " " + BCNN);
}
// myFunction(25, 120);

function removeDulicates(a) {
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j >= 0; j++) {
      if (a[i] === a[j]) {
        a.
        n--;
      }
    }
  }
  return a;
}

var a = [0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];

document.write(a);
