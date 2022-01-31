import { createServer, Factory, Model, Response } from "miragejs";
import { User } from "src/types/user";

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email(i: number) {
          return `user${i + 1}@example.com`;
        },
        created_at(i: number) {
          return new Date(Date.now() + i * (3600 * 1000 * 24));
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const total = schema.all("user").models.length;
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);
        const users = schema.all("user").models.slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });

      this.get("/users/:id");

      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
