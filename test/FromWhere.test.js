describe('The FromWhere function', function(){

    it('returns the towns the car is from', function(){
        assert.equal('CJ',  FromWhere('Paarl'));
    });
    it('returns the town the car is from', function(){
        // this test will fail - can you fix it?
        assert.equal('CA',  FromWhere('cape Town'));
    });
});
