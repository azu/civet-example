const sum = (a:number, b:number) => a + b
const square = (a:number) => a * a

function fun () { 
  return console.log("It's all fun and games till it breaks")
}

const song = ["do", "re", "mi", "fa", "so"]

const singers = {Jagger: "Rock", Elvis: "Roll"}

const bitlist = [
  1, 0, 1,
  0, 0, 1,
  1, 1, 0
];


// hey jsx dudes... here
const Component = () => <>{bitlist.map((x) => <p>x</p>) }</>
