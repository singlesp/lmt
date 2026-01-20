const bookingUrl =
  "https://calendar.google.com/calendar/appointments/schedules/REPLACE_WITH_YOUR_ID";

document.querySelectorAll("[data-booking-link]").forEach((link) => {
  link.setAttribute("href", bookingUrl);
});

