
 let currentPlayer = 1;
        let player1Score = 0;
        let player2Score = 0;
        let isGameDisabled = false;

        function rollDice() {
            if (!isGameDisabled) {
                const roll = Math.floor(Math.random() * 6) + 1;
                const diceImage = document.getElementById('diceImage');
                diceImage.src = `dice${roll}.png`;

                if (currentPlayer === 1) {
                    player1Score += roll;
                    document.getElementById('player1Score').textContent = player1Score;
                    currentPlayer = 2;
                } else {
                    player2Score += roll;
                    document.getElementById('player2Score').textContent = player2Score;
                    currentPlayer = 1;
                }

                document.getElementById('rollButton').disabled = true;
                setTimeout(() => {
                    document.getElementById('rollButton').disabled = false;
                }, 1000); // Enable roll button after 1 second

                checkWinner();
            }
        }

        function checkWinner() {
            if (player1Score >= 30) {
                announceWinner(1);
            } else if (player2Score >= 30) {
                announceWinner(2);
            }
        }

        function announceWinner(player) {
            isGameDisabled = true;
            document.getElementById('rollButton').disabled = true;
            alert(`Player ${player} wins!`);
        }

        function resetGame() {
            currentPlayer = 1;
            player1Score = 0;
            player2Score = 0;
            isGameDisabled = false;
            document.getElementById('player1Score').textContent = '0';
            document.getElementById('player2Score').textContent = '0';
            document.getElementById('diceImage').src = 'dice1.png';
            document.getElementById('rollButton').disabled = false;
        }