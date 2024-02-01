const timeout = (ms) => {
  const start = Date.now();
  while (start + ms > Date.now()) {}
  console.log("finished");
};
