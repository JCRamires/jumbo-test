import { format, isWithinInterval, startOfTomorrow } from "date-fns";
import type { Store } from "~/types/stores";

type DayName = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday"

function getDayName(date: Date): DayName {
  switch (date.getDay()) {
    case 0:
      return "sunday";
    case 1:
      return "monday";
    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
    default:
      throw new Error("Date error");
  }
}

function getAdjustedTime(timeString: string): Date {
  const [time, offset] = timeString.split("+");
  const [hours, minutes] = time.split(":");
  const timezoneOffsetMinutes = parseInt(offset) * 60;

  const timeWithOffset = new Date();
  timeWithOffset.setUTCHours(parseInt(hours));
  timeWithOffset.setUTCMinutes(parseInt(minutes));
  timeWithOffset.setTime(
    timeWithOffset.getTime() + timezoneOffsetMinutes * 60000
  );

  return timeWithOffset;
}

function getWorkingHoursByDate(store: Store, date: Date) {
  const dayName = getDayName(date);

  const workingHours = store.openingHours[dayName];
  const storeOpening = getAdjustedTime(workingHours.opensAt);
  const storeClosing = getAdjustedTime(workingHours.closesAt);

  return [storeOpening, storeClosing];
}

export function isStoreOpen(store: Store) {
  const today = new Date();
  const [storeOpening, storeClosing] = getWorkingHoursByDate(store, today);

  if (isWithinInterval(today, { start: storeOpening, end: storeClosing })) {
    return { open: true };
  } else {
    const tomorrow = startOfTomorrow();
    const [storeOpening] = getWorkingHoursByDate(store, tomorrow);
    return {
      open: false,
      nextOpening: `tomorrow at ${format(storeOpening, "HH:mm")}`,
    };
  }
}
