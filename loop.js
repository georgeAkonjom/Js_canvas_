function animate() {
	window.requestAnimationFrame(animate);
	c.fillStyle = "rgb(500, 400, 200)";
	c.fillRect(0, 0, c.canvas.width, c.canvas.height);
	player1.update();
	player2.update();
}

animate();
