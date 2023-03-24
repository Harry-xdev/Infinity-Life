import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';

const Calendar = ({ onDateSelect, selectedDate, minDate, maxDate, locale }) => {
  const [currentDate, setCurrentDate] = useState(moment());
 console.log(`current date from moment:`,currentDate);
  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  const isDateDisabled = (date) => {
    return (
      (minDate && date.isBefore(minDate, 'day')) ||
      (maxDate && date.isAfter(maxDate, 'day'))
    );
  };

  const isSelectedDate = (date) => {
    return selectedDate && date.isSame(selectedDate, 'day');
  };

  const handleDateSelect = (date) => {
    if (!isDateDisabled(date)) {
      onDateSelect(date);
    }
  };

  const renderWeekdays = () => {
    const weekdays = moment.weekdaysShort(true);
    return (
      <View style={styles.weekdaysContainer}>
        {weekdays.map((weekday) => (
          <Text key={weekday} style={styles.weekday}>
            {weekday}
          </Text>
        ))}
      </View>
    );
  };

  const renderDays = () => {
    const monthStart = currentDate.clone().startOf('month');
    const monthEnd = currentDate.clone().endOf('month');
    const startDate = monthStart.clone().day(0);
    const endDate = monthEnd.clone().day(6);
    const days = [];
    let day = startDate;

    while (day.isSameOrBefore(endDate)) {
      const isDisabled = isDateDisabled(day);
      const isSelected = isSelectedDate(day);
      days.push(
        <TouchableOpacity
          key={day.format('YYYY-MM-DD')}
          style={[
            styles.dayButton,
            isDisabled && styles.disabledDayButton,
            isSelected && styles.selectedDayButton,
          ]}
          onPress={() => handleDateSelect(day)}
          disabled={isDisabled}
        >
          <Text
            style={[
              styles.dayText,
              isDisabled && styles.disabledDayText,
              isSelected && styles.selectedDayText,
            ]}
          >
            {day.date()}
          </Text>
        </TouchableOpacity>
      );
      day = day.clone().add(1, 'day');
    }

    return <View style={styles.daysContainer}>{days}</View>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handlePreviousMonth}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
        {/* <Text style={styles.month}>{currentDate.locale(locale).format('MMMM YYYY')}</Text> */}
        <Text style={styles.month}>{currentDate.locale('en').format('MMMM YYYY')}</Text>
        <TouchableOpacity onPress={handleNextMonth}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      {renderWeekdays()}
      {renderDays()}
    </View>
  );
};
export default Calendar;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f5f5f5',
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  weekdaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  weekday: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayButton: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledDayButton: {
    opacity: 0.5,
  },
  selectedDayButton: {
    backgroundColor: '#2196F3',
    borderRadius: 50,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledDayText: {
    opacity: 0.5,
  },
  selectedDayText: {
    color: '#fff',
  },
});