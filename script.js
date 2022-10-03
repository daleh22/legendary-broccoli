let autoClick = 0;

let clicks = [1, 2, 3, 4, 5]

let cost = [10, 20, 30, 40, 500000]

let unlock1 = [0, 10, 20, 30, 50000]

let points = 0

let clicker = document.getElementsByTagName("img")[0]
console.log(clicker)

let event1 = 0

let totalClicks = 0

let counter = document.getElementById("counter")

let counter1 = document.getElementById("counter1")

clicker.addEventListener("click", function(event){
  totalClicks ++; 
  console.log("click")
  counter.textContent = "CLAPPY: " + points
  points++;
  let sound = new Audio("fartsnd.mp3")
  sound.play()
})

setInterval(function(event){
  if(totalClicks >= unlock1[event1]){
    if(event1 < unlock1.length){
      unlock(cost[event1], clicks[event1])
      event1 = event1 +1
    }
    console.log(event1)
  }
  totalClicks = totalClicks + autoClick
  points = points + autoClick
  counter.textContent = "CLAPPY: " + points


}, 1000) 
function unlock(cost, increment){
  let mult = document.getElementsByClassName("multiplierdiv")
  let call1 = document.getElementsByClassName("button")[event1]
  call1.classList.remove("invisible")
  let call2 = document.getElementsByClassName("costclass")[event1]
  console.log(call1)
  call1.addEventListener("click", function (evt){
    console.log("chicken")
    if(points >= cost){
      points = points - cost
      autoClick + clicks[event1]
      cost = cost * 2
      mult.textContent = "multiplier" + cost
      console.log(points)
      counter.textContent = "CLAPPY: " + points
      call2.textContent = "cost: " + cost
      autoClick = autoClick + increment
      counter1.textContent = autoClick
    }
    
  })

}
console.log(unlock(event1, cost[event1], clicks[event1]))


