var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (name in names) {
    var firstLetter = names[name].toLowerCase().charAt();

    helloSpeaker.name = names[name];
    byeSpeaker.name = names[name];

    if (firstLetter === 'j') {
        byeSpeaker.speak(names[name])
    } else {
        helloSpeaker.speak(names[name])
    }

}