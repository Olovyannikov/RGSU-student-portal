import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

export default () => {
    document.addEventListener("DOMContentLoaded", function () {
        let calendarEl = document.getElementById("calendar");

        let calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin],
        });

        calendar.render();
    });
};
