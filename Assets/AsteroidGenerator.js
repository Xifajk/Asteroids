#pragma strict
//the slot where I put the asteroid prefab
var asteroidTemplateSlot:Rigidbody;
var numberOfAsteroids: int;
var beginTime: float;

function generateAsteroids(){

	var counter: int;
	var x: float;
	var y: float;
	
	for(counter = 0; counter < 20; counter++)
	{
			
		y = Random.Range(0,100);
		x = Random.Range(0,100);
		Instantiate(asteroidTemplateSlot,Vector3(x,y,2),Quaternion.identity);
	}
}

function Start () {

	generateAsteroids();
	beginTime = Time.time;
}

function Update () {

	numberOfAsteroids = GameObject.FindGameObjectsWithTag("asteroid").length;
}

function OnGUI(){

	var seconds: int;
	var minutes: int;
	
	seconds = Time.time % 60;
	minutes = Time.time / 60;

	GUI.color = Color.red;
	GUI.Label(Rect(0,50,200,25),"Number of Asteroids: "+numberOfAsteroids);
	GUI.Label(Rect(0,80,200,25),"Time: "+minutes+" : "+seconds);
}