var driver = {
  
}

function updateDriverWithKeyAndValue(driver, key, value) {
  // var updatedDriver = driver;
  // updatedDriver [key] = value; 
  // return updatedDriver;
  let newData = {};
  newData[key] = value;
  return Object.assign(driver, newData)
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
 driver [key] = value;
 return driver
}






