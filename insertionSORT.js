const num = [12,11,5,18,33,9,13,44,34,23];//the array to be sorted

console.log("First array :\n");
for(var i=0; i<10; i++){
    console.log(num[i]);
}

//the insertion sorting algo
for(var i=1; i<10; i++){
    for(var j=i; j>0; j--){        
        if(num[j] > num[j-1]){
            var temp = 0;
            temp = num[j];
            num[j] = num[j-1];
            num[j-1] = temp;
        }
    }
}

console.log("Sorted Array :")
for(var i=0; i<10; i++){
    console.log(num[i]);
}
