#pragma strict

var ballSpeed : float = 100f;

function Start () {
	yield WaitForSeconds(2);
	GoBall();
}

function Update () {
	var xVel : float = GetComponent.<Rigidbody2D>().velocity.x;
	
	if(xVel < 18 && xVel > -18 && xVel != 0){
		if(xVel > 0){
			GetComponent.<Rigidbody2D>().velocity.x = 20;
		}else{
			GetComponent.<Rigidbody2D>().velocity.x = -20;
		}
	}
}

function OnCollisionEnter2D(colliderInformation : Collision2D){
	if( colliderInformation.collider.tag == "Player"){
		var velY = GetComponent.<Rigidbody2D>().velocity.y;
		velY = velY/2 + colliderInformation.collider.GetComponent.<Rigidbody2D>().velocity.y/3;
		
		GetComponent.<Rigidbody2D>().velocity.y = velY;
		
		GetComponent.<AudioSource>().pitch = Random.Range(0.8f, 1.2f);
		GetComponent.<AudioSource>().Play();
	}
}

function GoBall(){
	var randomNumber = Random.Range(0,2);
	if(randomNumber <= 0.5){
		GetComponent.<Rigidbody2D>().AddForce(new Vector2(ballSpeed,10));
	}else{
		GetComponent.<Rigidbody2D>().AddForce(new Vector2(-ballSpeed,-10));
	}
}

function Reset(){
	GetComponent.<Rigidbody2D>().velocity.x = 0;
	GetComponent.<Rigidbody2D>().velocity.y = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds(0.5);
	GoBall();
}