let baseNumber = 1;
let friendsNumber = 1;
let layers = 0;
let sum = 0;
let circsNum = 0;
//let pyramid = new Object();
let pyramid = [];

//TODO: make array datastruct
//	make popping animation for the circles as they get created
//	if sum of circles width > 40vw (figurecontainerwidth) then replace circles with number
//

window.addEventListener("load", e => {
		friendsNumber=document.getElementById("friendsInput").value;
		layers = document.getElementById("layersInput").value;
		console.log(`onload friendnum: ${friendsNumber} layers: ${layers}`);
	});

document.getElementById("calculateButt").addEventListener("click", e => {
		friendsNumber=document.getElementById("friendsInput").value;
		layers = document.getElementById("layersInput").value -1;
		console.log(`onload friendnum: ${friendsNumber} layers: ${layers}`);	
		onNewNum(friendsNumber, layers);
	});

function GeometricSeriesSum (a,r,n) { 
	console.log("inside GeometricSeriesSum");

	if (layers == undefined || layers == null) {
		console.log(`layer = ${layers}`);
		layer = 0;
		return;
	}

	while (n >= 0) {
		console.log(`${r} ^ ${n}`);
		circsNum = Math.pow(r, n);
		console.log(`= ${circsNum}`);
		sum += circsNum;
		console.log(`sum = ${sum}`);
		//AddCircles(circsNum, n);
		//~~~~pyramid.layerArray.append(circsNum);
		//pyramid.[`${n}Layer`] = circsNum;
		//pyramid = Object.assign(pyramid, {`${n}Layer: circsNum`});
		//or make a simple array :
		pyramid.push(circsNum);
		console.log(`pyramid array = ${pyramid}`);
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
function addCircles (pyr) {
	//change this while loop to be based on the pyramid/array
	//for each prop in pyramid, add circsNum circles
	//or
	//for each index in pyramid pop num off array and add circsnum circles
	
	for (let layer = 1; layer <= pyr.length; layer++) {
		//add circsnum circles to index=layer
		//pyr[i] --> last layer to first [last, next, next 1st]
		circsNum = pyr.pop();
		console.log(`${circsNum} popped off the stack. layer = ${layer} pyr.lrngth = ${pyr.length}`);
		add(circsNum, layer);
	}
	
	function add(circsNum, layer) {
			
		let div = document.createElement("div");
		div.className += "layer";
		div.id = `${layer}`;
		document.getElementById("figureContainer").appendChild(div);

		while (circsNum > 0) {
			let circ = document.createElement("div");
			circ.className = "circle";
			document.getElementById(`${layer}`).appendChild(circ);
		}
	}
	
	while (circsNum > 0 && layer > 0) {
		let circ = document.createElement("div");
		circ.className = "circle ";
		switch (layer) {
			case 1: circ.className += "layerOne";
				break;
			case 2: circ.className += "layerTwo";
				break;
			case 3: circ.className += "layerThree";
				break;
			case 4: circ.className += "layerFour";
				break;
			default: let layer= document.createElement("div");
				layer.className+= "layer";
				layer.id = `${layer}`;
				document.getElementById("figureContainer").appendChild(layer);
				circ.className += "number"
		}
		
		console.log(`adding circles to layer: ${layer}`);
		document.getElementById(`${layer}`).appendChild(circ);
		circsNum --;
	}
}
function onNewNum (friendsNumber, layers) {
	console.log("inside onNewNum");
	clearPyramid();
	sum = 0;
	GeometricSeriesSum(baseNumber,friendsNumber,layers);
	addCircles(pyramid);
	document.getElementById("friendsTextResult").innerHTML = `You have ${sum} friends.`;
	document.getElementById("headerQuestion").innerHTML = `If you have ${friendsNumber} 
	friends and your friends also have ${friendsNumber} friends (and friends' friends 
	are your friends too),<br>then how many friends do you have in total?`;
	
}
function clearDiv(elem) {
	let div = document.getElementById(elem);

	while(div.firstChild) {
		div.removeChild(div.firstChild);
		console.log(`removed circle from ${div.id}`);
	}
}
function clearPyramid() {
	
	let fig = document.getElementById("figureContainer");
	while(fig.firstChild && fig.firstChild.id > 0) {
		fig.removeChild(fig.firstChild);	
	}
}

