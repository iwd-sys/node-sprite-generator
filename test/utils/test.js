'use strict';

var expect = require('chai').expect,
    _ = require('underscore'),
    fs = require('fs');

module.exports = {
    testStylesheetGeneration: function (generator, layout, expectedPath, options, done) {

        var expectedOptions = _.clone(options),
            spritePath = 'test/fixtures/images/png/sprite.png',
            stylesheetPath = 'test/fixtures/test.file';

        generator(layout, stylesheetPath, spritePath, options, function (err) {
            expect(err).to.equal(null);
            expect(options).to.deep.equal(expectedOptions);
            expect(fs.readFileSync(stylesheetPath).toString()).to.equal(fs.readFileSync(expectedPath).toString());
            fs.unlinkSync(stylesheetPath);
            done();
        });

    }
};
