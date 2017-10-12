update quotes
set invoice = $1
where id = $2;

select * from quotes