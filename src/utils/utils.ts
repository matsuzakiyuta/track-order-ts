import { TrackOrder } from "../components/TrackOrderTable";

export const suffleArray = (array: TrackOrder[]): TrackOrder[] => {
  const cloneArray = [...array];
  for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    // 配列の要素の順番を入れ替える
    let tmpStorage = cloneArray[i];
    cloneArray[i] = cloneArray[rand];
    cloneArray[rand] = tmpStorage;
  }
  return cloneArray;
};
