const $DataComps = Java.loadClass("net.creeperhost.polylib.init.DataComps")

StartupEvents.postInit((entropy) => {
  $DataComps.registerData()
})
