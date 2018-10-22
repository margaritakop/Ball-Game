# Ball Game based on intro to p5 tutorial

Play the game here: https://margaritakop.github.io/Ball-Game/

# Part 5

Create a new sketch using this code:

```js
var x = 0
var speed = 2

function setup() {
  size(300, 100)
}

function draw() {
  background(0)

  x = x + speed

  if (x < 0) {
    speed = speed * -1
  } else if (x > 300) {
    speed = speed * -1
  }

  ellipse(x, 30, 10, 10)
}
```

**Before you run it, try to predict what will happen on screen.** If you find
this difficult, sketch it out on a piece of paper and trace through the code
step by step, as if you were the computer.

**Run the code and see what happens. Was your prediction accurate? If not,
why?**

Replace the section that causes the ball to bounce with this:

```js
if (ballShouldBounce(ballPosition)) {
  speed = speed * -1
}
```

- Implement the `ballShouldBounce` function.
- Move the entire bounce `if` statement into a new function.
- Make the ball move vertically as well as horizontally
- Refactor your code by adding functions until `draw` only uses functions you've
  written, not ones from processing
- Turn your sketch into a small game
