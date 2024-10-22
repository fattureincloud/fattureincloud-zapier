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
    "GetTaxProfileResponseSample": 
        {"data":{"company_type":"individual","company_subtype":"artigiani","regime":"forfettario_5","rivalsa_name":"","default_rivalsa":0,"cassa_name":"","default_cassa":0,"default_cassa_taxable":100,"cassa2_name":"","default_cassa2":0,"default_cassa2_taxable":0,"default_withholding_tax":0,"default_withholding_tax_taxable":100,"default_other_withholding_tax":0,"enasarco":false,"contributions_percentage":0,"med":false,"default_vat":{"id":66,"value":0,"description":"Contribuenti forfettari","notes":"Operazione non soggetta a IVA ai sensi dell'art. 1, commi 54-89, Legge n. 190\\/2014 e succ. modifiche\\/integrazioni","e_invoice":true,"ei_type":2.2,"ei_description":"Non soggetta art. 1\\/54-89 L. 190\\/2014 e succ. modifiche\\/integrazioni","editable":false,"is_disabled":false,"default":true}}},
    "GetVatTypeResponseSample": 
        {"data":{"id":0,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","e_invoice":true,"ei_type":2,"ei_description":"string","editable":true,"is_disabled":true}},
    "ModifyPaymentAccountResponseSample": 
        {"data":{"id":12345,"name":"Indesa","type":"bank","iban":"IT17Q0051343200000003497636","sia":"T1234","virtual":false}},
    "ModifyPaymentMethodResponseSample": 
        {"data":{"id":386683,"name":"Bonifico bancario","is_default":true,"type":"standard","details":[{"title":"Banca","description":"Sao Paulo"}],"default_payment_account":{"id":12345,"name":"conto banca SP"}}},
    "ModifyVatTypeResponseSample": 
        {"data":{"id":0,"value":22,"description":"Non imponibile art. 123","notes":"IVA non imponibile ai sensi dell'articolo 123, comma 2","e_invoice":true,"ei_type":2,"ei_description":"string","editable":true,"is_disabled":true}},
}
