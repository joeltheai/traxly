import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bob/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/bob/"!</div>
}
