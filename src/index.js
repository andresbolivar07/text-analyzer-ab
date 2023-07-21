import analyzer from './analyzer.js';

const getTextAnalizer = ()  => {
    const getText = document.querySelector("textarea").value;
    const getWordCount = analyzer.getWordCount(getText);

    console.log(getWordCount);
};
document.addEventListener('input', getTextAnalizer);