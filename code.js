function init() {

  var stage = new createjs.Stage("pongCanvas");
  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.setFPS(60);
  createjs.Ticker.useRAF = true;

  var pongBall = new createjs.Shape();
  var ballDirection = "up";

  pongBall.graphics.beginFill("red").drawCircle(0, 0, 25);
  pongBall.x = pongCanvas.width / 2;
  pongBall.y = pongCanvas.height / 2;

  stage.addChild(pongBall);
  pongBall.shadow = new createjs.Shadow("#000000", 5, 5, 10);

  function tick(event) {
    if (ballDirection == "down") {
      pongBall.y += 5;
      stage.update();
      if (pongBall.y >= pongCanvas.height) {
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
