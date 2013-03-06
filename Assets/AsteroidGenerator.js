#pragma strict

var asteroidTemplateSlot: Rigidbody;
var numberOfAsteroids: int;

function generateTwentyAsteroids(){

	//create twenty mice instantly
	var counter: int;
	for(counter = 0; counter < 20; counter++)
	{
		Instantiate(asteroidTemplateSlot,Vector3(0,0,2),Quaternion.identity);
	}
}

function Start () {

	generateTwentyAsteroids();
}

function Update () {

	numberOfAsteroids = GameObject.FindGameObjectsWithTag("asteroid").length;

}

function OnGUI(){

	GUI.color = Color.red;
	GUI.Label(Rect(0,50,200,25),"Number of Asteroids: "+numberOfAsteroids);
}