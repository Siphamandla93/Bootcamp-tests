describe('The isFromBellville', function(){

    it('it should returns all from Bellville', function(){
        assert.equal(true, isFromBellville('CY'));
    });
    it('it should return all from Bellville', function(){
        // this test will fail - can you fix it?
        assert.equal(false ,isFromBellville('MP'));
    });
});
