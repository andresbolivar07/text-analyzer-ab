import analyzer from './analyzer.js';

const getTextAnalizer = ()  => {
    const getText = document.querySelector("textarea").value;
    const getWordCount = analyzer.getWordCount(getText);
    document.getElementById("words").innerHTML = getWordCount;
    const getCharacterCount = analyzer.getCharacterCount(getText);
    document.getElementById("totalCharacters").innerHTML = getCharacterCount;
    const getCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(getText);
    document.getElementById("excludingSpaces").innerHTML = getCharacterCountExcludingSpaces;
    const getAverageWordLength = analyzer.getAverageWordLength(getText);
    document.getElementById("averageWords").innerHTML = getAverageWordLength;
    const getNumberCount = analyzer.getNumberCount(getText);
    document.getElementById("numbers").innerHTML = getNumberCount;
    const getNumberSum = analyzer.getNumberSum(getText);
    document.getElementById("sumNumbers").innerHTML = getNumberSum;
};
document.addEventListener('input', getTextAnalizer);