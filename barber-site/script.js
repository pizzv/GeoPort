const form = document.getElementById("booking-form");
const confirmation = document.getElementById("confirmation");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  if (!name || !service || !date) {
    confirmation.textContent = "Please complete all booking fields.";
    return;
  }

  confirmation.textContent = `Thanks ${name}! Your ${service} request for ${date} is received.`;
  form.reset();
});
