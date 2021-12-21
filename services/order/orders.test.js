const { getHeader } = require('./orders');
const getTable = require('./orders');


let orderList = [
    {
      ID: 1,
      firstname: 'Tommy',
      lastname: 'Bejo',
      email: 'tommy@mail.com',
      item: 'Barang 1',
      quantity: 2,
      total_price: 10000
    }
  ]

test('firstname + lastaname = fullname is correct', async () => {
    let out = await getTable.getTable(orderList)
    expect(out[0].fullname).toBe(`${orderList[0].firstname} ${orderList[0].lastname}`);
});

test('lengt 1', async () => {
    let out = await getTable.getTable(orderList)
    expect(out.length).toBe(1);
});

test('err', async () => {
    await getTable.getTable(orderList)
    let err = new Error("error")
    expect(err.message).toBe("error");
});

let orderListPivot = [
    {
      ID: 1,
      firstname: 'Tommy',
      lastname: 'Bejo',
      email: 'tommy@mail.com',
      item: 'Barang 1',
      quantity: 2,
      total_price: 10000
    },
    {
        ID: 2,
        firstname: 'Len',
        lastname: 'Bejo',
        email: 'Len@mail.com',
        item: 'Barang 2',
        quantity: 8,
        total_price: 10000
      },
      {
        ID: 3,
        firstname: 'Go',
        lastname: 'Bejo',
        email: 'Go@mail.com',
        item: 'Barang 3',
        quantity: 1,
        total_price: 10000
      },
  ]

test('Have correct property', async () => {
    let out = await getTable.getTable(orderListPivot,"pivot")
    expect("Barang 1" in out[0]).toBe(true);
    expect("Barang 2" in out[0]).toBe(true);
    expect("Barang 3" in out[0]).toBe(true);
});

test('Have correct quantity', async () => {
    let out = await getTable.getTable(orderListPivot,"pivot")
    expect(out[1]["Barang 1"]).toBe(0);
    expect(out[1]["Barang 2"]).toBe(8);
    expect(out[1]["Barang 3"]).toBe(0);

    expect(out[2]["Barang 1"]).toBe(0);
    expect(out[2]["Barang 2"]).toBe(0);
    expect(out[2]["Barang 3"]).toBe(1);
});


let orderListPivotDuplicate = [
    {
      ID: 1,
      firstname: 'Tommy',
      lastname: 'Bejo',
      email: 'tommy@mail.com',
      item: 'Barang 1',
      quantity: 2,
      total_price: 10000
    },
    {
        ID: 2,
        firstname: 'Len',
        lastname: 'Bejo',
        email: 'Len@mail.com',
        item: 'Barang 2',
        quantity: 8,
        total_price: 10000
      },
      {
        ID: 3,
        firstname: 'Go',
        lastname: 'Bejo',
        email: 'Go@mail.com',
        item: 'Barang 3',
        quantity: 1,
        total_price: 10000
      },
      {
        ID: 4,
        firstname: 'Tommy',
        lastname: 'Bejo',
        email: 'tommy@mail.com',
        item: 'Barang 2',
        quantity: 5,
        total_price: 10000
      }
  ]

test('Have correct quantity if duplicate order', async () => {
    let out = await getTable.getTable(orderListPivotDuplicate,"pivot")
    expect(out[0]["Barang 1"]).toBe(2);
    expect(out[0]["Barang 2"]).toBe(5);
    expect(out[0]["Barang 3"]).toBe(0);
});

test("Have correct table header", async () => {
  let out = await getTable.getTable(orderListPivotDuplicate,"pivot")
  let header = await getHeader(out)

  expect(header[0]).toBe("id");
  expect(header[1]).toBe("fullname");
  expect(header[2]).toBe("email");

})