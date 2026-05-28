// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.recipes(entropy => {
    entropy.remove({id: 'explorerscompass:explorers_compass'})
    entropy.shaped('explorerscompass:explorerscompass', [
        'NAN',
        'ACA',
        'NAN'
    ], {
        A: 'minecraft:amethyst_shard',
        N: 'minecraft:netherite_ingot',
        C: 'minecraft:recovery_compass',
    }).id('entropy:explorers_compass')
})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.