const { getConcessionByID, calculateTotalFromIDs } = require ("../src/concessions.js")
const concessions = require("../data/concessions.js")



describe("getConcessionById", () => {
     it("Return a concession object with the same ID", () => {
        const input1 = concessions;
        const input2 = "0Qs9Yp2NL";
        const actual = getConcessionByID(input1, input2)
        const expected = {id: "0Qs9Yp2NL", name: "Large Popcorn", priceInCents: 1029 }

        expect(actual).toEqual(expected)
        });
            it("Return null if ID are not the same with the concession object", () => {
             const input1 = concessions;
             const input2 = "wrong ID";
             const actual = getConcessionByID(input1, input2);
             const expected = null;
             expect(actual).toEqual(expected);
        });
    });


describe("calculateTotalFromIDs", () => {
    it("Return the total value of all concessions from the `ids` array", ()=> {
        const input1 = concessions;
        const input2 = ["g9sZdG1hI", "0Qs9Yp2NL", "KzWBehRAD"]; 
        const actual = calculateTotalFromIDs(input1, input2);
        const expected = 2657;
        expect(actual).toEqual(expected);
    });
    it("Return `null` if `ID's` array is empty",() => {
        const input1 = concessions;
        const input2 =[];
        const actual = getConcessionByID(input1, input2);
        const expected = null;
        expect(actual).toEqual(expected);
    });
});