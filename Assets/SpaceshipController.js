#pragma strict
//to control speed of spaceship
var speed:int;

var leftmost:float;
var rightmost:float;
var topmost:float;
var bottommost:float;

var laserBeam: Rigidbody;

var lives:int;
static var score:int; 

function Start () {

	score = 0;
	lives = 3;
}

function Update () {

	speed = 10;
	
	//speed up
	if(Input.GetKey(KeyCode.Space)){
		speed = 50;
	}
	
	//firing the laser
	if (Input.GetKey(KeyCode.Z)){
	
		Instantiate(laserBeam, transform.position, transform.rotation);
	}
	
	//spaceship moves up and down
	transform.Translate(Vector3.down*speed*Time.deltaTime*Input.GetAxis("Vertical"));
	
	//rotating spaceship
	transform.Rotate(Vector3.forward*-90*Time.deltaTime*Input.GetAxis("Horizontal"));
	
	//Making the ship moving from one end to the next
	if(transform.position.x > (BorderController.rightmost-1))
	{
		transform.position.x = (BorderController.leftmost+1);
	}
	
	if(transform.position.x < (BorderController.leftmost+1))
	{
		transform.position.x = (BorderController.rightmost-1);
	}
	
	if(transform.position.y > (BorderController.topmost-1))
	{
		transform.position.y = (BorderController.bottommost+1);
	}
	
	if(transform.position.y < (BorderController.bottommost+1))
	{
		transform.position.y = (BorderController.topmost-1);
	}
}

function OnGUI (){

	GUI.color = Color.red;
	GUI.Label(Rect(0,0,100,25),"Lives: "+lives);
	GUI.Label(Rect(0,30,100,25),"Score: "+score);
}

function OnTriggerEnter(Other:Collider)
{
	if (Other.gameObject.tag == "asteroid")
	{
		lives--;
		if(lives == 0)
		{
		Destroy(this.gameObject);
		}
	}
}