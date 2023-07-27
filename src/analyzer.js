const analyzer = {  
  getWordCount: (getText) => {
    const textNormalizer = getText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

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
  getCharacterCount: (getText) => getText.length,
    
  getCharacterCountExcludingSpaces: (getText) => {
    const withoutSpace = getText.split(" ").join("");
    
    const withoutComma = withoutSpace.split(",").join("");

    const withoutdot = withoutComma.split(".").join("");

    const withoutSemicolon = withoutdot.split(";").join("");

    const withoutTwoPoints = withoutSemicolon.split(":").join("");

    const withoutSlash = withoutTwoPoints.split("/").join("");

    const withoutAt = withoutSlash.split("@").join("");

    const withoutquestionMark = withoutAt.split("?").join("");

    const withoutquestionMarkTwo = withoutquestionMark.split("¿").join("");

    const withoutExclamationMark = withoutquestionMarkTwo.split("!").join("");

    const withoutQuotationMarks = withoutExclamationMark.split('"').join("");

    const withoutApostrophe = withoutQuotationMarks.split("'").join("");

    const withoutHyphen = withoutApostrophe.split("-").join("");

    const withoutUnderscore = withoutHyphen.split("_").join("");

    const withoutEquals = withoutUnderscore.split("=").join("");

    const withoutParenthesisR = withoutEquals.split( "(" ).join("");

    const withoutParenthesisL = withoutParenthesisR.split( ")" ).join("").length;
    
    return withoutParenthesisL;
    
  },

  getAverageWordLength: (getText) => (analyzer.getCharacterCountExcludingSpaces(getText) / analyzer.getWordCount(getText)).toFixed(2),

  getNumberCount: (getText) => {
    
    const text = getText.split(" ");
    let count = 0;

    for (let i = 0; i < text.length; i++) {
      if (!isNaN(text[i])) {
        count++;
      }
    }
    return count;
  },

  getNumberSum: (getText) => {

    const text = getText.split(" ");

    const numbersArray = text.filter(Number);

    return numbersArray.length === 0 ? 0 : numbersArray.reduce((a,b) => parseFloat(a) + parseFloat(b));
  },
};

export default analyzer;
