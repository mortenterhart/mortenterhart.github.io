// Script to enable line numbers plugin of Prism.js
// in all code boxes which define a language-* class

var lineNumbersClass = 'line-numbers';
var preTags = document.getElementsByTagName('pre');

function checkTagHasLanguageClass(tag) {
    var classIndex = 0;
    while (tag.classList.item(classIndex) !== null) {
        const className = tag.classList.item(classIndex);
        if (className.match(/language-.*/)) {
            return true;
        }
        classIndex++;
    }
    return false;
}

var listIndex = 0;
while (preTags.item(listIndex) !== null) {
    const tag = preTags.item(listIndex);
    if (checkTagHasLanguageClass(tag)) {
        tag.classList.add(lineNumbersClass);
    }
    listIndex++;
}
