#pragma strict

var laserSpeed:int;

function Start () {

}

function Update () {
	
	laserSpeed = 10;
	transform.Translate(Vector3.down*laserSpeed*Time.deltaTime);
}

function onBecameInvisible(){

	Destroy(this.gameObject);
}

function OnTriggerEnter(Other:Collider)

{
	if(Other.gameObject.tag=="asteroid")
	{
		Destroy(this.gameObject);
		Destroy(Other.gameObject);
		SpaceshipController.score++;
	}
}