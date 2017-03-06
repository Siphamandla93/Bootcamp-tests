describe('countAllFromTown', function(){

    it('should count registration from towns', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it('should count registration from town', function(){
        // this test will fail - can you fix it?
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
});
