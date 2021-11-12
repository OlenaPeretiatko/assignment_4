(function (window) {
    var speakWord = "Good Bye";
    var byeSpeaker = {};
    byeSpeaker.speak = function () {
        console.log(speakWord + " " + helloSpeaker.name);
    }
    window.byeSpeaker = byeSpeaker;
})(window);
