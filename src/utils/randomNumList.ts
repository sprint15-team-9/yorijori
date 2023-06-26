export const randomNumList = (length: number, count: number) => {
  const random_number_list: Array<number> = [];
  if (length < count) {
    return undefined;
  }
  for (let i = 0; i < count; i++) {
    let temp_rander_number = Math.floor(Math.random() * length);
    if (random_number_list.includes(temp_rander_number)) {
      i--;
    } else {
      random_number_list.push(temp_rander_number);
    }
  }

  return random_number_list;
};
