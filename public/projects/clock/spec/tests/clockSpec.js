describe("clock", function() {

      it("should return currentTime", function() {

        Date.prototype.getHours = function() { return 14 }
        Date.prototype.getMinutes = function() { return 29 }

        console.log(Date());

        var expectedResult = { am: false, hours: '2-hours', teenMinutes: null, tensOfMinutes: '2-tens-of-minutes', singleMinutes: '9-single-minutes' }

        expect(getFormattedTime()).toEqual(expectedResult);

      });

});
