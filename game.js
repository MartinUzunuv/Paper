p1 = { x: 200, y: 200 };
p2 = { x: 200, y: 400 };
p3 = { x:400, y: 200};
p4 = { x:400, y: 400};

function lerp(a,b,t){
  return a + (b-a) * t
}

arr = []
arrSize = 100
size = 20

for(i=0; i < arrSize; i++){
  arr.push([])
  for(j=0; j < arrSize; j++){
    arr[i].push({color:0, x:0, y:0})
  }
}

function draw() {
  context.fillStyle= 'black'
  context.fillRect(p1.x,p1.y,10,10)
  context.fillRect(p2.x,p2.y,10,10)
  context.fillRect(p3.x,p3.y,10,10)
  context.fillRect(p4.x,p4.y,10,10)

  for(i=0; i < arr.length; i++){
    for(j=0; j < arr.length; j++){
      if(arr[i][j].color==1){
        context.fillStyle = "red"
      }else{
        context.fillStyle = "black"
      }
     context.fillRect(lerp(lerp(p1.x,p2.x,j/arr.length),lerp(p3.x,p4.x,j/arr.length),i/arr.length),lerp(lerp(p1.y,p3.y,i/arr.length),lerp(p2.y,p4.y,i/arr.length),j/arr.length),size,size)
     arr[i][j].x = lerp(lerp(p1.x,p2.x,j/arr.length),lerp(p3.x,p4.x,j/arr.length),i/arr.length)
     arr[i][j].y = lerp(lerp(p1.y,p3.y,i/arr.length),lerp(p2.y,p4.y,i/arr.length),j/arr.length)
    }
  }
  

}
function update() {
  if (isKeyPressed[49]) {
    p1.x = mouseX;
    p1.y = mouseY;
  }
  if (isKeyPressed[50]) {
    p2.x = mouseX;
    p2.y = mouseY;
  }
  if (isKeyPressed[51]) {
    p3.x = mouseX;
    p3.y = mouseY;
  }
  if (isKeyPressed[52]) {
    p4.x = mouseX;
    p4.y = mouseY;
  }
  if (isKeyPressed[32]) {
    for(i=0; i < arr.length; i++){
      for(j=0; j < arr.length; j++){
        if(areColliding(mouseX,mouseY,1,1,arr[i][j].x,arr[i][j].y,size/2,size/2)){
          arr[i][j].color= 1
        }
      }}
  }
}
