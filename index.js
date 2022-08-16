const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d') // c stands for context

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

// can't put in image source to drawImage directly - so these 2 lines allow us to import our map
const image = new Image()
image.src = './img/PokemonGameMap.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'




// Sprite class allows for background to move when moving player (player stays fixed in centre screen)
class Sprite {   //whenever creating new instance of Sprite, automatically call what's in constructor
    constructor({ position, velocity, image}) {
        this.position = position
        this.image = image
    }

    draw(){
        c.drawImage(this.image, this.position.x, this.position.y) // last 2 args represent x & y coordinates for beginning frame

    }
}

const background = new Sprite({
    position: {
        x: -280,
        y: -600
    },
    image: image // setting image equal to our game map 
})


/*Create a new repository on the command line
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/neetigyachahar/codebox.git
git push -u origin main*/ 
const keys = {
    w: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },

    a: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },

    s: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }
}

// recursive loop until broken manually
function animate(){

    window.requestAnimationFrame(animate)
    background.draw()

// map may take longer to load than time for code to run,
// playerImage here and not on own - otherwise map will overlay as takes longer to load
// playerImage is at centre of canvas

    c.drawImage(
        playerImage,
        // cropping coordinates
        0,
        0,
        playerImage.width / 4, 
        playerImage.height,

        // actual coordinates of playerImage
        canvas.width / 2 - (playerImage.width / 4 / 2),
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4, 
        playerImage.height,
        ) 

        // player movement
        if (keys.w.pressed || keys.ArrowUp.pressed) background.position.y += 3 
        else if (keys.a.pressed || keys.ArrowLeft.pressed) background.position.x += 3 
        else if (keys.s.pressed || keys.ArrowDown.pressed) background.position.y -= 3 
        else if (keys.d.pressed || keys.ArrowRight.pressed) background.position.x -= 3 
        

}
animate()

// for when key is pressed down
window.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'w':
            keys.w.pressed = true
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = true
            break    

        case 'a':
            keys.a.pressed = true
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            break    

        case 's':
            keys.s.pressed = true
            break
        case 'ArrowDown':
            keys.ArrowDown.pressed = true
            break    

        case 'd':
            keys.d.pressed = true
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            break    


    }
})

// when pressed key is released
window.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'w':
            keys.w.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break    

        case 'a':
            keys.a.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break    

        case 's':
            keys.s.pressed = false
            break
        case 'ArrowDown':
            keys.ArrowDown.pressed = false
            break    

        case 'd':
            keys.d.pressed = false
            break
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break    


    }
})
