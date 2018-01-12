var chai = require('chai');
var expect = chai.expect;
var speechObjectCleaner = require('../../helper/speechObjectCleaner');

describe('speechFormatCleanerT001', function () {
    it('clean() should return valid object if there are object', function () {
        var speechObject = {
            "items": [
                {
                    "quantity": [
                        1
                    ],
                    "item": [
                        "Pepperoni Cheesy Bread"
                    ],
                    "options_item": [
                        "large",
                        "BBQ"
                    ]
                },
                {
                    "quantity": "1",
                    "item": "Feta Cheesy Bread",
                    "options_item": [
                        "small"
                    ]
                }
            ],
            "pickupOrDelivery": [
                "deliver"
            ],
            "address": "",
            "paymentMode": ""
        };
        var expectedResult={
            "items": [
                {
                    "quantity": "1",
                    "item": "Pepperoni Cheesy Bread",
                    "options_item": [
                        "large",
                        "BBQ"
                    ]
                },
                {
                    "quantity": "1",
                    "item": "Feta Cheesy Bread",
                    "options_item": [
                        "small"
                    ]
                }
            ],
            "pickupOrDelivery": "deliver",
            "address": "",
            "paymentMode": ""
        }        
        expect(speechObjectCleaner.clean(speechObject)).to.deep.equal(expectedResult);
    });
});