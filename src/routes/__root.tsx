import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:text-red-500">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:text-red-500">
          About
        </Link>{' '}
        <Link to="/bob" className="[&.active]:text-red-500">
          Bob
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})