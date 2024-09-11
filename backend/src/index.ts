import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/user/signup", (c) => {
  return c.json({});
});

app.post("/api/v1/user/signin", (c) => {
  return c.json({});
});

app.post("/api/v1/blog", (c) => {
  return c.json({});
});

app.put("/api/v1/blog", (c) => {
  return c.json({});
});

app.get("/api/v1/blog/:id", (c) => {
  return c.json({});
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.json({});
});

export default app;
