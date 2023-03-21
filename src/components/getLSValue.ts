const getLSValue = (name: string): string => {
  return localStorage.getItem(name)!;
};
export default getLSValue;
