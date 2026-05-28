// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.tags('item', event => {
    // Configurations Functional Storage (Ignore le check de craft automatique pour éviter les boucles)
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:snowball')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:string')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:honeycomb')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:magma_cream')

    // Configurations Mega Cells (Forçage des overrides de compression pour l'AE2 avancé)
    event.add('megacells:compression_overrides', 'minecraft:string')
    event.add('megacells:compression_overrides', 'minecraft:honeycomb')
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.