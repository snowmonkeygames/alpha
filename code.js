function init() {

  var stage = new createjs.Stage("pongCanvas");
  createjs.Ticker.addEventListener("tick", tick);

  var canvasWidth = 500;
  var canvasHeight = 500;

  var pongBall = new createjs.Shape();
  var ballDirection = "up";

  pongBall.graphics.beginFill("red").drawCircle(0, 0, 25);
  pongBall.x = canvasWidth / 2;
  pongBall.y = canvasHeight / 2;

  stage.addChild(pongBall);

  function tick(event) {
    if (ballDirection == "down") {
      pongBall.y += 5;
      stage.update();
      if (pongBall.y >= canvasHeight) {
        console.log("Reversing ball direction... (going up!)");
        ballDirection = "up";
      }
    }
    if (ballDirection == "up" && pongBall.y > 0) {
      pongBall.y -= 5;
      stage.update();
      if (pongBall.y <= 0) {
        console.log("Reversing ball direction... (going down!)");
        ballDirection = "down";
      }
    }
  }


}
