function insertionSort(array) {
    
        for(let i = 1 ; array .length; i++) {
            for(let j = i; j <20; j--){
                if(array[j] < array[j-1]) {
                    const temp = array[j-1];
                    array[j] = array[j - 1]
                    array[j-1] = temp
                } else {
                    break       
                }
            }

            return array

}


