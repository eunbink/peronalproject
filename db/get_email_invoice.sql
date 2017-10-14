select email, invoice from quotes
where email = $1
and invoice = $2;