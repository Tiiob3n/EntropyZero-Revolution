// ============================================================
//  ENTROPY MODPACK — Items Definition
//  KubeJS 1.21.1 / NeoForge
// ============================================================

StartupEvents.registry('item', event => {

    // ─────────────────────────────────────────────────────────
    //  SHARDS ÉLÉMENTAIRES (Tier 1)
    // ─────────────────────────────────────────────────────────

    event.create('kubejs:shard_of_fire')
        .displayName('Shard of Fire')
        .maxStackSize(16)
        .rarity('uncommon')
        .glow(true)
        .tag('kubejs:entropy_shard')

    event.create('kubejs:shard_of_water')
        .displayName('Shard of Water')
        .maxStackSize(16)
        .rarity('uncommon')
        .glow(true)
        .tag('kubejs:entropy_shard')

    event.create('kubejs:shard_of_earth')
        .displayName('Shard of Earth')
        .maxStackSize(16)
        .rarity('uncommon')
        .glow(true)
        .tag('kubejs:entropy_shard')

    event.create('kubejs:shard_of_air')
        .displayName('Shard of Air')
        .maxStackSize(16)
        .rarity('uncommon')
        .glow(true)
        .tag('kubejs:entropy_shard')

    event.create('kubejs:shard_of_light')
        .displayName('Shard of Light')
        .maxStackSize(16)
        .rarity('rare')
        .glow(true)
        .tag('kubejs:entropy_shard')

    event.create('kubejs:shard_of_shadow')
        .displayName('Shard of Shadow')
        .maxStackSize(16)
        .rarity('rare')
        .glow(true)
        .tag('kubejs:entropy_shard')

    // ─────────────────────────────────────────────────────────
    //  COMPOSANTS INTERMÉDIAIRES (Tier 2)
    // ─────────────────────────────────────────────────────────

    // Crafté avec Shard of Fire + Shard of Earth
    event.create('kubejs:primal_ember')
        .displayName('Primal Ember')
        .maxStackSize(4)
        .rarity('rare')
        .glow(true)
        .tag('kubejs:entropy_component')

    // Crafté avec Shard of Water + Shard of Air
    event.create('kubejs:celestial_vortex')
        .displayName('Celestial Vortex')
        .maxStackSize(4)
        .rarity('rare')
        .glow(true)
        .tag('kubejs:entropy_component')

    // Crafté avec Shard of Light + Shard of Shadow
    event.create('kubejs:dual_essence')
        .displayName('Dual Essence')
        .maxStackSize(4)
        .rarity('epic')
        .glow(true)
        .tag('kubejs:entropy_component')

    // ─────────────────────────────────────────────────────────
    //  ITEM FINAL — ENTROPY CRYSTAL (Tier 3)
    // ─────────────────────────────────────────────────────────

    event.create('kubejs:entropy_crystal')
        .displayName('§5§lEntropy Crystal')
        .maxStackSize(1)
        .rarity('epic')
        .glow(true)
        .tag('kubejs:entropy_final')

})
