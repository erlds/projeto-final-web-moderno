# Projeto final do curso webmoderno

Esse projeto criar um sistema de cadastro de artigos usando tanto backend como frontend todo desenvolvido em JavaScript (Feito pelo curso da Cod3r), para rodar esse projeto é necessário instalar o NodeJS, junto com o npm, além de uma IDE (preferencialmente o VisualCode)

Por questões de aprendizado esse projeto utiliza 2 bancos de dados, um relacional (Postgres) e outro não relacional (MongoDB) e ambos precisam ser instalados.

Caso deseje-se usar containers docker para ambos os bancos (recomendado), execute os seguintes comandos docker

```
docker run --name some-mongo -p 27017:27017 -v /diretorio/na/maquina:/data/db -d mongo

docker run -d -p 5432:5432 --name some-postgres -e POSTGRES_PASSWORD=postgres -e PGDATA=/var/lib/postgresql/data/pgdata -v /diretorio/na/maquina:/var/lib/postgresql/data postgres
    
```

Para preencher automaticamente essas tabelas recomenda-se o uso do knex (aulas 616 e 617 do curso respectivamente)

Uma outra coisa necessária é o arquivo .env, que contem o segredo usado na geração dos tokens JWT