using UnityEngine;
using System.Collections;

[System.Serializable]

public class PlayerControls : MonoBehaviour {

	public KeyCode moveUp;
	public KeyCode moveDown;
	
	float speed = 10;
	
	int startPositionX;
	
	void  SetStartPosition ( int position  ){
		startPositionX = position;
	}
	void  Update (){
		Rigidbody2D playerRigidBody2D = GetComponent<Rigidbody2D> ();

		if(Input.GetKey(moveUp)){
			playerRigidBody2D.velocity = new Vector2(0,speed);		
		}
		else if (Input.GetKey(moveDown)){
			playerRigidBody2D.velocity = new Vector2(0,speed * -1);
		}else{
			playerRigidBody2D.velocity = new Vector2(0,0);
		}
	}
	
	void  Reset (){
		GetComponent<Rigidbody2D>().transform.position = new Vector2(0,0);	
	}
}

