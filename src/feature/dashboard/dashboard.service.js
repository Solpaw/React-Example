import { LoremIpsum } from "lorem-ipsum";
import { Subject, firstValueFrom } from "rxjs"

const operationComplete = new Subject();
const opComplete = operationComplete.asObservable();

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export const generateTestList = (amount, hasImage, startTime, setOperationLimit, setResults, addResult) => {
    const newList = [];

    for(let i = 0; i < amount; i++) {
      newList.push(generateNewTestItem(i, hasImage));
    }
    setOperationLimit(amount)
    startTime(performance.now());
    return newList;
}

export const removeFromList = (list, amount, isRandom, startTime, setOperationLimit, setResults, addResult) => {
    const newList = [...list];
    for(let i = 0; i < amount; i++) {
      const index = Math.floor(Math.random() * newList.length);
      newList.splice(index, 1)
    }
    setOperationLimit(list.length)
    startTime(performance.now());
    return newList;
}

export const editItems = (list, amount, isRandom, startTime, setOperationLimit, setResults, addResult) => {
    const newList = [...list];
    for(let i = 0; i < amount; i++) {
      const index = Math.floor(Math.random() * newList.length);
      newList[index].content = lorem.generateSentences(5);
    }
    setOperationLimit(list.length)
    startTime(performance.now());
    return newList;
}

export const runGenerationTest = async (maxAmount, repeats, initial, step, startTime, setOperationLimit, setResults, addResult, selectList) => {
    const results = [];
    const amountOfComponents = [];
    for(let i = initial; i <= maxAmount; i += step) {
      const unitResults = [];
      amountOfComponents.push(i);
      for(let j = 0; j < repeats; j++) {
        selectList([...generateTestList(i, true, startTime, setOperationLimit, setResults, addResult)]);
        let val = await firstValueFrom(opComplete)
        unitResults.push(val);
        console.log(i, val)
        selectList([])
        val = await firstValueFrom(opComplete)
        console.log(val)
      }
      results.push(unitResults);
    }
    // this.writeFile('Generete', amountOfComponents, 'image');
    console.log(results)
}

export const runEditTest = () => {
  
}

export const runRemoveTest = () => {
  
}

const generateNewTestItem = (index, hasImage) => {
    return {
      url: hasImage ? 'https://picsum.photos/200' : '', 
      title: lorem.generateWords(4),
      content: lorem.generateSentences(5),
      index: index,
    }
}