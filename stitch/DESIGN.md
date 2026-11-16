# Design System: Star Lane Collector

**Stitch project:** 593323395093826442
**Authority:** ProductSpec v2 plus browser-observed DesignInteractionGraph v2.

## Product screens
- Play Page - Star Lane Collector (TARGET_PLAY_PAGE; source 43baae2ce9324496aeb068d20f7e4a78)

## Physical control slots
- CSLOT_START_ROUND_START_BUTTON: Start Round on SURF_PLAY_PAGE
- CSLOT_MOVE_LEFT_LEFT_BUTTON: Move Left on SURF_PLAY_PAGE
- CSLOT_MOVE_CENTER_CENTER_BUTTON: Move Center on SURF_PLAY_PAGE
- CSLOT_MOVE_RIGHT_RIGHT_BUTTON: Move Right on SURF_PLAY_PAGE
- CSLOT_COLLECT_STAR_COLLECT_BUTTON: Collect Star on SURF_PLAY_PAGE
- CSLOT_OPEN_SETTINGS_SETTINGS_BUTTON: Open Settings on SURF_PLAY_PAGE
- CSLOT_RESUME_GAME_RESUME_BUTTON: Resume Game on SURF_SETTINGS_OVERLAY
- CSLOT_RESTART_ROUND_RESTART_BUTTON: Restart Round on SURF_PLAY_PAGE

## Implementation boundary
These files are accepted visual source, not executable application behavior. Every physical control is owned by its exact data-action and data-control-slot identity. Affected surfaces do not authorize additional controls. Routes, state transitions, persistence, reload behavior, and evidence predicates come from the sealed Product Build Packet, not from labels, inferred layout, or agent prose.

## Source policy
Only the selected response IDs in DESIGN_MANIFEST.json are canonical screens. STITCH_RENDERED_SEMANTICS_V2.json records the locked browser observation, STITCH_TARGET_CANDIDATE_SELECTION.json records exact qualification, and STITCH_RESPONSE_BINDINGS.json joins each target to the downloaded HTML and screenshot hashes. Unselected provider output is evidence only and cannot become implementation authority.
