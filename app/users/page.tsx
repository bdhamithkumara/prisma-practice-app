import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function page() {

    const users = await prisma.user.findMany()

  return (
    <div>
    <h1>Users</h1>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  </div>
  )
}
