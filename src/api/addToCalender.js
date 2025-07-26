import { createEvent } from "ics";

export const addToCalender_ = (props) => {
    const { title, description, location, start, duration, status } = props;
    createEvent(
        {
            title,
            description,
            location,
            start, // [YYYY, M, D, H, M]
            duration,
            status,
        },
        (error, value) => {
            if (error) {
                alert(error);
                return;
            }

            // Create and download the .ics file
            const blob = new Blob([value], { type: "text/calendar;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");

            link.href = url;
            link.download = "reminder.ics";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    );
};

export const addToCalender = (props) => {
    const { title, description, location, start, duration, status = "CONFIRMED" } = props;
  
    // Convert start array to Date
    const startDate = new Date(start[0], start[1] - 1, start[2], start[3], start[4]);
  
    // Add duration to get endDate
    const endDate = new Date(startDate.getTime());
    if (duration?.hours) endDate.setHours(endDate.getHours() + duration.hours);
    if (duration?.minutes) endDate.setMinutes(endDate.getMinutes() + duration.minutes);
  
    // Format date as YYYYMMDDTHHmmssZ
    const formatDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
  
    const uid = `${Date.now()}@thetransformationcollective.org`;
  
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Your App Name//EN",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${formatDate(new Date())}`,
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      `STATUS:${status}`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");
  
    // Create and download the file
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "event.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };