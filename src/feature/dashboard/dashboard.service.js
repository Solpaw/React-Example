import { LoremIpsum } from "lorem-ipsum";
import { BehaviorSubject, firstValueFrom, take } from "rxjs"
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

export const operationComplete = new BehaviorSubject();
const opComplete = operationComplete.asObservable();

// opComplete.subscribe(res => {
//   console.log(res)
// })

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
        await firstValueFrom(opComplete)
        unitResults.push(operationComplete.getValue());
        selectList([])
        await firstValueFrom(opComplete)
      }
      results.push(unitResults);
    }
    writeFile(results, 'Generete', amountOfComponents, 'image');
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

const writeFile = (results, title, numberOfComponents, additionalInfo) => {
  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet('Report');
  const repeatsRowData = [""]
  for(let i = 0; i < results[0]?.length; i++) {
    repeatsRowData.push(i + 1)
  }

  let titleRow = worksheet.addRow([title]);
  worksheet.addRow(repeatsRowData);
  results.forEach((ele, index) => {
    worksheet.addRow([numberOfComponents[index]].concat(ele))
  })

  workbook.xlsx.writeBuffer().then((data) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, `${title}-${additionalInfo}-React.xlsx`);
  });
}