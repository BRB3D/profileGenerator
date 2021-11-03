
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question(`What's your name? Nicknames are also acceptable 😁`, (answer) => {
  rl.question(`What's an activity you like doing? ⛷`, (answer2) => {
    rl.question(`What do you listen to while doing that? 🎧`, (answer3) => {
     
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) 🥗`, (answer4) => {
        rl.question(`What's your favourite thing to eat for that meal? 🍗`, (answer5) => {
          rl.question(`Which sport is your absolute favourite? 🥊`, (answer6) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!🦸`, (answer7) => {
              console.log(`${answer} loves ${answer2}, while listening to ${answer3} devouring ${answer5} at ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}`); 
              
              rl.close();  
            });
     
          });
     
        });
     
      });
    });
     
   });
});


