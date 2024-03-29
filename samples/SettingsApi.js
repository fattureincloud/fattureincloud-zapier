module.exports = {
    "CreatePaymentAccountResponseSample": 
        {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}},
    "CreatePaymentMethodResponseSample": 
        {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}},
    "CreateVatTypeResponseSample": 
        {"data":{"id":0,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","e_invoice":true,"ei_type":2,"ei_description":"string","editable":true,"is_disabled":true}},
    "GetPaymentAccountResponseSample": 
        {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}},
    "GetPaymentMethodResponseSample": 
        {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}},
    "GetVatTypeResponseSample": 
        {"data":{"id":0,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","e_invoice":true,"ei_type":2,"ei_description":"string","editable":true,"is_disabled":true}},
    "ModifyPaymentAccountResponseSample": 
        {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}},
    "ModifyPaymentMethodResponseSample": 
        {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}},
    "ModifyVatTypeResponseSample": 
        {"data":{"id":0,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","e_invoice":true,"ei_type":2,"ei_description":"string","editable":true,"is_disabled":true}},
}
