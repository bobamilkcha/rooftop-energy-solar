
// Function to add event listeners for single or multiple elements
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  /* Navbar toggle function */
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  const overlay = document.querySelector("[data-overlay]");
  
  /* Toggle navbar and overlay active states */
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
  
  addEventOnElem(navTogglers, "click", toggleNavbar);
  
  const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  }
  
  addEventOnElem(navbarLinks, "click", closeNavbar);

  //Back to top function
  const backTopBtn = document.querySelector("[data-back-top-btn]");

//Show button when scroll position is greater than 150
  const btnActive = function () {
    if (window.scrollY > 150) {
      backTopBtn.classList.add("active");
    } else {
      backTopBtn.classList.remove("active");
    }
  }
  
  
  addEventOnElem(window, "scroll", btnActive);

/* SOLAR CALCULATOR */
function calculateSolarSavings() {
    // Input values
    const billAmount = parseFloat(document.getElementById('billAmount').value);

    // Constants declaration
    const TNB_TARIFF = 0.509; // RM/kWh
    const SOLAR_PANEL_COST = 3000; // RM/kWp
    const PEAK_SUN_HOURS = 3; // hours/day
    const INTEREST_RATE = 0.05; // 5% per annum
    const TARGET_SAVINGS = 0.3; // 30% of current bill
    const SYSTEM_EFFICIENCY = 0.8; // 80% efficiency
    const MAX_LOAN_TERM = 240; // Maximum 240 months (20 years)

    // Check if billAmount is valid
    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById('error').classList.remove('hidden');
        document.getElementById('result').classList.add('hidden');
        return;
    }

    // Hide error message if input is valid
    document.getElementById('error').classList.add('hidden');

    // 1. System Sizing Calculation
    const monthlyEnergy = billAmount / TNB_TARIFF; // Monthly Energy Consumption (kWh)
    const dailyEnergy = monthlyEnergy / 30; // Daily Energy Consumption (kWh)
    const systemSize = dailyEnergy / (PEAK_SUN_HOURS * SYSTEM_EFFICIENCY); // System Size (kWp)

    // 2. Cost Calculation
    const totalCost = systemSize * SOLAR_PANEL_COST;

    // 3. Loan Payment Calculation
    const targetMonthlyPayment = billAmount * (1 - TARGET_SAVINGS); // Target Monthly Payment (RM)
    const r = INTEREST_RATE / 12; // Monthly Interest Rate
    const P = totalCost; // Principal (Total Cost to be covered by loan)

    let n = 1; // Start loan term from 1 month
    let monthlyPayment = 0; // Initial monthly payment (will be updated inside the loop)


    // Finding the optimal loan term
    while (n <= MAX_LOAN_TERM) {
        // Calculate monthly payment for the current loan term using the correct formula
        monthlyPayment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        // Check if the monthly payment is within the target
        if (monthlyPayment <= targetMonthlyPayment) {
            break; // Exit the loop when we find the correct loan term
        }

        n++; // Increase loan term if the monthly payment is still too high
    }
    
    // Loan term message
    let loanTermMessage = n > MAX_LOAN_TERM
        ? "Loan term exceeds 20 years, consider a larger down payment."
        : `${n} months (${(n / 12).toFixed(1)} years)`;

    // Update result section
    document.getElementById('systemSize').textContent = systemSize.toFixed(2);
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
    document.getElementById('targetPayment').textContent = targetMonthlyPayment.toFixed(2);
    document.getElementById('loanTerm').textContent = loanTermMessage;

    // Show result section
    document.getElementById('result').classList.remove('hidden');
}




//CALLBACK FORM
document.getElementById("callbackForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevents default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const formStatus = document.getElementById('formStatus');
    formStatus.classList.remove('hidden'); // status message

    try {
        // Send data to backend
        const response = await fetch("http://localhost:5000/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone }),
        });

        const result = await response.json();

        if (response.ok) {
            formStatus.textContent = "✅ Request submitted successfully!";
            formStatus.classList.remove("hidden", "text-red-500");
            formStatus.classList.add("text-green-600");
        } else {
            throw new Error(result.error || "Something went wrong");
        }
    } catch (error) {
        formStatus.textContent = "❌ Error: " + error.message;
        formStatus.classList.remove("hidden", "text-green-600");
        formStatus.classList.add("text-red-500");
    }

    // reset form fields
    document.getElementById("callbackForm").reset();
});
