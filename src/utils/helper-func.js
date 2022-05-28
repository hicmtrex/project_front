export const getTetcher = (value) => {
  switch (value) {
    case '01':
      return 'Informatique';
    case '02':
      return 'Telecommunication';
    case '03':
      return 'Genie-civil';
    case '04':
      return 'Electromecanique';
    default:
      return value;
  }
};
