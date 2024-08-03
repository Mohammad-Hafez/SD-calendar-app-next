import dayjs from 'dayjs';

export const formatDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD');
};

export const isDateInPast = (date) => {
    const today = dayjs().startOf('day');
    return dayjs(date).isBefore(today);
};

export const getWeekDays = () => {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
};

export const getMonthName = (monthIndex) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
};