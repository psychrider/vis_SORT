var num = [12,11,5,18,33,9,13,44,34,23];
var final = [10];
var k = 0;
function merge(l,m,r){
    var i=l;
    var j=mid;
    
    
}

function mergeSort(l,r){
    mid = (l+r)/2;
    mergeSort(l,mid);
    mergeSort(mid+1,r);
    merge(l,mid,r);
}