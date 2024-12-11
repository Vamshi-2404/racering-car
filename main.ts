controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    truck.vy = -300
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    truck.vy = -200
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false, effects.none)
})
let truck: Sprite = null
truck = sprites.create(assets.image`truck3`, SpriteKind.Player)
truck.ay = 500
truck.vx = 100
scene.cameraFollowSprite(truck)
animation.runImageAnimation(
truck,
assets.animation`truck3 animated`,
100,
true
)
