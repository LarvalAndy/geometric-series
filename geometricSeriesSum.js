let baseNumber = 1;
let friendsNumber = 6;
let layers = 3;
let sum = 0;
let circsNum = 0;

//gives friendsInput to friendsNumber
document.getElementById("friendsInput").addEventListener("change", e => {
	friendsNumber = e.target.value;
	onNewNum(friendsNumber, layers);
});

document.getElementById("layersInput").addEventListener("change", e => {
	layers = e.target.value;
	onNewNum(friendsNumber, layers);
});


function GeometricSeriesSum (a,r,n) { 
	while (n > 0) {
		circsNum = Math.pow(r, n);
		sum += circsNum;
		n--;
		console.log(`add ${circsNum} circles to layer ${n}`);
		//addCircles();
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
function AddCircles (friendsNum, layers) {
	console.log(friendsNum);
}
function onNewNum (friendsNumber, layers) {
	sum = 0;
	GeometricSeriesSum(baseNumber,friendsNumber,layers);
	document.getElementById("friendsTextResult").innerHTML = `You have ${sum} friends.`;
	document.getElementById("headerQuestion").innerHTML = `If you have ${friendsNumber} friends and your friends also have ${friendsNumber} friends (and friends' friends are your friends too),<br>then how many friends do you have in total?`;
	
}
