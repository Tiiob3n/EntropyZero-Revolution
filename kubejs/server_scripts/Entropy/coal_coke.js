// ============================================================
//  Fix : Conflits de recettes Coal / Charcoal
//
//  Problème :
//    - Charcoal → Graphite Bar (Extreme Reactors) entre en conflit
//    - Coal → Coal Coke (Electrodynamics) bloque d'autres recettes
//
//  Solution :
//    - Charcoal → Graphite Bar (smelting + blasting) : supprimé
//    - Coal → Coal Coke : supprimé et recréé avec Charcoal uniquement
// ============================================================

ServerEvents.recipes(event => {
    // Supprime Charcoal → Graphite Bar (toutes variantes)
    event.remove({ id: 'bigreactors:blasting/graphite_from_charcoal' })
    event.remove({ id: 'bigreactors:smelting/graphite_from_charcoal' })
    event.remove({ id: 'bigreactors:/mekanism_generated/smelting/graphite_from_charcoal' })

    // Supprime les recettes originales Coal Coke (coal ET charcoal)
    event.remove({ id: 'electrodynamics:smelting/coal_coke' })
    event.remove({ id: 'electrodynamics:blasting/coal_coke' })

    // Recrée Coal Coke uniquement avec Charcoal
    event.smelting('electrodynamics:coalcoke', 'minecraft:charcoal').xp(0.1).cookingTime(200)
    event.blasting('electrodynamics:coalcoke', 'minecraft:charcoal').xp(0.1).cookingTime(100)
})