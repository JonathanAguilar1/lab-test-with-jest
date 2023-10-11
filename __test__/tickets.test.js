const tickets = require("../data/tickets");

const { getTicketByName, calculateTotalFromTicketNames  } = require ("../src/tickets.js")

describe("getTicketByName()", () => {
    it("Return the ticket object with a matching ID", () => {
    const input1 = tickets; 
    const input2 = "Adult Regular";
    const actual = getTicketByName(input1, input2); 
    const expected = { id: "uD_PoicNN", name: "Adult Regular", priceInCents: 1369 }
    expect(actual).toEqual(expected);
    });
});

describe("calculateTotalFromTicketNames()", () => {
    it("Return the total value of all tickets from the `names` array.", () => {
        const input1 = tickets; 
        const input2 = ["Adult Matinee", "Senior Matinee","Child Matinee"]
        const actual = calculateTotalFromTicketNames(input1, input2);
        const expected = 2457;
        expect(actual).toEqual(expected);
    });
});