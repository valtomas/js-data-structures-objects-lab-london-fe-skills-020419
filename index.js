var driver = {
  
}

function updateDriverWithKeyAndValue(driver, key, value) {
  Object.assign = (driver, {key: value}) 
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  
  Object.assign = (driver, {key: value}) 
  
}