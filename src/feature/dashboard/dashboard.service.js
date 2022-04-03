const title = 'Lorem ipsum dolor sit amet';
const paragraph = 'Integer at sollicitudin orci, quis convallis ex. Sed facilisis libero sed venenatis vestibulum. Donec mollis euismod metus vel pharetra. Ut et lorem eleifend, dignissim nisl sit amet, commodo felis. Nam tempor arcu quis felis tempor porta. Phasellus elit purus, molestie in est eu, ultrices malesuada ligula. Vivamus at dui nunc. Sed hendrerit, erat ut laoreet vulputate, ante purus eleifend mi, quis pharetra neque est non dolor. Phasellus sit amet leo diam.';

export const generateTestList = (amount, hasImage) => {
    const newList = [];

    for(let i = 0; i < amount; i++) {
      newList.push(generateNewTestItem(i, hasImage));
    }

    return newList;
}

export const removeFromList = (list, amount, isRandom) => {
    const newList = [...list];
    for(let i = 0; i < amount; i++) {
      const index = Math.floor(Math.random() * newList.length);
      newList.splice(index, 1)
    }
    return newList;
}

export const editItems = (list, amount, isRandom) => {
    const newList = [...list];
    for(let i = 0; i < amount; i++) {
      const index = Math.floor(Math.random() * newList.length);
      newList[index].content = 'changes';
    }
    return newList;
}

const generateNewTestItem = (index, hasImage) => {
    return {
      url: hasImage ? 'https://picsum.photos/200' : '', 
      title: title,
      content: paragraph,
      index: index,
    }
}