GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('extractinator')
        .category('reconstruction')
        .setEUIO('in')
        .setMaxIOSize(2, 8, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// GT Atomic Reconstructor machine
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('electric_extractinator', 'simple', GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.MAX)
        .langValue("Electric Extractinator")
        .recipeType('extractinator', true, true)
        .workableTieredHullRenderer('gtceu:block/machines/extractinator')
})


const $ParallelHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine')

// Parallel Hatches
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create(
        "uhv_parallel_hatch",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.UHV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_uhv"))

    event.create(
        "uev_parallel_hatch",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.UEV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_uev"))
        
event.create(
        "uiv_parallel_hatch",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.UIV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_uiv"))

event.create(
        "uxv_parallel_hatch",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.UXV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_uxv"))

event.create(
        "opv_parallel_hatch",
        "custom",
        (holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        },
        GTValues.OpV
    )
        .rotationState(RotationState.ALL)
        .abilities(PartAbility.PARALLEL_HATCH)
        .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_opv"))
})