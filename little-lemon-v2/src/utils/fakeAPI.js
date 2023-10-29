
const seededRandom = seed => {
  const k = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % k;

  return () => (s = s * a % k) / k;
};

const fetchAPI = date => {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) result.push(i + ':00');
    if(random() < 0.5) result.push(i + ':30');
  }

  return result;
};

const submitAPI = formData => true;

export {
  fetchAPI,
  submitAPI
};
