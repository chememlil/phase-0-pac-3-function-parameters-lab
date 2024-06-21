function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Example usage:
  console.log(introductionWithLanguage('Alice', 'JavaScript')); 
  // Output: Hi, my name is Alice and I am learning to program in JavaScript.
  
  console.log(introductionWithLanguage('Bob', 'Python')); 
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Example usage:
  console.log(introductionWithLanguageOptional('Alice')); 
  // Output: Hi, my name is Alice and I am learning to program in JavaScript.
  
  console.log(introductionWithLanguageOptional('Bob', 'Python'));