const DATE_UNITS = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const languageCode = "en";
const rft = new Intl.RelativeTimeFormat(languageCode, { numeric: "auto" });

export const useFormattedDate = (timestamp) => {
  const from = new Date(timestamp).getTime();

  const now = new Date().getTime();

  const elapsed = (now - from) / 1000;

  //   console.log(elapsed);

  for (const unit in DATE_UNITS) {
    if (elapsed > DATE_UNITS[unit]) {
      return rft.format(Math.floor(elapsed / DATE_UNITS[unit]), unit);
    }
    return rft.format(0, "second");
  }
};
