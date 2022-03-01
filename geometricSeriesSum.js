let baseNumber = 1;
let friendsNumber = 6;
let layers = 3;
let sum = 0;

//gives friendsInput to friendsNumber
document.getElementById("friendsInput").addEventListener("change", e => {friendsNumber = e.target.value});

function GeometricSeriesSum (a,r,n) { 
	sum = ( a * (Math.pow(r,n) - 1 ))/(r - 1);
	//not including the initial person
	sum --;
	return sum;
}
function AddCircles (friendsNum, layers) {
	console.log(friendsNum);
}
function onNewNum () {

}
GeometricSeriesSum(baseNumber,friendsNumber,layers);
document.getElementById("friendsTextResult").innerHTML = `You have ${sum} friends.`;
document.getElementById("headerQuestion").innerHTML = `If you have ${friendsNumber} friends and your friends also have ${friendsNumber} friends (and friends' friends are your friends too),<br>then how many friends do you have in total?`;
