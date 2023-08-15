// console.log('Hello Quots')
// 50 qoutes

const qoutes=[
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "person": "Natalia Walker"
    },
    {
      "quote": "The way to get started is to quit talking and begin doing.",
      "person": "Michael Bennett"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life.",
      "person": "Samantha Turner"
    },
    {
      "quote": "Life is really simple, but we insist on making it complicated.",
      "person": "Oliver Clark"
    },
    {
      "quote": "Believe you can and you're halfway there.",
      "person": "Emily Rodriguez"
    },
    {
      "quote": "To succeed in life, you need two things: ignorance and confidence.",
      "person": "Daniel White"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
      "person": "Alicia Carter"
    },
    {
      "quote": "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow.",
      "person": "Isaac Foster"
    },
    {
      "quote": "The future belongs to those who believe in the beauty of their dreams.",
      "person": "Sophia Patel"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "person": "Ethan Phillips"
    },
    {
      "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      "person": "Lily Martinez"
    },
    {
      "quote": "The only way to do great work is to love what you do.",
      "person": "James Foster"
    },
    {
      "quote": "Life is 10% what happens to us and 90% how we react to it.",
      "person": "Madison Parker"
    },
    {
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "person": "Mason Collins"
    },
    {
      "quote": "The best revenge is massive success.",
      "person": "Chloe Stewart"
    },
    {
      "quote": "Keep your face always toward the sunshine—and shadows will fall behind you.",
      "person": "Caleb Young"
    },
    {
      "quote": "You miss 100% of the shots you don't take.",
      "person": "Zoe Nelson"
    },
    {
      "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
      "person": "Ella Turner"
    },
    {
      "quote": "The only person you should try to be better than is the person you were yesterday.",
      "person": "Liam Adams"
    },
    {
      "quote": "Life is short, and it's up to you to make it sweet.",
      "person": "Ava Mitchell"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse.",
      "person": "Jack Evans"
    },
    {
      "quote": "Don't watch the clock; do what it does. Keep going.",
      "person": "Grace Rogers"
    },
    {
      "quote": "Success is not in what you have, but who you are.",
      "person": "Oscar Clark"
    },
    {
      "quote": "In the midst of difficulty lies opportunity.",
      "person": "Hannah Wright"
    },
    {
      "quote": "The secret to getting ahead is getting started.",
      "person": "Henry Martinez"
    },
    {
      "quote": "I have not failed. I've just found 10,000 ways that won't work.",
      "person": "Aria Phillips"
    },
    {
      "quote": "The harder the conflict, the greater the triumph.",
      "person": "Noah Bailey"
    },
    {
      "quote": "Life's too mysterious to take too serious.",
      "person": "Victoria Hill"
    },
    {
      "quote": "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      "person": "Xander Wood"
    },
    {
      "quote": "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
      "person": "Mia Turner"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be.",
      "person": "Ethan Parker"
    },
    {
      "quote": "Life is 10% what happens to us and 90% how we react to it.",
      "person": "Sophia White"
    },
    {
      "quote": "Life is either a daring adventure or nothing at all.",
      "person": "Elijah Mitchell"
    },
    {
      "quote": "Success usually comes to those who are too busy to be looking for it.",
      "person": "Isabella Turner"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
      "person": "Lucas Anderson"
    },
    {
      "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
      "person": "Avery Collins"
    },
    {
      "quote": "I didn't fail the test. I just found 100 ways to do it wrong.",
      "person": "Olivia Campbell"
    },
    {
      "quote": "Success is not how high you have climbed, but how you make a positive difference to the world.",
      "person": "Ethan Johnson"
    },
    {
      "quote": "You are never too old to set another goal or to dream a new dream.",
      "person": "Sophia Lewis"
    },
    {
      "quote": "I find that the harder I work, the more luck I seem to have.",
      "person": "Liam Roberts"
    },
    {
      "quote": "Don't be afraid to give up the good to go for the great.",
      "person": "Emma Turner"
    },
    {
      "quote": "The road to success and the road to failure are almost exactly the same.",
      "person": "Aiden Mitchell"
    },
    {
      "quote": "Success is not the key to happiness. Happiness is the key to success.",
      "person": "Oliver Brown"
    },
    {
      "quote": "I would rather die of passion than of boredom.",
      "person": "Sophia Robinson"
    },
    {
      "quote": "The only way to do great work is to love what you do.",
      "person": "Aria Wilson"
    },
    {
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "person": "Noah Davis"
    },
    {
      "quote": "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      "person": "Ava Carter"
    },
    {
      "quote": "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
      "person": "Ethan Smith"
    },
    {
      "quote": "The only person you are destined to become is the person you decide to be.",
      "person": "Mia Adams"
    }
  ]
  


document.getElementById('quote-new').addEventListener('click',function(){
    //console.log('clicked')
    const p=document.getElementById('quote-des');

    const h2=document.getElementById('author');


const randomQuote =Math.floor(Math.random()*qoutes.length);

//console.log(qoutes[randomQuote].quote);
//console.log(qoutes[randomQuote].person);

p.innerText=qoutes[randomQuote].quote;

h2.innerText=qoutes[randomQuote].person;


})