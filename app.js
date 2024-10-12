let protoCharacter = {
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
};

let killerRabbit = Object.create(protoCharacter);
killerRabbit.type = "Killer",
killerRabbit.speak("Screee!");

// Here there Obaniel.. I am going to create a website for my church. After that, I will host it online by God's grace and special mercies. 

// And that will be the beginning of break through for me. Say Amen>.......... Amen. 123456789