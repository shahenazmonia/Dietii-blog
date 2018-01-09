export default arr => arr.map((element, index) => {
  const url = element.image.url;
  if(element.image.url === undefined)console.log(arr[index]);
  // accum[url] = currValue;
  return url;
});
