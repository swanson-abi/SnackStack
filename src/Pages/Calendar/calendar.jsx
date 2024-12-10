import React, { useState } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate days of the week starting from Sunday
  const generateWeekDays = () => {
    const weekStart = startOfWeek(currentDate, { weekStartsOn: 0 }); // 0 represents Sunday
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      const day = addDays(weekStart, i);
      weekDays.push({
        date: day,
        dayName: format(day, 'EEE'),
        dayNumber: format(day, 'd')
      });
    }

    return weekDays;
  };

  const weekDays = generateWeekDays();

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setCurrentDate(prev => addDays(prev, -7))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous Week
        </button>
        <h2 className="text-xl font-bold text-center">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <button 
          onClick={() => setCurrentDate(prev => addDays(prev, 7))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next Week
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-right">
        {weekDays.map((day) => (
          <div 
            key={day.date.toISOString()} 
            className="border p-2 rounded"
          >
            <div className="font-semibold text-sm">{day.dayName}</div>
            <div className="text-lg">{day.dayNumber}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;