import Fastify  from 'fastify'
import FastifyStatic from "@fastify/static";
import path from "node:path";

const server = Fastify({ logger: true})

FastifyStatic(server, {
  root: path.join(__dirname, 'public'),
  prefix: '/',
});

const start = async () => {
  try {
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
