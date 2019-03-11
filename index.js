var driver = {
  
}

function updateDriverWithKeyAndValue(driver, key, value) {
  // var updatedDriver = driver;
  // updatedDriver [key] = value; 
  // return updatedDriver;
  
  return Object.assign(driver, {key: value})
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
 driver [key] = value;
 return driver
}






