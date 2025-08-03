
class PlaceToPutXorO {
    constructor(elementId, rowId, colId) {
        this.elementId = elementId;
        this.rowId = rowId;
        this.colId = colId;
    }

    clickDetect() {
        document.getElementById(this.elementId).addEventListener('click',() => {
                console.log('clicked')
                if (isFirstPlayer) {
                    if (!grid[this.rowId][this.colId]) {
                        grid[this.rowId][this.colId] = 'X'
                        document.getElementById(this.elementId).innerText = 'X'
                    }
                    console.log(grid)
                    this.winningPattern()
                    this.isDraw()
                    if (!hasWin) {
                        isFirstPlayer = false
                    } else {
                        console.log('player 1 has won')
                        return;
                    }


                } else {
                    // placeXorO('O')
                    if (!grid[this.rowId][this.colId]) {
                        grid[this.rowId][this.colId] = 'O'
                        document.getElementById(this.elementId).innerText = 'O'
                    }
                    this.winningPattern()
                    this.isDraw()
                    if (!hasWin) {
                        isFirstPlayer = true
                    } else {
                        console.log('player2 has won')
                        return;
                    }
                }
            }

        )

    }

    winningPattern() {
    let flatGrid = grid.flat();

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern
        if ((flatGrid[a] !== '' && flatGrid[b] !== '' && flatGrid[c] !== '') && (flatGrid[a] === flatGrid[b] && flatGrid[b] === flatGrid[c])) {
            hasWin = true;
            return;
        }
    }
}

    isDraw(){
        let flatGrid = grid.flat();
        let check = flatGrid.length;
        let i = 0;
        for(let value of flatGrid){
            if(value !== ""){
                i += 1;
            }
        }
        console.log(`i value ${i} and check vale ${check}`)
        if(i === check){
            console.log("it is a draw")
        }
    }


}


const zeroZero = new PlaceToPutXorO('zerozero',0,0)
const zeroOne = new PlaceToPutXorO('zeroone',0,1)
const zeroTwo = new PlaceToPutXorO('zerotwo',0,2)

const oneZero = new PlaceToPutXorO('onezero',1,0)
const oneOne = new PlaceToPutXorO('oneone',1,1)
const oneTwo = new PlaceToPutXorO('onetwo',1,2)

const twoZero = new PlaceToPutXorO('twozero',2,0)
const twoOne = new PlaceToPutXorO('twoone',2,1)
const twoTwo = new PlaceToPutXorO('twotwo',2,2)

function listenToClick(){
    zeroZero.clickDetect();
    zeroOne.clickDetect();
    zeroTwo.clickDetect();

    oneZero.clickDetect();
    oneOne.clickDetect();
    oneTwo.clickDetect();

    twoZero.clickDetect();
    twoOne.clickDetect();
    twoTwo.clickDetect();
}

listenToClick();

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let grid = Array.from({ length: 3 }, () => Array(3).fill(''));
console.log(grid)

let hasWin = false;
let isPlaying = false;
let isFirstPlayer = true;



// gameStart()
