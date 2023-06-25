const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
// scale
const windowWidth = 800; //window.innerWidth;(Responsive is buggy should fix that)
canvas.width = windowWidth;
canvas.height = windowWidth / 1.75;

// canvas bg
c.fillStyle = "rgb(500, 400, 200)";
c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.4;

// Objects
class Sprite {
	constructor({ position, velocity, movement }) {
		this.position = position;
		this.velocity = velocity;
		this.height = 50;
		this.width = 20;
		this.movement = movement;
	}

	draw() {
		c.fillStyle = "red";
		c.fillRect(
			this.position.x,
			this.position.y,
			this.width,
			this.height
		);
	}

	update() {
		this.draw();
		// different controls for each player
		if (this.movement.true == 1) {
			this.moveset1();
		} else if (this.movement.true == 0) {
			this.moveset0();
		} else if (this.movement.true == -1) {
			//spawn a dummy char that has all the attributes of a char but no moovement controls. Maybe an Ai in the future?
			this.movespawn();
		}
		// gravity, bounds for the bottom of the play area
		this.position.y += this.velocity.y;
		this.position.x += this.velocity.x;
		if (
			this.position.y + this.height + this.velocity.y >=
			canvas.height
		) {
			this.velocity.y = 0;
			this.position.y = -(this.height - canvas.height);
		} else {
			this.velocity.y += gravity;
		}

		//no escape. Bounds for the sides of the play area
		if (this.position.x + this.width > canvas.width) {
			this.velocity.x = 0;
			this.position.x = canvas.width - this.width;
		} else if (
			this.position.x <
			canvas.width - canvas.width
		) {
			this.velocity.x = 0;
			this.position.x = canvas.width - canvas.width;
		}
	}

	moveset0() {
		// shmoovement wasd keys
		window.addEventListener("keydown", (event) => {
			switch (event.key) {
				case "w":
					//if not on the ground dont jump
					if (
						this.position.y + this.height ==
						canvas.height
					) {
						this.velocity.y = -10;
					}
					break;
				// groundpound ... :]
				case "s":
					this.velocity.y = 80;
					break;
				case "a":
					this.velocity.x = -5;
					break;
				case "d":
					this.velocity.x = 5;
					break;
			}
		});
		window.addEventListener("keyup", (event) => {
			switch (event.key) {
				case "a":
					this.velocity.x = 0;
					break;
				case "d":
					this.velocity.x = 0;
					break;
			}
		});
	}
	moveset1() {
		// shmoovement arrow keys
		window.addEventListener("keydown", (event) => {
			switch (event.key) {
				case "ArrowUp":
					//if not on the ground dont jump
					if (
						this.position.y + this.height ==
						canvas.height
					) {
						this.velocity.y = -10;
					}
					break;
				// groundpound ... :]
				case "ArrowDown":
					player1.velocity.y = 80;
					break;
				case "ArrowLeft":
					this.velocity.x = -5;
					break;
				case "ArrowRight":
					this.velocity.x = 5;
					break;
			}
		});
		window.addEventListener("keyup", (event) => {
			switch (event.key) {
				case "ArrowLeft":
					this.velocity.x = 0;
					break;
				case "ArrowRight":
					this.velocity.x = 0;
					break;
			}
		});
	}

	movespawn() {}
}
