import * as pjs from "/source/modules/index.js"
pjs.setup(500, 500, 0.9);
pjs.loadFont("FiraCode", "/source/fonts/FiraCode/FiraCode-Regular.ttf")

let a = new pjs.actor(undefined, [100, 64], [48, 48], [0, 0])

let b = new pjs.actor("color:red", [234, 64], [32, 32], [0, 0])

let c = new pjs.rect([0,0],[64,64],"#FFFFFF")
c.hitbox = new pjs.hitbox2(0,0,64,64)

let d = new pjs.rect([436,0],[64,64],"blue")
d.hitbox = new pjs.hitbox2(436,0,64,64)

a.conditions.isDraggable = true
window.addEventListener("pjsUpdate", () => {
    pjs.clear()
    a.draw()
    
    b.draw()
    
    c.draw()
    
    d.draw()
    if(pjs.keyPressed("e")){
        a.hitbox.draw()
        b.hitbox.draw()
        c.hitbox.draw()
        d.hitbox.draw()
    }

    if(pjs.keyPressed("d") && c.width < 436){
        c.width += 5
    }
    if(pjs.keyPressed("a") && c.width > 64){
        c.width -= 5
    }

    if(pjs.keyPressed("s") && b.y < 128){
        b.y += 5
    }
    if(pjs.keyPressed("w") && b.y > 0){
        b.y -= 5
    }

    c.hitbox.width = c.width
    if(c.hitbox.collide2(d.hitbox)){
        c.color = "blue"
    }
    else if(c.hitbox.collide(a.hitbox)){
        c.color = "rgba(255,255,0,0.75"
    }
    else{
        c.color = "#FFF"
    }

    if(a.hitbox.collide(b.hitbox)){
        a.changeImage("color:green")
    }
    else if(a.hitbox.collide2(c.hitbox)){
        a.changeImage("color:green")
    }
    else if (a.color != "#000000"){
        a.changeImage("/source/icons/PizzaJS256x.png")
    }


    if(b.hitbox.collide(a.hitbox)){
        b.changeImage("color:green")
    }
    else if(b.hitbox.collide2(c.hitbox)){
        b.changeImage("color:green")
    }
    else{
        b.changeImage("color:red")
    }
})  

pjs.start()