export function setToLocalStorage(key: string, value: any) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.log(`Couldn't save state to local storage: ${e}`);
  }
}

export function getFromLocalStorage(key: string) {
  try {
    const state = localStorage.getItem(key);
    if (!state) return undefined;
    return JSON.parse(state);
  } catch (e) {
    return undefined;
  }
}
