

let canvas = document.querySelector('#game'),
    CanvWidth = canvas.width = document.documentElement.clientWidth,
    CanvHeight = canvas.height = document.documentElement.clientHeight;
let context = canvas.getContext('2d')
let traectory = []

// сделать requestAnimationFrame под все враузеры!



// сделать requestAnimationFrame под все враузеры!


let backgroundGame = new Image()
    backgroundGame.src = 'kosmosBGjpg.jpg'

let shipImg = new Image ()
    shipImg.src = 'be5uZ2U.png'

let Asteroid = new Image()
    Asteroid.src = 'asteroid.png'
    
let ships = {
    img : shipImg,
    x : 300,
    Y : 300
}

traectory.push({x: 0, y: 0, speadX : 6, speadY : 5})

canvas.addEventListener('mousemove', (e) =>{
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
    // Физика
    for(i in traectory){
        traectory[i].x = traectory[i].x + traectory[i].speadX ;
        traectory[i].y =  traectory[i].y + traectory[i].speadY;
        // границы game
        // if (traectory.x >= CanvWidth || traectory.y >= CanvHeight ){
        //     traectory.x = 0 
        //     traectory.y = 0
        // } 
        if (traectory[i].x >= CanvWidth || traectory[i].x < 0) traectory[i].speadX =- traectory[i].speadX 
        if (traectory[i].y >= CanvWidth || traectory[i].y < 0) traectory[i].speadY =- traectory[i].speadY 
    }
 
}

let render = () => {
    context.drawImage(backgroundGame, 0, 0, CanvWidth, CanvHeight)
    context.drawImage(ships.img, ships.x, ships.y, 90, 90)
    for(i in traectory) context.drawImage(Asteroid, traectory[i].x, traectory[i].y, 50, 50)
    // context.drawImage(Aster1, traectory.x, traectory.y, 50, 50)
    // context.drawImage(Aster2, traectory.x, traectory.y, 50, 50)
    // context.drawImage(Aster3, traectory.x, traectory.y, 50, 50)

}
