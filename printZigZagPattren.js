function printZigZagPattren(N){
    function calculateRowIndicas(rowNumber){
        let rowStart = rowNumber*N+1;
        let rowEnd = (rowNumber+1)*N
        return [rowStart, rowEnd]
    }
    for(let row=0; row<N; row++){
        let[rowStart,rowEnd] = calculateRowIndicas(row)
        let pattern = "";
        if(row % 2 === 0){
            for(let i=rowStart; i<=rowEnd; i++){
                pattern += i +'*'
            }
        }else{
            for(let i=rowEnd; i>=rowStart; i--){
                pattern += i +'*'
            }
        }
        console.log(pattern.trim())
    }
}
let N=5;
printZigZagPattren(N)