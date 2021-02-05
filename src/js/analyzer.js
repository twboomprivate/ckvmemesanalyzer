let analyzer = {};
function frequencyFinder() {
    let countedNames = analyzer.types.reduce(function (allNames, name) {
        if (name in allNames) {
          allNames[name]++
        }
        else {
          allNames[name] = 1
        }
        return allNames
      }, {})
    return countedNames
}

function getTypes() {
    analyzer.types = [];
    for (let i = 0; i < analyzer.array.length; i++) {
        let type = analyzer.array[i].type;
        analyzer.types.push(type)
    }
    return analyzer.types
}

function analyze(arr) {
    analyzer.array = arr;
    getTypes();
    analyzer.frequencies = frequencyFinder();
    return analyzer;
}