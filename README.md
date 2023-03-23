# deno-domain-model-v1
 A domain model for a CRM application. Built with Deno.

## Directory Structure
 - api/ contains your routes, controllers, and middleware.
 - application/ contains your application-level services.
 - domain/ contains your domain entities, services, and validation schema.
 - infrastructure/ contains your ORM models, repositories, and storage implementation.
 - lib/ contains the database, router, and server-related code.
 - utils/ contains various utility modules, such as configuration, logging, email notifications, and helper functions.
```
src/
├── main.ts
├── api/
│   ├── routes/
│   │   ├── mod.ts
│   │   ├── account.routes.ts
│   │   ├── contact.routes.ts
│   │   └── typings.d.ts
│   ├── controllers/
│   │   ├── mod.ts
│   │   ├── account.controller.ts
│   │   ├── contact.controller.ts
│   │   └── typings.d.ts
│   └── middleware/
│       ├── mod.ts
│       └── auth.ts
├── application/
│   ├── auth/
│   │   ├── mod.ts
│   │   ├── service.ts
│   │   ├── helpers.ts
│   │   └── typings.d.ts
│   ├── jobs/
│   │   ├── mod.ts
│   │   ├── service.ts
│   │   ├── helpers.ts
│   │   └── typings.d.ts
│   └── services/
│       ├── mod.ts
│       ├── account.service.ts
│       ├── contact.service.ts
│       ├── base.service.ts
│       └── typings.d.ts
├── domain/
│   ├── account/
│   │   ├── mod.ts
│   │   ├── entity.ts
│   │   ├── validations.ts
│   │   └── typings.d.ts
│   └── contact/
│       ├── mod.ts
│       ├── entity.ts
│       ├── validations.ts
│       └── typings.d.ts
├── infrastructure/
│   ├── models/
│   │   ├── mod.ts
│   │   ├── account.model.ts
│   │   ├── contact.model.ts
│   │   └── typings.d.ts
│   ├── repositories/
│   │   ├── mod.ts
│   │   ├── base.repository.ts
│   │   ├── account.repository.ts
│   │   ├── contact.repository.ts
│   │   └── typings.d.ts
│   └── storage/
│       ├── mod.ts
│       ├── postgres.ts
│       ├── filesystem.ts
│       ├── memory.ts
│       └── typings.d.ts
├── lib/
│   ├── database/
│   │   ├── mod.ts
│   │   ├── database.ts
│   │   └── typings.d.ts
│   ├── router/
│   │   ├── mod.ts
│   │   ├── router.ts
│   │   └── typings.d.ts
│   └── server/
│       ├── mod.ts
│       ├── server.ts
│       └── typings.d.ts
├── utils/
│   ├── config/
│   │   ├── mod.ts
│   │   ├── config.ts
│   │   └── typings.d.ts
│   ├── logger/
│   │   ├── mod.ts
│   │   ├── logger.ts
│   │   └── typings.d.ts
│   ├── mailer/
│   │   ├── mod.ts
│   │   ├── mailer.ts
│   │   ├── template.html
│   │   ├── content.json
│   │   └── typings.d.ts
│   └── helpers/
│       ├── mod.ts
│       ├── helpers.ts
│       └── typings.d.ts
```