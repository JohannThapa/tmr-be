# Command Line Interface (CLI)

---

## Table of Contents

- [Generate resource](#generate-resource)
- [Add property to resource](#add-property-to-resource)-

---

## Generate resource

To generate new resources for Our Relational database (PostgreSQL + TypeORM), use the following command:

```bash
npm run generate:resource:relational -- --name=ResourceName
```

Example:

```bash
npm run generate:resource:relational -- --name=Category
```

***Alternatively, you can generate resources for all database types (relational and non-relational) using this command:***

```bash
npm run generate:resource:all-db -- --name=ResourceName
```

Example:

```bash
npm run generate:resource:all-db -- --name=Category
```

## Add property to resource

For Adding Property to resource for Our Relational database (PostgreSQL + TypeORM), use the following command:

```bash
npm run add:property:to-relational
```

***Alternatively, Property for both databases:***

```bash
npm run add:property:to-all-db
```

---

Previous: [Architecture](architecture.md)

Next: [Working with database](database.md)
