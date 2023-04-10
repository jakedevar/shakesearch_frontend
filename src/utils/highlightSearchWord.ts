const highlightSearchWord = (text: string, searchWord: string, caseSensitive: boolean) => {
  let splitText;
  if (caseSensitive) {
    splitText = text.split(new RegExp(`${searchWord}`));
  } else {
    splitText = text.split(new RegExp(searchWord, 'i'));
  }
  return splitText
}

export default highlightSearchWord;
