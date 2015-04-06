#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;

var speed : float = 10;

var startPositionX : int;

function SetStartPosition(position : int){
	startPositionX = position;
}
function Update () {
	var rigidBody2D = GetComponent.<Rigidbody2D>();

	if(Input.GetKey(moveUp)){
		rigidBody2D.velocity.y = speed;		
	}
	else if (Input.GetKey(moveDown)){
		rigidBody2D.velocity.y = speed * -1;
	}else{
		rigidBody2D.velocity.y = 0;
	}
	
	rigidBody2D.velocity.x = 0;
}

function Reset (){
	GetComponent.<Rigidbody2D>().transform.position.y = 0;	
}