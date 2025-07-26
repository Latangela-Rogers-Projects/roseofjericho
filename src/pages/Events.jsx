import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'
import UpcomingEvents from '../layouts/Event-HeroSection';
const localizer = momentLocalizer(moment)

function Events() {
  return (
    <div className="min-h-screen bg-white">
      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Event Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Event Calendar</h2>
          <div className="max-w-4xl mx-auto">
            {/* Calendar component will be added here */}
            <div>
              <Calendar
                localizer={localizer}
                events={eventList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </div>
            Stay tuned for more events!
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;



const eventList = [
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },
  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
]