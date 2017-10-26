update quotes
set detail = $1
where id = $2;

select * from quotes