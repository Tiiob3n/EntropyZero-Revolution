// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

// ============================================================
//  AVARITIA INFINITY ITEMS — Mechanical Crafter (Create)
//  Composants utilisés :
//    A = evolvedmekanism:alloy_creative
//    B = allthecompressed:nitro_crystal_block_9x
//    C = allthecompressed:compressed_iron_block_9x
//    D = allthecompressed:sky_osmium_block_9x
//    E = allthecompressed:enderium_block_9x
//    F = allthecompressed:unobtainium_allthemodium_alloy_block_2x
//    G = allthecompressed:unobtainium_vibranium_alloy_block_2x
//    H = allthecompressed:vibranium_allthemodium_alloy_block_2x
//    I = allthecompressed:antimatter_block_2x
// ============================================================

ServerEvents.recipes(function(event) {

  // Suppression des recettes Avaritia originales
  event.remove({ mod: 'avaritia' })

  var A = 'evolvedmekanism:alloy_creative'
  var B = 'allthecompressed:nitro_crystal_block_9x'
  var C = 'allthecompressed:compressed_iron_block_9x'
  var D = 'allthecompressed:sky_osmium_block_9x'
  var E = 'allthecompressed:enderium_block_9x'
  var F = 'allthecompressed:unobtainium_allthemodium_alloy_block_2x'
  var G = 'allthecompressed:unobtainium_vibranium_alloy_block_2x'
  var H = 'allthecompressed:vibranium_allthemodium_alloy_block_2x'
  var I = 'allthecompressed:antimatter_block_2x'

  // ── Casque ───────────────────────────────────────────────
  //  A B C
  //  D   E
  //  F G H
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_helmet',
    [
      'ABC',
      'D E',
      'FGH'
    ],
    {
      A: A, B: B, C: C,
      D: D, E: E,
      F: F, G: G, H: H
    }
  ).id('entropy:avaritia/infinity_helmet')

  // ── Plastron ─────────────────────────────────────────────
  //  A   B
  //  C D E
  //  F G H
  //  I B C
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_chestplate',
    [
      'A B',
      'CDE',
      'FGH',
      'IBC'
    ],
    {
      A: A, B: B, C: C,
      D: D, E: E,
      F: F, G: G, H: H,
      I: I
    }
  ).id('entropy:avaritia/infinity_chestplate')

  // ── Jambières ────────────────────────────────────────────
  //  A B C
  //  D   E
  //  F   G
  //  H   I
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_leggings',
    [
      'ABC',
      'D E',
      'F G',
      'H I'
    ],
    {
      A: A, B: B, C: C,
      D: D, E: E,
      F: F, G: G,
      H: H, I: I
    }
  ).id('entropy:avaritia/infinity_leggings')

  // ── Bottes ───────────────────────────────────────────────
  //  A   B
  //  C   D
  //  E F G
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_boots',
    [
      'A B',
      'C D',
      'EFG'
    ],
    {
      A: A, B: B,
      C: C, D: D,
      E: E, F: F, G: G
    }
  ).id('entropy:avaritia/infinity_boots')

  // ── Pioche ───────────────────────────────────────────────
  //  A B C
  //  D E F
  //    G
  //    H
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_pickaxe',
    [
      'ABC',
      'DEF',
      ' G ',
      ' H '
    ],
    {
      A: A, B: B, C: C,
      D: D, E: E, F: F,
      G: G, H: H
    }
  ).id('entropy:avaritia/infinity_pickaxe')

  // ── Hache ────────────────────────────────────────────────
  //  A B
  //  C D
  //  E
  //  F
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_axe',
    [
      'AB',
      'CD',
      'E ',
      'F '
    ],
    {
      A: A, B: B,
      C: C, D: D,
      E: E, F: F
    }
  ).id('entropy:avaritia/infinity_axe')

  // ── Épée ─────────────────────────────────────────────────
  //    A
  //    B
  //  C D E
  //    F
  //    G
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_sword',
    [
      ' A ',
      ' B ',
      'CDE',
      ' F ',
      ' G '
    ],
    {
      A: A, B: B,
      C: C, D: D, E: E,
      F: F, G: G
    }
  ).id('entropy:avaritia/infinity_sword')

  // ── Pelle ────────────────────────────────────────────────
  //  A B C
  //  D E F
  //    G
  //    H
  //    I
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_shovel',
    [
      'ABC',
      'DEF',
      ' G ',
      ' H ',
      ' I '
    ],
    {
      A: A, B: B, C: C,
      D: D, E: E, F: F,
      G: G, H: H, I: I
    }
  ).id('entropy:avaritia/infinity_shovel')

  // ── Houe ─────────────────────────────────────────────────
  //  A B C
  //  D   E
  //    F
  //    G
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_hoe',
    [
      'ABC',
      'D E',
      ' F ',
      ' G '
    ],
    {
      A: A, B: B, C: C,
      D: D, E: E,
      F: F, G: G
    }
  ).id('entropy:avaritia/infinity_hoe')

  // ── Arc ──────────────────────────────────────────────────
  //  A B
  //  C   D
  //  E F
  //  G   H
  //  I J
  event.recipes.create.mechanical_crafting(
    'avaritia:infinity_bow',
    [
      'AB ',
      'C D',
      'EF ',
      'G H',
      'IJ '
    ],
    {
      A: A, B: B,
      C: C, D: D,
      E: E, F: F,
      G: G, H: H,
      I: I, J: B
    }
  ).id('entropy:avaritia/infinity_bow')

})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.