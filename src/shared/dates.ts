export function displayDate(date: Date | number, includeTime: boolean) {
  try {
    const dt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: includeTime ? 'short' : undefined
    });

    return dt.format(date);
  } catch {
    return new Date(date).toLocaleString();
  }
}
