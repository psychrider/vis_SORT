const num = [12,11,5,18,33,9,13,44,34,23];//array to be sorted

console.log("first array :\n");

for(var i=0; i<10;i++){
    console.log(num[i]);
}

console.log("second array :\n");
//the sorting algo
for(var i =0; i<10; i++){
    var max = i;
    for(var j =i+1; j<10; j++){
        if(num[j] > num[max]){
            max = j;
        }
    }
    var temp = 0;
    temp = num[i];
    num[i] = num[max];
    num[max] = temp;
    console.log(num[i]);
}
