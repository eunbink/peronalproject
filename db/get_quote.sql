select name, email, phonenumber, duedate, image, invoice from quotes
join images on quotes.id = images.quoteid