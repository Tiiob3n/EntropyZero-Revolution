ServerEvents.tags('item', event => {

  const customSeeds = [
    'mysticalcustomization:antimatter_seeds',
    'mysticalcustomization:plutonium_seeds',
    'mysticalcustomization:polonium_seeds',
    'mysticalcustomization:titanium_seeds',
    'mysticalcustomization:manganese_seeds',
    'mysticalcustomization:aluminium_seeds'
  ]

  for (const seed of customSeeds) {
    event.add('minecraft:crops', seed)
    event.add('mysticalagriculture:crops', seed)
    event.add('mysticalagriculture:seeds', seed)
    event.add('c:seeds', seed)
    event.add('minecraft:bee_growables', seed)
    event.add('minecraft:sword_efficient', seed)
    event.add('cucumber:mineable/sickle', seed)
    event.add('silentgear:mineable/sickle', seed)
    event.add('tombstone:seeds', seed)
  }

})