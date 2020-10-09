#!/bin/python

import os

MOD_DIR = "./mods"
CLIENT_MODS = [
    "AmbientSounds",
    "AppleSkin", 
    "BetterAdvancements",
    "ClientTweaks",
    "CraftingTweaks", 
    "DefaultOptions", 
    "DefaultSettings",
    "Ding",
    "EnchantmentDescriptions", 
    "EquipmentTooltips", 
    "FpsReducer", 
    "invtweaks",
    "JustEnoughResources",
    "LLOverlayReloaded", 
    "MouseTweaks",
    "nmdar_", 
    "Neat", 
    "overloadedarmorbar", 
    "ReAuth",
    "StepUp",
    "ToastControl", 
    "toughnessbar", 
    "Xaeros_Minimap", 
    "XaerosWorldMap",
    "moreoverlays"
]

if "__MAIN__" == __NAME__:
    for jar in os.listdir(MOD_DIR):
        if not jar.endswith("jar"):
            continue
        for mod in CLIENT_MODS:
            if jar.lower().startswith(mod.lower()):
                os.remove(os.path.join(MOD_DIR, jar))
