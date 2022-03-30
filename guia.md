usar npm run migrations:generate -- categories para crear una migracion con todos los datos para crear la tabla vategories 
correr la migracion npm run typeorm --migration:run

-Para correr las migraciones usar npm run typeorm:migrate nombre-migracion

-Si falla la migracion o para actualizar en limpio. Borrar el contenido de la carpeta dist, correr el proyecto con
npm run start:dev y luego generar la migracion con npm run typeorm:migrate nombre-migracion

-Para crear un modulo completo
nest g resource --no-spec