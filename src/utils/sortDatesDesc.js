export default function sortDatesDesc(a, b) {
  const [dayA, monthA, yearA] = a.date.split('.');
  const [dayB, monthB, yearB] = b.date.split('.');
  return new Date(`${yearB}-${monthB}-${dayB}`) - new Date(`${yearA}-${monthA}-${dayA}`);
}