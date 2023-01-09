let beep = '.';
let input = process.argv.slice(2);

const timer = function(input) {
  input.forEach((element) => {
    let x = Number(element);
    if (isNaN(x) || typeof x === "string" || x < 0) {
      console.log("You have entered an invalid character");
    } else {
      setTimeout(() => {
        process.stdout.write(beep);
      }, [element] * 1000);
    }
  });
};

timer(input);
