# Codex Styling Guidelines

These rules are for anyone making styling changes (especially Codex).

## Mobile-first requirement

1. **Start with mobile styles.** Define base CSS/SCSS for small screens first. Avoid desktop-specific values in the base layer.
2. **Layer responsive upgrades.** Use media queries (min-width) to add desktop/tablet tweaks after the mobile rules. Keep breakpoints grouped near related components.
3. **Keep components self-contained.** Each component’s stylesheet should own its mobile rules and subsequent breakpoints, rather than scattering overrides in unrelated files.
4. **Document unusual breakpoints.** If you introduce a non-standard breakpoint, leave a short comment explaining why.
5. **Validate mobile layouts.** Before finishing a styling change, confirm the mobile view looks correct (simulators/devtools are fine).

Following these keeps the UI responsive by default and prevents regressions on smaller devices.
