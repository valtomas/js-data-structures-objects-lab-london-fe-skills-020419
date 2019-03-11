var driver = {
  
}

function updateDriverWithKeyAndValue(driver, key, value) {
  var updatedDriver = driver;
  updatedDriver [key] = value; 
  return updatedDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
 driver [key] = value;
 return driver
}






