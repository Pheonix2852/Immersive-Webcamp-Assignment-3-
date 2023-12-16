const flashcardsData = [
  { word: 'Serendipity', meaning: 'The occurrence and development of events by chance in a happy or beneficial way' },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  { word: 'Quixotic', meaning: 'Extremely idealistic; unrealistic and impractical' },
  { word: 'Pernicious', meaning: 'Having a harmful effect, especially in a gradual or subtle way' },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  { word: 'Resilience', meaning: 'The capacity to recover quickly from difficulties; toughness' },
  { word: 'Ineffable', meaning: 'Too great or extreme to be expressed or described in words' },
  { word: 'Sycophant', meaning: 'A person who acts obsequiously toward someone important in order to gain advantage' },
];

let score = 0;
let cardsFlipped = 0;
const flippedCards = [];

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.getElementById('done-button');
const titleElement = document.getElementById('title');
const scoreCard = document.getElementById('score-card');

const handleStart = () => {
  flashcardsData.forEach((item) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);

    cardElement.addEventListener('click', () => {
      if (!cardElement.classList.contains('flipped')) {
        cardElement.classList.add('flipped');
        cardElement.classList.add('border-red-500');
        cardElement.innerText = item.meaning;
        score++;
        cardsFlipped++;
        flippedCards.push({ word: item.word, meaning: item.meaning });

        if (cardsFlipped === flashcardsData.length) {
          doneButton.classList.remove('hidden');
        }

        scoreCard.innerText = `Score: ${score}`;
      }
    });
  });

  resetButton.classList.remove('hidden');
  startButton.classList.add('hidden');
};

const handleReset = () => {
  cardContainer.innerHTML = '';
  score = 0;
  cardsFlipped = 0;
  flippedCards.length = 0; // Clear the flippedCards array
  scoreCard.innerText = 'Score: 0';
  doneButton.classList.add('hidden');
  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
};

const handleDone = () => {
  // Hide all cards except the flipped ones
  cardContainer.innerHTML = '';
  flippedCards.forEach((flippedCard) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
    cardElement.innerText = `${flippedCard.word}: ${flippedCard.meaning}`;
    cardContainer.appendChild(cardElement);
  });

  // Display the final score
  const scoreElement = document.createElement('div');
  scoreElement.className = 'font-bold text-xl mt-5';
  scoreElement.innerText = `Final Score: ${score}`;
  cardContainer.appendChild(scoreElement);

  // Hide the "Done" button again
  doneButton.classList.add('hidden');
};