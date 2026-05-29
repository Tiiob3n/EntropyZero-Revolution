ServerEvents.recipes(event => {
    const logs = '#minecraft:logs'
    const slabs = '#minecraft:wooden_slabs'

    // ── Crafting Table ───────────────────────────────────────
    event.remove({ id: 'minecraft:crafting_table' })

    event.shaped('minecraft:crafting_table', [
        'LC',
        'CL'
    ], { L: logs, C: 'minecraft:cobblestone' })

    // ── Sticks ──────────────────────────────────────────────
    event.shaped('16x minecraft:stick', [
        'L',
        'L'
    ], { L: logs })

    // ── Chest ────────────────────────────────────────────────
    event.shaped('4x minecraft:chest', [
        'LLL',
        'L L',
        'LLL'
    ], { L: logs })

    // ── Barrel ───────────────────────────────────────────────
    event.shaped('4x minecraft:barrel', [
        'LSL',
        'L L',
        'LSL'
    ], { L: logs, S: slabs })
})