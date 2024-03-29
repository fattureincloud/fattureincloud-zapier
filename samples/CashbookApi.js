module.exports = {
    "CreateCashbookEntryResponseSample": 
        {"data":{"id":54321,"date":"2021-08-24","amount_in":122,"amount_out":0,"description":"Fattura n. 201/2021","payment_account_in":{"id":21,"name":"Indesa - Carta conto"},"kind":"cashbook"}},
    "GetCashbookEntryResponseSample": 
        {"data":{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":333},"description":"Fattura n. 201/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"in"}},
    "ListCashbookEntriesResponseSample": 
        {"data":[{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":333},"description":"Fattura n. 201/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"in"},{"date":"2021-08-29","amount_out":211,"payment_account_out":{"id":444},"description":"Fattura n. 202/2021","entity_name":"Red S.r.l.","kind":"issued_document","document":{"id":12345},"type":"out"}]},
    "ModifyCashbookEntryResponseSample": 
        {"data":{"date":"2021-08-24","amount_in":122,"payment_account_in":{"id":333},"description":"Fattura n. 201/2021","entity_name":"Rossi S.r.l.","kind":"issued_document","document":{"id":54321},"type":"in"}},
}
