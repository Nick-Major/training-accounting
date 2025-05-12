export default function editTrainingRecord(newRecord, arr) {
  return arr.map(el => 
    el.date === newRecord.date 
      ? { ...el, distance: parseFloat((el.distance + newRecord.distance).toFixed(1))  }
      : el
  );
}