const array = ['one', 'one', 'three', 'five', 'three', 'five', 'two', 'one', 'seven'];

  const string_occurence = (string_array) => {
    const object = {};
    for (let index = 0; index < string_array.length; index++) {
     const element = string_array[index];
      const hasElement = object.hasOwnProperty(element);
      if (!hasElement) {
        object[element] = index;
      } 
    }
    return object;
  };
  
  console.log(string_occurence(array));
  