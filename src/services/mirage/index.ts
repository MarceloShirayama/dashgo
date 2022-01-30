import { createServer, Factory, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
};

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
      server.createList("user", 10);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
