describe('The findItemsOver function', function(){

    it('return products that have quantity higher than the threshold of.', function(){
      assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver([
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},], 25))
    });
});
