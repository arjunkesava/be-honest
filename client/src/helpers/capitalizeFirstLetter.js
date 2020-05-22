const capitalizeFirstLetter = (name) => {
  return name.chartAt(0).toUpperCase() + name.slice(1);
};

export default capitalizeFirstLetter;
