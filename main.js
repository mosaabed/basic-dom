// console.log(document)
const moveRight = function(){
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    if (left < 500-80)
    {
        left += 15
    }
    block.style.left = left + "px"
}

const moveLeft = function(){
    const block = document.getElementById("block")
    let right = parseInt(block.style.left) || 0
    if (right >0)
    {
        right -= 15
    }
    block.style.left = right + "px"
}

const moveUp = function(){
    const block = document.getElementById("block")
    let up = parseInt(block.style.top) || 0
    if (up >0)
    {
        up -= 15
    }
    block.style.top = up + "px"
}

const moveDown = function(){
    const block = document.getElementById("block")
    let down = parseInt(block.style.top) || 0
    console.log(down)
    if (down < 500-80)
    {
        down += 15
    }
    block.style.top = down + "px"
}