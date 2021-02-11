module.exports = function towelSort (matrix) {
    if(matrix && matrix.length > 0){
        let mas = [];
        for(i = 0; i <matrix.length; i++){
            if(i % 2 == 0){
                for(j = 0; j < matrix[i].length; j++){
                    mas.push(matrix[i][j]);
                }
            }
            else {
                for(j = matrix[i].length - 1; j >= 0; j--){
                    mas.push(matrix[i][j]);
                }
            }
        }
        return mas;
    }
    else return [];
}
