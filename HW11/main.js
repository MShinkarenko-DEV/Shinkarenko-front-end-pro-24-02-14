function removeElement(arr = [], index)
{
    if (arr.length > index) {        
        arr.splice(index, 1);
    }

    console.log(arr);
}

array = [1, 21, 31, 4, 5, 6, 7];

removeElement(array, 4);
