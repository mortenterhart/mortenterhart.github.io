// Script to enable line numbers plugin of Prism.js
// in all code boxes which define a language-* class

var lineNumbersClass = 'line-numbers';
var preTags = document.getElementsByTagName('pre');

function tagContainsCode(tag) {
    for (const className in tag.classList) {
        if (className.match(/language-.*/)) {
            return true;
        }
    }
    return false;
}

for (const tag in preTags) {
    if (tagContainsCode(tag)) {
        console.log('Adding class line-numbers to ' + tag);
        tag.classList.add(lineNumbersClass);
    }
}
