const ShowQuack = () => {
  if (document.getElementById("quack").style.display === "none")
    document.getElementById("quack").style.display = "block";
  else if (document.getElementById("quack").style.display === "block")
    document.getElementById("quack").style.display = "none";
  console.log(document.getElementById("quack"));
  console.log(document.getElementById("quack").style.display);
};
const HideQuack = () => {
  document.getElementById("quack").style.display = "none";
};
