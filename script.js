// 1. Define the possible symbols
const symbols = ['🍒', '🍋', '🔔', '💎', '⭐'];

// 2. Select DOM elements
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinBtn = document.getElementById('spin-button');
const message = document.getElementById('message');

// 3. The Spin Function
function spin() {
  // Disable button during spin
  spinBtn.disabled = true;
  message.textContent = "Spinning...";

  // Get random symbols
  const res1 = symbols[Math.floor(Math.random() * symbols.length)];
  const res2 = symbols[Math.floor(Math.random() * symbols.length)];
  const res3 = symbols[Math.floor(Math.random() * symbols.length)];

  // Update the UI
  reel1.textContent = res1;
  reel2.textContent = res2;
  reel3.textContent = res3;

  // Check for win
  checkWin(res1, res2, res3);
  
  spinBtn.disabled = false;
}

// 4. The Win Logic
function checkWin(s1, s2, s3) {
  if (s1 === s2 && s2 === s3) {
    message.textContent = `JACKPOT! You won with ${s1}!`;
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    message.textContent = "Small Win! Two matches.";
  } else {
    message.textContent = "Try again!";
  }
}

// 5. Add Event Listener
spinBtn.addEventListener('click', spin);