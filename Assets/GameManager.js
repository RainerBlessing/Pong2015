#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

var theSkin : GUISkin;

var theBall : Transform;

var players : GameObject[];

function Start(){
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
	players = GameObject.FindGameObjectsWithTag("Player");
}

static function Score(wallName : String){
	if (wallName == "rightWall"){
		playerScore01+=1;
	}else{
		playerScore02+=1;
	}
}

function OnGUI(){
	GUI.skin = theSkin;
	GUI.Label(new Rect(Screen.width/2-150-18,25,100,100), ""+playerScore01);
	GUI.Label(new Rect(Screen.width/2+150-18,25,100,100), ""+playerScore02);
	
	if(GUI.Button(new Rect(Screen.width/2-121/2, 35, 121, 53),"Reset")){
		playerScore01 = 0;
		playerScore02 = 0;
		
		theBall.gameObject.SendMessage("Reset");
		
		
		for (var player : GameObject in players)  { 
			player.transform.SendMessage("Reset");
		}
	}	
}