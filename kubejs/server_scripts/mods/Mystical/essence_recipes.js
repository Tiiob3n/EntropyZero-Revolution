ServerEvents.recipes(event => {

  // Antimatter
  event.shaped('mekanism:pellet_antimatter', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:antimatter_essence' })

  // Plutonium
  event.shaped('mekanism:pellet_plutonium', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:plutonium_essence' })

  // Polonium
  event.shaped('mekanism:pellet_polonium', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:polonium_essence' })

// Titanium - industrialupgrade
  event.shaped(Item.of('industrialupgrade:itemingots/titanium_ingot', 8), [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:titanium_essence' })

  // Titanium - electrodynamics
  event.shaped(Item.of('electrodynamics:ingottitanium', 8), [
    'EEE',
    'E E',
    'EEE'
  ], { E: 'mysticalagriculture:titanium_essence' })

  // Aluminium - industrialupgrade
  event.shaped(Item.of('industrialupgrade:itemingots/aluminium_ingot', 8), [
    'EEE',
    'EE ',
    'EEE'
  ], { E: 'mysticalagriculture:aluminum_essence' })

  // Aluminium - electrodynamics
  event.shaped(Item.of('electrodynamics:ingotaluminum', 8), [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:aluminum_essence' })

  // Manganese - industrialupgrade
  event.shaped(Item.of('industrialupgrade:itemingots/manganese_ingot', 8), [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:manganese_essence' })

  // Manganese - chemicalscience
  event.shaped(Item.of('chemicalscience:ingot_manganese', 8), [
    'E E',
    'EEE',
    'EEE'
  ], { E: 'mysticalagriculture:manganese_essence' })

  // Allthemodium
  event.shaped('allthemodium:allthemodium_ingot', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:allthemodium_essence' })

  // Vibranium
  event.shaped('allthemodium:vibranium_ingot', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:vibranium_essence' })

  // Unobtainium
  event.shaped('allthemodium:unobtainium_ingot', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:unobtainium_essence' })

  // Sky Steel
  event.shaped('megacells:sky_steel_ingot', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:sky_steel_essence' })

  // Entro
  event.shaped('extendedae:entro_crystal', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:entro_essence' })

  // Dark Gem
  event.shaped('evilcraft:dark_gem', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:dark_gem_essence' })

  // Chaotic
  event.shaped('draconicevolution:small_chaos_frag', [
    'EEE',
    'EEE',
    'EE '
  ], { E: 'mysticalagriculture:chaotic_essence' })

  // Xychorium Gem Blue
  event.shaped('xycraft_world:xychorium_gem_blue', [
    '   ',
    'EEE',
    '   '
  ], { E: 'mysticalagriculture:xychorium_gem_essence' })

  // Xychorium Gem Green
  event.shaped('xycraft_world:xychorium_gem_green', [
    'EEE',
    '   ',
    '   '
  ], { E: 'mysticalagriculture:xychorium_gem_essence' })

  // Xychorium Gem Red
  event.shaped('xycraft_world:xychorium_gem_red', [
    '   ',
    '   ',
    'EEE'
  ], { E: 'mysticalagriculture:xychorium_gem_essence' })

  // Xychorium Gem Dark
  event.shaped('xycraft_world:xychorium_gem_dark', [
    ' E ',
    ' E ',
    ' E '
  ], { E: 'mysticalagriculture:xychorium_gem_essence' })

  // Xychorium Gem Light
  event.shaped('xycraft_world:xychorium_gem_light', [
    'E  ',
    ' E ',
    '  E'
  ], { E: 'mysticalagriculture:xychorium_gem_essence' })

})