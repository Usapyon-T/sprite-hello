let msg = "Hello World "
let Him = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ..............111111111111......
    .............111111111111111....
    .............111f11111111f11....
    ............1111111111111111....
    ............11111ffffff11111....
    ...........111111f1111fffff1....
    ..........111111111111111111....
    ..........111111111111111111....
    .....ffff1111fff1111111111......
    ....ff...1111111fffff...........
    ...ff...1111111111111...........
    ...f....1111111111111ff.........
    ...f....1111111111111..ffff.....
    ........11111111111111....ff....
    ........11111111111111.....ff...
    .......11111111111111...........
    .......111111111111111..........
    .......111111111111111..........
    .......111111111111111..........
    .......f............f...........
    .......f............f...........
    .......f............f...........
    .......f............f...........
    ....ffff............fffff.......
    ................................
    `, SpriteKind.Player)
Him.setPosition(24, 40)
scene.setBackgroundColor(2)
Him.say(msg, 500)
pause(2000)
let World = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ............1111111.............
    ..........88881118888...........
    .........8778888888878..........
    .........7777888888777..........
    ........877778888887778.........
    ........877778888887778.........
    ........777788888888877.........
    ........888888888888888.........
    ........888888888888888.........
    ........888887778888888.........
    ........888877778888888.........
    .........8877777888888..........
    .........8877777888888..........
    ..........88777888888...........
    ............8811118.............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
World.setPosition(117, 72)
World.say("Hello", 500)
