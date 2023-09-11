function updateDateTime() {
  const now = new Date();
  const dateElement = document.querySelector(".date");
  const dayElement = document.querySelector(".day");
  const timeElement = document.querySelector(".time");

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = now.toLocaleDateString(undefined, options);
  const dayOfWeek = now.toLocaleDateString(undefined, { weekday: "long" });
  const formattedTime = now.toLocaleTimeString();

  dateElement.textContent = formattedDate;
  dayElement.textContent = `Today is ${dayOfWeek}`;
  timeElement.textContent = `Current time is ${formattedTime}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
