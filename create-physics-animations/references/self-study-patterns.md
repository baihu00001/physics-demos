# Self-study Interaction Patterns

## Learning structure

Build two connected layers:

1. A virtual experiment where the learner changes apparatus or parameters and observes consequences.
2. A learning assistant that explains the exact current state.

Include four compact learning views when the subject supports them:

- **Concept explanation:** describe what is happening now and why.
- **Derivation:** substitute current values into the governing equations step by step.
- **Rule summary:** show the complete set of cases and highlight the current case.
- **Check for understanding:** ask a question whose correct answer updates with the current state.

## Virtual laboratory layout

- Give the experiment canvas more space than the controls.
- Represent every demonstrated object with a clearly recognizable apparatus drawing, everyday object, or unambiguous icon. Do not substitute abstract dots, blocks, letters, or generic arrows for the object itself.
- Keep arrows, vectors, axes, rays, and point markers only when they encode a physical quantity or construction; attach them to the recognizable object they describe.
- Let learners drag the main objects; keep numeric controls for precision.
- Show immediate qualitative feedback such as focused/unfocused, balanced/unbalanced, or real/virtual.
- Put knowledge content in a closable right-side panel. When open, dock it beside the experiment rather than covering or disabling the experiment.
- Keep the experiment fully interactive while the knowledge panel is open.
- On phones, use an upper-experiment/lower-knowledge split instead of squeezing the experiment beside a narrow panel.
- Keep portrait mode usable and show a dismissible landscape suggestion for diagrams that benefit from extra width.
- Give touch controls and draggable objects a minimum 44 CSS pixel interaction target.
- Provide a deterministic reset and a recovery action such as auto-focus.

## Explanation and practice

- Refer to current values and the current qualitative regime.
- Explain the observable result before introducing the formula.
- Use formulas to account for the observation, not as disconnected decoration.
- Explain sign conventions before interpreting negative values.
- Explain every technical term at first use in language understandable to a middle-school self-learner.
- Present every technical term in this fixed order: an accurate standard definition, a plain-language explanation with a concrete example, then a paired comparison with the concept it is most often confused with.
- Use compact native disclosure cards for larger glossaries. Automatically open two or three terms relevant to the current state, but preserve the learner's manual open/closed choices during subsequent synchronized updates.
- Pair each technical term with a familiar real phenomenon, everyday device, or concrete observation. Prefer examples such as a straw appearing bent in water, a projected image on a wall, bicycle braking, or ripples on water over purely symbolic explanations.
- Do not define an unfamiliar term mainly with other unexplained technical terms.
- Ask one concept at a time and give feedback that names the deciding physical principle.
- Update the explanation, substituted values, derivation, highlighted rule, and quiz answer immediately after any drag, parameter change, mode switch, or reset.

## Acceptance checks

- The learning panel does not hide the only way to manipulate the experiment.
- Opening the learning panel does not add a blocking backdrop and does not disable dragging or controls.
- The numbers and qualitative state shown in the learning panel match the experiment at all times.
- A learner can identify every main object from its drawing without relying on a single-letter symbol.
- A learner can recover the default state without reloading.
- Visual feedback does not claim that an unobservable result has been measured.
