/**
 * Formats the given date into a localized string with the specified locale.
 * @param {Date} date - The date to format.
 * @param {string} locale - The locale used for formatting.
 * @returns {string} The formatted date string with month, day, and weekday.
 */

export const formatDate = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
};
