class Word {

  #spanishWord;
  #englishWord;
  
 constructor(spanish, english) {
    spanishWord(spanish);
    englishWord(english);
 }

  get spanishWord(){
    return this.#spanishWord;
  }

  set spanishWord(word){
    if(word != null)
      this.#spanishWord = word;
    else
      this.#spanishWord = " ";
  }

  get englishWord(){
    return this.#englishWord;
  }

  set englishWord(word){
    if(word!=null)
      this.#englishWord = word;
    else
      this.#englishWord = " ";
  }
  
}
