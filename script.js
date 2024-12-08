// Function to handle user input
document.getElementById("send-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value.trim();
    const responseBox = document.getElementById("response");
  
    if (userInput === "") {
      responseBox.textContent = "Please type something!";
      return;
    }
  
    responseBox.textContent = generateResponse(userInput);
    document.getElementById("user-input").value = "";
  });
  
  // Function to handle flavor button clicks
  const flavorButtons = document.querySelectorAll(".flavor-btn");
  flavorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const flavor = this.getAttribute("data-flavor");
      const responseBox = document.getElementById("response");
      responseBox.textContent = `You selected the ${flavor} flavor. It's a great choice!`;
    });
  });
  
  // Rule-based responses
  function generateResponse(input) {
    input = input.toLowerCase();
  
    if (input.includes("classic")) {
      return "Classic milk tea is a timeless choice!";
    } else if (input.includes("taro")) {
      return "Taro milk tea is sweet and creamy!";
    } else if (input.includes("matcha")) {
      return "Matcha milk tea is perfect for green tea lovers!";
    } else if (input.includes("wintermelon")) {
      return "Wintermelon milk tea is light and refreshing!";
    } else {
      return "Sorry, I don't recognize that flavor. Please choose one from the options!";
    }
  }
  