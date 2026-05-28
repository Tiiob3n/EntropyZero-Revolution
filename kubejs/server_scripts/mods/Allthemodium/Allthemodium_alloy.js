// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.

ServerEvents.recipes(function(event) {

  // Vibranium + Allthemodium → Vibranium-Allthemodium Alloy
  event.recipes.create.mixing(
    [Item.of('allthemodium:vibranium_allthemodium_alloy_ingot')],
    [
      Ingredient.of('allthemodium:vibranium_ingot'),
      Ingredient.of('allthemodium:allthemodium_ingot')
    ]
  ).superheated().id('entropy:allthemodium/vibranium_allthemodium_alloy')

  // Unobtainium + Vibranium → Unobtainium-Vibranium Alloy
  event.recipes.create.mixing(
    [Item.of('allthemodium:unobtainium_vibranium_alloy_ingot')],
    [
      Ingredient.of('allthemodium:unobtainium_ingot'),
      Ingredient.of('allthemodium:vibranium_ingot')
    ]
  ).superheated().id('entropy:allthemodium/unobtainium_vibranium_alloy')

  // Unobtainium + Allthemodium → Unobtainium-Allthemodium Alloy
  event.recipes.create.mixing(
    [Item.of('allthemodium:unobtainium_allthemodium_alloy_ingot')],
    [
      Ingredient.of('allthemodium:unobtainium_ingot'),
      Ingredient.of('allthemodium:allthemodium_ingot')
    ]
  ).superheated().id('entropy:allthemodium/unobtainium_allthemodium_alloy')

})

// This File has been authored by the Entropy Staff or a Community contributor for use in Entropy.
// All rights reserved to the Entropy Development Team.