# Installation

With TypeORM it uses [PostgreSQL](https://www.postgresql.org/) as the main database.

---

## Table of Contents <!-- omit in toc -->

- [Development setup](#development-setup)
- [Quick run](#quick-run)
- [Links](#links)

---

## Development setup

1. Go to Project folder, and copy `env-example` as `.env`.

   ```bash
   cp env-example .env
   ```

2. Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

   Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

3. Run additional container:

   ```bash
   docker compose up -d postgres adminer maildev
   ```

4. Install dependency

   ```bash
   npm install
   ```

5. Run app configuration

   > You should run this command only the first time on initialization of your project, all next time skip it.
   > If you want to contribute to the boilerplate, you should NOT run this command.

   ```bash
   npm run app:config
   ```

6. Run migrations

   ```bash
   npm run migration:run
   ```

7. Run seeds

   ```bash
   npm run seed:run:relational
   ```

8. Run app in dev mode

   ```bash
   npm run start:dev
   ```

9. Open <http://localhost:3000>

---

## Quick run

If you want quick run your app, you can use following commands:

1. Go to folder, and copy `env-example` as `.env`.

   ```bash
   cd my-app/
   cp env-example .env
   ```

2. Run containers

   ```bash
   docker compose up -d
   ```

3. For check status run

   ```bash
   docker compose logs
   ```

4. Open <http://localhost:3000>

---

## Links

- Swagger (API docs): <http://localhost:3000/docs>
- Adminer (client for DB): <http://localhost:8081>
- Maildev: <http://localhost:1080>

---

Previous: [Introduction](introduction.md)

Next: [Architecture](architecture.md)
