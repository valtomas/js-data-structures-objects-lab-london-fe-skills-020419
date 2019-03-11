var driver = {
  
}

function updateDriverWithKeyAndValue(driver, key, value) {
  var newdriver = driver;
  Object.assign = (newdriver, {key: value}) 
  return newdriver;
}

