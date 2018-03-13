// Script to enable line numbers plugin of Prism.js
// in all code boxes which define a language-* class

var lineNumbersClass = 'line-numbers';
var preTags = document.getElementsByTagName('pre');

function tagContainsCode(tag) {
    var classIndex = 0;
    while (tag.classList.item(classIndex) != null) {
        if (className.item(classIndex).match(/language-.*/)) {
            return true;
        }
        classIndex++;
    }
    return false;
}

var listIndex = 0;
while (preTags.item(listIndex) != null) {
    const tag = preTags.item(listIndex);
    if (tagContainsCode(tag)) {
        tag.classList.add(lineNumbersClass);
    }
    listIndex++;
}
