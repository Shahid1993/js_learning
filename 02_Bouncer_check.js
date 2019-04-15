//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
  return arr.filter(element => Boolean(element) === true);
}

bouncer([7, "ate", "", false, 9]);


//You can pass Boolean directly as callback:

[false, null, 0, NaN, undefined, "", 1, "one", true].filter(Boolean);

//or

arr.filter(v=>!!v);
