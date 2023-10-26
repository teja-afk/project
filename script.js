//pop up of LEARN MORE
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// User credits
let userCredits = 0;

function updateCredits() {
    document.getElementById("credits").textContent = userCredits;
}

// Attach an event listener to the form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    const itemNameInput = document.querySelector('input[name="itemName"]');
    
    if (fileInput.files.length === 0) {
        alert("Please select an image to upload.");
        return;
    }

    // Simulated server request to handle the image upload
    // In a real application, you would need to implement server-side code to handle this.
    // For example, you can use PHP, Node.js, or any other server-side technology.
    
    // Simulated server response
    setTimeout(() => {
        userCredits += 10; // Award the user with 10 credits for each upload
        updateCredits();
        alert(`Image uploaded successfully! You've earned 10 credits.`);
        fileInput.value = null;
        itemNameInput.value = "";
    }, 2000); // Simulated 2-second delay
});

