function init() {

  var stage = new createjs.Stage("pongCanvas");
  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.setFPS(60);
  createjs.Ticker.useRAF = true;

  var pongBall = new createjs.Bitmap("pongball.png");
  pongBall.shadow = new createjs.Shadow("#0022ff", 2, 2, 10);
  pongBall.x = (pongCanvas.width / 2) - 25;
  pongBall.y = (pongCanvas.height / 2) - 25;
  var ballDirection = "up";

  var bg = new createjs.Bitmap("bg.png").set({x:0,y:0});

  var topBarBlue = new createjs.Bitmap("top-blue.png").set({x:0,y:0});
  var bottomBarBlue = new createjs.Bitmap("bottom-blue.png").set({x:0,y:pongCanvas.height - 100});
  var topBarOrange = new createjs.Bitmap("top-orange.png").set({x:0,y:0});
  var bottomBarOrange = new createjs.Bitmap("bottom-orange.png").set({x:0,y:pongCanvas.height - 100});

  var bottomHit = false;
  var topHit = false;
  var timer = false;
  var timerCount = 0;

  stage.addChild(bg);
  stage.addChild(pongBall);
  stage.addChild(topBarBlue);
  stage.addChild(bottomBarBlue);

  bottomBarBlue.addEventListener("mousedown", bottomBarClicked);
  bottomBarBlue.addEventListener("pressup", bottomBarUnclicked);

  function bottomBarClicked () {
    stage.removeChild(bottomBarBlue);
    stage.addChild(bottomBarOrange);
  }

  function bottomBarUnclicked () {
    stage.removeChild(bottomBarOrange);
    stage.addChild(bottomBarBlue);
  }

  function tick(event) {
    if (timer == true){
      timerCount += 1;
      console.log("Timer: " + timerCount)
    }
    if (timerCount > 10){
      stage.removeChild(topBarOrange);
      stage.removeChild(topBarBlue);
      stage.addChild(topBarBlue);
      stage.addChild(bottomBarBlue);
      timer = false;
      topHit = false;
      bottomHit = false;
      timerCount = 0;
    }
    if (topHit == true && timer == false){
      timer = true;
      stage.removeChild(topBarBlue);
      stage.addChild(topBarOrange);
    }
    if (ballDirection == "down") {
      pongBall.y += 5;
      stage.update();
      if (pongBall.y >= pongCanvas.height - 75) {
        console.log("Reversing ball direction... (going up!)");
        ballDirection = "up";
        bottomHit = true;
      }
    }
    if (ballDirection == "up" && pongBall.y > 0) {
      pongBall.y -= 5;
      stage.update();
      if (pongBall.y <= 25) {
        console.log("Reversing ball direction... (going down!)");
        ballDirection = "down";
        topHit = true;
      }
    }
  }


}
