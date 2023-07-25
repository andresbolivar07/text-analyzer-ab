import analyzer from './analyzer.js';

const getTextAnalizer = ()  => {
    const getText = document.querySelector("textarea").value;
    const getWordCount = analyzer.getWordCount(getText);
    document.getElementById("words").innerHTML = getWordCount;
    const getCharacterCount = analyzer.getCharacterCount(getText);
    document.getElementById("totalCharacters").innerHTML = getCharacterCount;
    const getCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(getText);
    document.getElementById("excludingSpaces").innerHTML = getCharacterCountExcludingSpaces;

    
};
document.addEventListener('input', getTextAnalizer);