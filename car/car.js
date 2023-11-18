module.exports = class Car {
    constructor(make, model, odometer) {
        this.make = make,
        this.model = model,
        this.odometer = odometer
    }
    drive(distance) {
        this.odometer+=distance
    }
    async driveAsync(distance) {
        this.odometer += distance
        return this.odometer
    }
}