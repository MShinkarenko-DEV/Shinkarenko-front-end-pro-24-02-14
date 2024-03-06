function removeElement(arr = [], item)
{
    let index = arr.indexOf(item);
    if (index !== -1) {        
        arr.splice(index, 1);
    }

    console.log(arr);
}

array = [1, 21, 31, 4, 5, 6, 7];

removeElement(array, 4);
removeElement(array, 21);
removeElement(array, 31);
removeElement(array, 'hello world');
