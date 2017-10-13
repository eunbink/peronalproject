insert into quotes (name, email, phonenumber, designtype, size, color, sides, sides2, quantity, duedate, comments, invoice)
values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, null)
returning *;
