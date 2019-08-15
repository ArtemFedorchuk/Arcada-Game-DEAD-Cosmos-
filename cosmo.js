

let canvas = document.querySelector('#game'),
    CanvWidth = canvas.width = document.documentElement.clientWidth,
    CanvHeight = canvas.height = document.documentElement.clientHeight;
let context = canvas.getContext('2d');
let traectory = [];
let fires = [];
let timer = 0;
let meteors =['asteroid.png', 'aster2.png', 'meteor3.png', 'Meteor4.png'];

// сделать requestAnimationFrame под все враузеры!



// сделать requestAnimationFrame под все враузеры!


let backgroundGame = new Image()
    backgroundGame.src = 'kosmosBGjpg.jpg'

let shipImg = new Image ()
    shipImg.src = 'be5uZ2U.png'

let Asteroid = new Image()
    Asteroid.src = meteors[Math.floor(Math.random()* meteors.length)]

let Fire = new Image()
    Fire.src = 'fire.png'
    
let ships = {
    img : shipImg,
    x : 300,
    Y : 300
}

let mouse = canvas.addEventListener('mousemove', (e) =>{
    ships.x = e.offsetX-25
    ships.y = e.offsetY -10
 });

backgroundGame.onload = () => {
    game()
}

let game = () => {
    update()
    render()
    requestAnimationFrame(game) // <Безконечный игровой цикл
}

let update = () => {
    
    timer++
    if(timer % 50 == 0){
        traectory.push({
            x: Math.random()*CanvWidth,
            y: -50,
            speadX : Math.random()* 2-1,
            speadY : Math.random()*10
        })
    }
    if(timer % 20 == 0){
        fires.push({
            x: ships.x,
            y: ships.y,
            spX: 0,
            spY: -5
        })
    }
    // Физика
    for(i in fires){
        fires[i].y = fires[i].y + fires[i].spY
        fires[i].x = fires[i].x + fires[i].spX
        }
        // if(fires[i].y <= CanvHeight) fires.splice(i,1)

    for(i in traectory){
        traectory[i].x = traectory[i].x + traectory[i].speadX ;
        traectory[i].y =  traectory[i].y + traectory[i].speadY;
    // границы game
        if (traectory[i].x >= CanvWidth || traectory[i].x < 0) traectory[i].speadX =- traectory[i].speadX 
        if (traectory[i].y >= CanvWidth) traectory.splice(i,1)
    }
 
}

let render = () => {
    context.drawImage(backgroundGame, 0, 0, CanvWidth, CanvHeight)
    context.drawImage(ships.img, ships.x, ships.y, 90, 90)
    for(i in fires) context.drawImage(Fire, fires[i].x +55, fires[i].y +30, 40, 40)
    // for(i in fires) context.drawImage(Fire, fires[i].x -4, fires[i].y +30, 40, 40)
    for(i in traectory) context.drawImage(Asteroid, traectory[i].x, traectory[i].y, 50, 50)
    // context.drawImage(Aster2, traectory.x, traectory.y, 50, 50)
    // context.drawImage(Aster3, traectory.x, traectory.y, 50, 50)

}

console.log(fires)