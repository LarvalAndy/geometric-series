let baseNumber = 1;
let friendsNumber = 6;
let layers = 1;
let sum = 0;

function GeometricSeriesSum (a,r,n) { 
	sum = ( a * (Math.pow(r,n) - 1 ))/(r - 1);
	//not including the initial person
	sum --;
	return sum;
}
GeometricSeriesSum(baseNumber,friendsNumber,layers);
document.getElementById("friendsTextResult").innerHTML = `You have ${sum} friends.`;
document.getElementById("headerQuestion").innerHTML = `If you have ${friendsNumber} friends and your friends also have ${friendsNumber} friends (and friends' friends are your friends too),<br>then how many friends do you have in total?`;
