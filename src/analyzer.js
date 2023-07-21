const analyzer = {  
  getWordCount: (getText) => {
    const textNormalizer = getText.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    const convertText = textNormalizer.toLowerCase().replace(/[^\w\s]/g, '');

    const words = convertText.split(/\s+/);

    const counterWords = {};

    words.forEach(word => {
      if (word in counterWords) {
        counterWords[word]++;
      }else {
        counterWords[word] = 1;
      }
    });

    let totalWords = 0;
    for (const word in counterWords) {
      totalWords += counterWords[word];
    }
    return totalWords;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
