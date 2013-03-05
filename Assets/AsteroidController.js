#pragma strict
var rotationSpeed:float;

function Start () {

rotationSpeed = Random.Range(8.0,20.0);

}

function Update () {
//asteroid rotates at a random speed
transform.Rotate(Vector3.forward*rotationSpeed*Time.deltaTime);

}