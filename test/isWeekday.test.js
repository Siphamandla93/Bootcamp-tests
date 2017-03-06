describe('The isWeekday', function(){

    it('Returns weekday', function(){
        assert.equal(true ,isWeekday('D'));
    });
    it('Return weekday', function(){
        // this test will fail - can you fix it?
        assert.equal(false ,isWeekday('S'));
    });
});
