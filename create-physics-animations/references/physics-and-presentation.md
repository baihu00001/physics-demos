# Physics and Presentation Checks

## Physics model

- Define the system boundary and ignored effects.
- Define the origin and positive axis directions.
- Keep units consistent and display units with measured quantities.
- Verify dimensions on every derived equation.
- Check initial conditions by evaluating the model at `t = 0`.
- Check one later time or limiting case numerically.
- Separate physical coordinates from pixels or Manim scene units.
- Derive rays, intersection markers, and object/image artwork from the same model coordinates. Never clamp or rescale one representation independently, because that makes a ray intersection disagree with the displayed object.
- Keep vectors directional; do not display a negative magnitude.
- Clamp square-root inputs and denominators near degenerate cases.

## Topic-specific invariants

- Constant acceleration: `x = x0 + v0*t + 0.5*a*t^2`, `v = v0 + a*t`.
- Projectile without drag: `x = v0*cos(theta)*t`, `y = y0 + v0*sin(theta)*t - 0.5*g*t^2`.
- Isolated collision: total momentum before equals total momentum after.
- Conservative mechanics: `K + U` remains constant within numeric tolerance.
- Force diagram: draw only forces acting on the selected object.

## Visual encoding

- Add the supplied `assets/brand/tangtang-tangdou-logo-clean.png` brand image and the exact visible text `糖糖和糖豆` to every generated webpage.
- Keep the brand lockup visible in the header or navigation without covering the experiment, controls, or knowledge content. Copy the image into the generated artifact so the page remains fully offline.
- Represent every main demonstrated object with a clearly recognizable apparatus drawing, everyday object, or unambiguous icon. Do not replace the object itself with an abstract dot, block, letter, or generic arrow.
- Use arrows, vectors, rays, axes, and point markers only to encode physical quantities or constructions, and visually attach them to the recognizable object they describe.
- Use one stable color per physical quantity across labels, vectors, formulas, and graphs.
- Recommended defaults: position blue, velocity green, acceleration/force red, energy yellow.
- Add arrowheads and labels; color alone must not carry meaning.
- Keep text readable at the target output resolution.
- Avoid overlapping labels and rapidly changing numeric text.
- Show a scale or state that the diagram is schematic when geometry is not to scale.

## Chinese classroom style

- Use concise labels such as `速度 v` and `加速度 a`.
- Introduce symbols before using them in equations.
- Explain each specialist term in plain Chinese suitable for a middle-school self-learner when it first appears.
- Connect each specialist term to a real, familiar phenomenon or device before relying on an abstract formula.
- Prefer one conclusion per animation beat.
- Explain the physical meaning after presenting a formula.
- Use standard Chinese physics terminology and SI unit notation.

## Interaction and animation state

- For self-study demonstrations, place knowledge content in a closable right-side panel docked beside the experiment.
- Keep the experiment visible and fully interactive while the knowledge panel is open; do not add a blocking backdrop.
- On phone-sized viewports, replace the right-side panel with a fixed lower split panel so the experiment remains visible and interactive above it.
- Prefer landscape for wide physics diagrams, but show only a dismissible suggestion in portrait mode; never block the lesson based on orientation.
- Use touch targets at least 44 CSS pixels high or wide for buttons, slider tracks, tabs, checkboxes, and drag handles on phones.
- Support current iOS Safari, Android Chrome, and their current WeChat embedded browser variants. Use Pointer Events with `touch-action` deliberately and avoid browser-dependent CDN resources.
- Add `viewport-fit=cover`, safe-area padding, and layouts that tolerate dynamic mobile browser toolbars.
- Synchronize the panel's values, explanation, derivation, highlighted rule, and quiz answer after every drag, parameter change, mode switch, and reset.
- When the right-side knowledge panel is open, compact oversized parameter controls and arrange them in about two rows on ordinary desktop widths. Preserve readable labels and usable pointer targets, and degrade to more rows only on narrow screens.
- Play resumes from the current state; reset returns to the canonical initial state.
- Parameter changes while paused redraw immediately.
- Parameter changes while playing restart only when that behavior is explicit.
- Time never becomes negative and does not advance beyond the modeled interval.
- Trails, graph points, and value labels stay synchronized.
- The page remains usable at narrow viewport widths.
