module.exports = {
    "CreateArchiveDocumentResponseSample": 
        {"data":{"id":12345,"date":"2021-08-20","category":"Altri documenti","description":"spesa 1","attachment_url":"spesa1.pdf"}},
    "GetArchiveDocumentResponseSample": 
        {"data":{"id":12345,"date":"2021-08-20","category":"Altri documenti","description":"spesa 2","attachment_url":"spesa2.pdf"}},
    "ListArchiveDocumentsResponseSample": 
        {"current_page":1,"data":[{"id":12345,"date":"2021-08-20","category":"Altri documenti","description":"spesa 2","attachment_url":"spesa2.pdf"},{"id":12346,"date":"2021-08-19","category":"Altri documenti","description":"spesa 1","attachment_url":"spesa1.pdf"}],"first_page_url":"page=1","from":1,"last_page":1,"last_page_url":"page=1","path":"/archive","per_page":50,"to":2,"total":2},
    "ModifyArchiveDocumentResponseSample": 
        {"data":{"id":12345,"date":"2021-08-20","category":"Altri documenti","description":"spesa 2","attachment_url":"spesa2.pdf"}},
    "UploadArchiveAttachmentResponseSample": 
        {"data":{"attachment_token":"YmMyNWYxYzIwMTU3N212ABCDZjZiMzg5OWY0ODNkZDQveXl5LmRvYw"}},
}
