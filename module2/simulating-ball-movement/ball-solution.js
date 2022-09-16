var zIndex = 1;

const ballFactory = (radius, color=null, x=null, y=null) => {
  return {
    radius: radius,
    color: color == null ? "black" : color,

    xMin: 0,
    xMax: 300,

    yMin: 0,
    yMax: 300,

    positionX: null,
    positionY: null,
    
    velocityX: 50,
    velocityY: 20,

    reverseX: -1,
    reverseY: -1,

    div: null,

    draw() {
      this.positionX = x == null ? Math.floor( Math.random() * this.xMax ) : x,
      this.positionY = y == null ? Math.floor( Math.random() * this.yMax ) : y,

      this.div = document.createElement('div');
      let body = document.querySelector( "body" ).appendChild( this.div );

      this.div.style.position = "absolute";
      this.div.style.zIndex = zIndex++;
      this.div.style.left = this.positionX + "px";
      this.div.style.top = this.positionY + "px";
      this.div.style.width = this.radius*2 + "px";
      this.div.style.height = this.radius*2 + "px";
      this.div.style.borderRadius = "50%";
      this.div.style.background = this.color;
      
      console.log(this.div.style.left, this.div.style.top);
    },

    moveBall() {
      if( this.div === null ) return;
    
      this.positionX += this.velocityX*this.reverseX;
      this.div.style.left = this.positionX + "px";
    
      this.positionY += this.velocityY*this.reverseY;
      this.div.style.top = this.positionY + "px";
    
      if ( this.positionX > this.xMax || this.positionX < this.xMin ) this.reverseX *= -1;
      if ( this.positionY > this.yMax || this.positionY < this.yMin ) this.reverseY *= -1;
    },

    startMoving(interval) {
      if( this.div === null ) return;


      var _this = this;
      setInterval(function() {
          _this.moveBall();
      }, interval); 
    }
  }

}


  let b1 = ballFactory(20, "red");
  b1.draw();
  b1.startMoving(100);

  let b2 = ballFactory(30, "green");
  b2.draw();
  b2.startMoving(80);

  let b3 = ballFactory(50, "blue");
  b3.draw();
  b3.startMoving(140);

  let b4 = ballFactory(10, "black");
  b4.draw();
  b4.startMoving(200);

