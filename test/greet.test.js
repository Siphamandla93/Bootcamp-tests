describe('The greet function', function(){

    it('should greets Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Andre', greet('Andre'));
    });
});
