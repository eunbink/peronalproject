insert into images (image, quoteid)
values($1, $2)
returning *;