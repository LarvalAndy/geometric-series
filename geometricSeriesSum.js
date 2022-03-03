let baseNumber = 1;
let friendsNumber = 1;
let layers = 0;
let sum = 0;
let circsNum = 0;

document.getElementById("calculateButt").addEventListener("change", onNewNum(friendsNumber, layers));

//gives friendsInput to friendsNumber
document.getElementById("friendsInput").addEventListener("change", e => {friendsNumber = e.target.value;});

document.getElementById("layersInput").addEventListener("change", e => {layers = e.target.value - 1});


function GeometricSeriesSum (a,r,n) { 
	while (n >= 0) {
		console.log(`${r} ^ ${n}`);
		circsNum = Math.pow(r, n);
		console.log(`= ${circsNum}`);
		sum += circsNum;
		console.log(`sum = ${sum}`);
		AddCircles(circsNum, n);
		n--;	
	}

	/*previous solution was:
	 * sum = a*((Math.pow(r, n)-1)/(r-1));
	 *
	 * didnt work due to r=1 leading to sum = undefined
	 *
	 * built my own algo instead to avoid the problem
	 *
	 * other solutions include above + switch case for r=1 and r=0
	 * ^^ would have a lower time complexity than the while loop
	 *
	 * */

	//not including the initial person
	sum --;
}
function AddCircles (circsNum, layer) {
	console.log(`added ${circsNum} circles to layer ${layer}`);
	while (circsNum > 0 && layer > 0) {
		let circ = document.createElement("div");
		circ.className = "circle";
		document.getElementById(`${layer}`).appendChild(circ);
		circsNum --;
	}
}
function onNewNum (friendsNumber, layers) {
	sum = 0;
	GeometricSeriesSum(baseNumber,friendsNumber,layers);
	document.getElementById("friendsTextResult").innerHTML = `You have ${sum} friends.`;
	document.getElementById("headerQuestion").innerHTML = `If you have ${friendsNumber} friends and your friends also have ${friendsNumber} friends (and friends' friends are your friends too),<br>then how many friends do you have in total?`;
	
}
