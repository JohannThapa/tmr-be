# TMR Backend

## Description <!-- omit in toc -->

The TMR Backend is a powerful and versatile backend application built with NestJS, a leading JavaScript framework for building scalable and maintainable Node.js APIs. It leverages the robust combination of PostgreSQL and TypeORM for data persistence, offering exceptional performance and flexibility. Additionally, Supabase integration provides a seamless experience for authentication, storage, and real-time features.

This project empowers you to develop robust backend services for your web or mobile applications, ensuring a solid foundation for your project.

[Full documentation here](/docs/readme.md)

Demo: <https:///docs>

## Table of Contents <!-- omit in toc -->

- [Features](#features)
- [Contributors](#contributors)
- [Roadmap](#roadmap)

## Features

- [x] Database. Support [TypeORM](https://www.npmjs.com/package/typeorm) and [PostgreSQL](https://www.npmjs.com/package/pg) with Realtime capabilities powered by [Supabase](https://supabase.com/).
- [x] Seeding.
- [x] Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- [x] Mailing ([nodemailer](https://www.npmjs.com/package/nodemailer)).
- [x] Sign in and sign up via email.
- [x] Social sign in (Apple, Facebook, Google, Twitter).
- [x] Admin and User roles.
- [x] Internationalization/Translations (I18N) ([nestjs-i18n](https://www.npmjs.com/package/nestjs-i18n)).
- [x] File uploads. Support local and Amazon S3 drivers.
- [x] Swagger.
- [x] E2E and units tests.
- [x] Docker.
- [x] CI (Github Actions).

- **Database Management:**
  - **TypeORM:** Enjoy comprehensive database access with TypeORM, an object-relational mapper that streamlines data interactions and reduces boilerplate code.
- **Seeding:** Simplify data initialization with seeding capabilities, ideal for populating your database with test data or default configurations.
- **Configuration Management:** Efficiently manage environment variables and external configuration settings using the `@nestjs/config` package.
- **Email Integration:** Integrate email functionalities into your backend with the `nodemailer` package, enabling user communication and notifications.
- **Authentication:**
  - **Email-Based:** Implement reliable sign-in and sign-up mechanisms using email and password authentication, providing a secure and familiar login experience.
  - **Social Sign-in:** Offer additional login options to users via social networks like Apple, Facebook, Google, and Twitter, simplifying the registration process.
- **Authorization:** Enforce user access control with user roles (Admin, User) to restrict access to sensitive data or functionalities based on user privileges.
- **Internationalization:** Support multiple languages within your application through `nestjs-i18n`. Cater to a global audience by tailoring the user experience based on their preferred language.
- **File Storage:** Integrate file upload capabilities using local storage or leveraging the Amazon S3 service for cloud storage.
- **Comprehensive Documentation:** Access detailed documentation at `/docs/readme.md` to gain a deeper understanding of the API structure, implementation details, and usage patterns.
- **API Documentation:** Utilize Swagger to easily generate and visualize API documentation, promoting clarity and facilitating integration for frontend developers.
- **Robust Testing:** Ensure code reliability with unit and end-to-end tests. Implement test-driven development practices for improved code quality and maintainability.
- **Docker Support:** Package your application in a Docker container for seamless deployment and containerization.
- **Continuous Integration:** Set up automated builds and testing using Github Actions for streamlined development workflows.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="33.33%"><a href="https://github.com/JohannThapa"><img src="https://tmr-amber.vercel.app/assets/images/rupak.png" width="200px;" alt="Johann Thapa"/><br /><sub><b>Johann Thapa</b></sub></a><br /><a href="https://tmr.com.np/" title="tmr">🌐</a> <a href="https://github.com/JohannThapa" title="github">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Roadmap
# tmr-be
