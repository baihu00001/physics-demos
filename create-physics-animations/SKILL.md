---
name: create-physics-animations
description: Create accurate Chinese-language physics animations and interactive demonstrations for middle-school and high-school teaching. Use when Codex needs to design or generate Manim lesson videos, zero-dependency HTML/SVG/Canvas simulations, motion diagrams, force diagrams, projectile demonstrations, collision visualizations, energy visualizations, or parameter-driven virtual experiments.
---

# Create Physics Animations

Create an editable, physically correct teaching artifact and verify as much of it as the local environment permits.

## Choose the renderer

- Use **Manim** for narrated or staged explanations, formula derivations, vector construction, and exported lesson videos.
- Use **HTML + SVG/Canvas** for sliders, dragging, play/pause controls, parameter exploration, or real-time experiments.
- Generate both only when the user explicitly asks for both.
- Prefer SVG for labeled diagrams and vectors. Prefer Canvas for dense particles, long trails, or high-frequency redraws.

## Follow this workflow

1. Extract the audience, concept, known quantities, adjustable parameters, desired output, and language.
2. State the model before coding: assumptions, coordinate system, positive directions, equations, units, initial conditions, and valid parameter ranges.
3. Draft a short teaching sequence:
   - introduce the situation;
   - expose the relevant quantities;
   - animate one conceptual change at a time;
   - connect the diagram to the equation;
   - conclude with the physical interpretation.
4. Start from the closest bundled template:
   - `assets/manim/constant_acceleration.py` for staged Manim explanations;
   - `assets/web/projectile-motion.html` for zero-dependency interactive demonstrations.
5. Adapt the template instead of layering unrelated features onto it. Keep model calculations separate from screen-coordinate conversion.
6. Apply the checks in `references/physics-and-presentation.md`.
7. Run `scripts/validate_artifacts.mjs` against generated HTML or Python source.
8. Render or open the result when dependencies exist. Otherwise, deliver source plus exact run commands and clearly report which visual verification was unavailable.

## Build Manim lessons

- Use SI units unless the problem explicitly uses another system.
- Keep physical values in model variables; use a separate scale for scene coordinates.
- Animate vectors from their physical point of application.
- Use `MathTex` for formulas and `Text` for Chinese labels. Select an installed Chinese font when necessary.
- Keep each scene focused. Prefer multiple short sections over one crowded camera frame.
- Include a `README.txt` beside generated source with the scene class and render command:

```text
manim -pqh lesson.py SceneName
```

- If Manim or FFmpeg is missing, do not install it unless the user requests installation.

## Build interactive web demonstrations

- Produce a self-contained HTML file unless the user requests a multi-file project.
- Do not use CDN assets, external fonts, frameworks, or a build step.
- Include play/pause, reset, time display, parameter controls, and displayed values relevant to the concept.
- Make reset deterministic: restore time, parameters where appropriate, trails, vectors, and button labels.
- Clamp parameters to physically meaningful bounds and handle zero/degenerate values without `NaN` or infinite coordinates.
- Use `requestAnimationFrame` with elapsed time, not frame count, for simulation time.
- Recompute the model from canonical state after parameter changes.
- Add keyboard-accessible controls and responsive layout.

## Cover common mechanics patterns

- **Kinematics:** position, velocity, acceleration, motion graphs, and synchronized representations.
- **Force analysis:** free-body diagram first, then component decomposition and net-force relation.
- **Projectile motion:** independent horizontal and vertical components, velocity vector, apex, and range.
- **Collisions:** momentum vectors, before/after states, restitution or collision type, and conserved quantities.
- **Mechanical energy:** kinetic/potential bars synchronized with position and speed.

Read `references/mechanics-patterns.md` when implementing one of these topics.

## Deliver and report

- Place each requested demonstration in its own clearly named output directory.
- Always provide editable source and a short run instruction.
- Report model assumptions and adjustable parameters.
- State which checks ran successfully.
- Do not claim an animation was visually verified when only static validation ran.

