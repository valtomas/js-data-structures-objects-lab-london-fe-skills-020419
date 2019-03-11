var driver = {
  
}

function updateDriverWithKeyAndValue(driver, key, value) {
  Object.assign = (driver, {key: value}) 
  return driver;
}



function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  
  Object.assign = (driver, {key: value}) 
  
}