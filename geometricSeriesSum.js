let baseNumber = 1;
let friendsNumber = 1;
let layers = 0;
let sum = 0;
let circsNum = 0;
//let pyramid = new Object();
//let pyramid = [];

//TODO: pick datastruct
//	make popping animation for the circles as they get created
//	if sum of circles width > 40vw (figurecontainerwidth) then replace circles with number

document.getElementById("calculateButt").addEventListener("click", e => {
		onNewNum(friendsNumber, layers);
	});

//gives friendsInput to friendsNumber
document.getElementById("friendsInput").addEventListener("change", e => {
		friendsNumber = e.target.value;
		console.log(`friendsInput = ${friendsNumber}`)
	});

document.getElementById("layersInput").addEventListener("change", e => {
		layers = e.target.value - 1;
		console.log(`layersInput = ${layers}`)
	});


function GeometricSeriesSum (a,r,n) { 
	console.log("inside GeometricSeriesSum");
	while (n >= 0) {
		console.log(`${r} ^ ${n}`);
		circsNum = Math.pow(r, n);
		console.log(`= ${circsNum}`);
		sum += circsNum;
		console.log(`sum = ${sum}`);
		AddCircles(circsNum, n);
		//makedatastruct
		//~~~~pyramid.layerArray.append(circsNum);
		//pyramid.[`${n}Layer`] = circsNum;
		//pyramid = Object.assign(pyramid, {`${n}Layer: circsNum`});
		//or make a simple array :
		//pyramid.push(circsNum);
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
	//change this while loop to be based on the pyramid/array
	//for each prop in pyramid, add circsNum circles
	//or
	//for each index in pyramid pop num off array and add circsnum circles

	while (circsNum > 0 && layer > 0) {
		let circ = document.createElement("div");
		circ.className = "circle ";
		switch (layer) {
			case 1: circ.className += "layerOne";
				break;
			case 2: circ.className += "layerTwo";
				break;
			case 3: circ.className += "layerThree";
		}
		document.getElementById(`${layer}`).appendChild(circ);
		circsNum --;
	}
}
function onNewNum (friendsNumber, layers) {
	console.log("inside onNewNum");
	//pyramid clear
	sum = 0;
	GeometricSeriesSum(baseNumber,friendsNumber,layers);
	document.getElementById("friendsTextResult").innerHTML = `You have ${sum} friends.`;
	document.getElementById("headerQuestion").innerHTML = `If you have ${friendsNumber} friends and your friends also have ${friendsNumber} friends (and friends' friends are your friends too),<br>then how many friends do you have in total?`;
	
}
