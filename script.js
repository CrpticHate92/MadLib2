document.getElementById("button1").addEventListener("click", madlib);

function madlib() {
  let plural = document.getElementById("plural-in").value;
  let adjective = document.getElementById("adjective-in").value;
  let present = document.getElementById("present-in").value;
  let noun = document.getElementById("noun-in").value;

  let Output = `"There are to many ${plural} on this ${adjective} airplane!", I screamed. "Somebody
  has to ${present} on the ${noun} to solve this problem."`;

  document.getElementById("result").innerHTML = Output;
}
