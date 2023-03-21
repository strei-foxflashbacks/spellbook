const setLSValue = (name: string, value = '') => {
  if (localStorage.getItem(name)) {
    localStorage.removeItem(name);
    localStorage.setItem(name, value);
  }
  localStorage.setItem(name, value);
};
export default setLSValue;
