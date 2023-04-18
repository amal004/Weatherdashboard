assert = chai.assert;

// describe() is a function by which you can define a collection of tests. 
// It takes two parameters, the 1st one is a description of what is being tested, and 
// the 2nd one is a function which contains one or multiple tests each defined by one it().
describe('Testing function setUVIndexColor(uvIndex)', function () {
  
  // it() is a function by which you should define one single test.
  // It takes two parameters, the 1st one is a description of what is being tested, and 
  // the 2nd one is a function which normally contains one assert. 
  it('Test 1: the returned value is from type string', function () {

    // assert is the core component of automated testing, by which we can verify wether
    // some condition is true or false. true represents the test has passed, and false 
    // represents a failure. See https://www.chaijs.com/api/assert/
    assert.typeOf(setUVIndexColor(3), 'string'); 
  });

  it('Test 2: setUVIndexColor(7.33) returned orange', function () {
    
    assert.equal(setUVIndexColor(7.33), 'orange');
  });

  it('Test 3: setUVIndexColor(11.2) returned purple', function () {
    assert.equal(setUVIndexColor(11.2), 'purple');
  });
})

