# Mechanics Patterns

## Kinematics

Represent the same motion with at least two synchronized views when useful: object position, vector state, data table, or `x-t`/`v-t` graph. For constant acceleration, expose `x0`, `v0`, and `a`; annotate that equal time intervals do not imply equal displacements.

## Force analysis

Isolate one object. Draw gravity, normal force, tension, friction, and applied force only when physically present. Place component arrows after the original force vector, use a clear axis convention, and show `sum F = ma` after the diagram is established.

## Projectile motion

State that air resistance is ignored. Keep horizontal velocity constant and vertical acceleration equal to `-g`. Stop ground-contact simulations at the nonnegative impact root. When launch and landing heights match, use `T = 2*v0*sin(theta)/g` and `R = v0^2*sin(2*theta)/g` as cross-checks.

## Collisions

Show a before state, a brief contact interval, and an after state. Compute outcomes from momentum plus the declared collision model. For one-dimensional elastic collisions, cross-check kinetic energy; for perfectly inelastic collisions, show the shared final velocity and do not imply kinetic-energy conservation.

## Mechanical energy

Choose a zero level for potential energy and label it. Synchronize position, speed, kinetic energy, potential energy, and total energy. Keep the total-energy bar fixed for conservative systems; explicitly show thermal/internal energy when friction is included.

