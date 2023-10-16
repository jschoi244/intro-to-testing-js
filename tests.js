// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, noname!" when executed', function () {
        expect(sayHello(null)).toBe("Hello, noname!");
    });
    it('should return the string "Hello, noname!" when executed', function () {
        expect(sayHello("")).toBe("Hello, noname!");
    });
    it('should return the string "A number is not a name!" when executed', function () {
        expect(sayHello(2.3)).toBe("A number is not a name!");
    });
    it('should return the string "A number is not a name!" when executed', function () {
        expect(sayHello("5")).toBe("A number is not a name!");
    });
    it('should return the type of the input parameter when executed', function () {
        expect(sayHello([])).toBe("The type of this is object");
    });
});
describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed 4', function () {
        expect(isEven(4)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when passed "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean value', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed without an argument', function () {
        expect(isEven()).toBe(false);
    });
    describe('isVowel', function () {
        it('should be a defined function', function () {
            expect(typeof isVowel).toBe('function');
        });
        it('should return a boolean when called', function () {
            expect(typeof isVowel()).toBe("boolean");
        });
        it('should return true when passed "a"', function () {
            expect(isVowel("a")).toBe(true);
        });
        it('should return true when passed "A"', function () {
            expect(isVowel("A")).toBe(true);
        });
        it('should return false when passed y', function () {
            expect(isVowel("y")).toBe(false);
        });
        it('should return false when passed 4', function () {
            expect(isVowel(4)).toBe(false);
        });
        it('should return false when passed true', function () {
            expect(isVowel(true)).toBe(false);
        });
        it('should return false when passed "banana"', function () {
            expect(isVowel("banana")).toBe(false);
        });
        it('should return false when passed no value', function () {
            expect(isVowel()).toBe(false);
        });
    });
    describe('add', function () {
        it('should be a defined function', function () {
            expect(typeof add).toBe('function');
        });
        it('should return a number when called', function () {
            expect(typeof add()).toBe("number");
        });
        it('should return 5 when passed 2 and 3', function () {
            expect(add(2, 3)).toBe(5);
        });
        it('should return -12 when passed -3 and -9', function () {
            expect(add(-3, -9)).toBe(-12);
        });
        it('should return 11 when passed "5" and 6', function () {
            expect(add("5", 6)).toBe(11);
        });
        it('should return NaN when passed "banana" and "split"', function () {
            expect(add("banana", "split")).toBeNaN();
        });
        it('should return NaN when passed 2 and "apples"', function () {
            expect(add(2, "apples")).toBeNaN();
        });
        it('should return NaN when passed no arguments', function () {
            expect(add()).toBeNaN();
        });
    });
});
