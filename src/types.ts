interface eventParamsIfc {
    metadata: Object,
    data: eventDataIfc
}
export interface hostIfc {
    emitEvent(_: eventParamsIfc): null
}

interface eventDataIfc {
    text?: string
}

export interface eventIfc {
    data: eventDataIfc
}

export interface configIfc {
    foo: string
}

export interface SensorIfc {
    configSettings: configIfc,
    host: hostIfc,
    start(host: hostIfc, metadata: Object): void,
    stop(): void,
    config(): configIfc,
    setConfig(config: configIfc): void,
    onEvent(event: eventIfc): void,
}

