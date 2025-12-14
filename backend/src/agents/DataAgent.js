export default class DataAgent {
  process(reading) {
    return {
      vehicleId: reading.vehicleId,
      engine_temp: Number(reading.engine_temp),
      battery_voltage: Number(reading.battery_voltage),
      tyre_pressure: Number(reading.tyre_pressure),
      rpm: Number(reading.rpm),
      speed: Number(reading.speed),
      timestamp: new Date()
    };
  }
}
