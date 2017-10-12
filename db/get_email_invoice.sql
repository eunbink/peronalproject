select email, invoice from quotes
where email, invoice = ($1, $2)