import { getShoppingLists, getSingleShoppingList } from "../handler";

jest.mock("../shoppingLists");
jest.mock("../headers");
describe("getShoppingLists", () => {
  it("should return 200 with a proper body and headers", async () => {
    const retrieveShoppingLists = jest
      .fn()
      .mockReturnValue([{ id: "1", name: "something" }]);
    const getResponseHeaders = jest.fn().mockReturnValue("httpHeader");

    require("../shoppingLists").retrieveShoppingLists = retrieveShoppingLists;
    require("../headers").getResponseHeaders = getResponseHeaders;

    const results = await getShoppingLists();
    expect(retrieveShoppingLists).toHaveBeenCalled();
    expect(getResponseHeaders).toHaveBeenCalled();
    expect(results).toEqual({
      statusCode: 200,
      headers: "httpHeader",
      body: '[{"id":"1","name":"something"}]',
    });
  });
});

describe("getSingleShoppingList", () => {
  it("should filter the lists, return 200 with a proper body and headers", async () => {
    const event = {
      pathParameters: { id: "1" },
    };
    const retrieveShoppingLists = jest.fn().mockReturnValue([
      { id: "LIST#1", name: "something" },
      { id: "LIST#2", name: "another thing" },
    ]);
    const getResponseHeaders = jest.fn().mockReturnValue("httpHeader");

    require("../shoppingLists").retrieveShoppingLists = retrieveShoppingLists;
    require("../headers").getResponseHeaders = getResponseHeaders;

    const results = await getSingleShoppingList(event);
    expect(retrieveShoppingLists).toHaveBeenCalled();
    expect(getResponseHeaders).toHaveBeenCalled();
    expect(results).toEqual({
      statusCode: 200,
      headers: "httpHeader",
      body: '{"id":"LIST#1","name":"something"}',
    });
  });
});
