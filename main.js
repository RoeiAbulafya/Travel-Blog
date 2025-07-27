
const myForm = document.getElementById('myForm');
function showCustomMessage(message) {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'message-box-overlay';
            overlay.onclick = () => hideCustomMessage(); // Allow clicking outside to close
            messageBoxContainer.appendChild(overlay);

            // Create message box
            const messageBox = document.createElement('div');
            messageBox.className = 'message-box';
            messageBox.innerHTML = `
                <p>${message}</p>
                <button id="messageBoxOkBtn">
                    OK
                </button>
            `;
            messageBoxContainer.appendChild(messageBox);

            // Add event listener to the OK button to close the message box
            document.getElementById('messageBoxOkBtn').onclick = () => hideCustomMessage();
        }
function hideCustomMessage() {
            messageBoxContainer.innerHTML = ''; // Clear all children (overlay and message box)
        }
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    showCustomMessage('Thank you for your submission, ' + name + '!');
    myForm.reset();
});