const Car = require('./car')

function foo () {
    return 'the foo'
}

describe('our first tests', () => {
    test('sanity', () => {
        expect(5).toBeDefined()
    })
    test('objects', () => {
        const o = {a: 1}
        const oo = {a: 1}
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test('objects again', ()=> {
        expect({a: 1}).toEqual({ a: 1 })
    })
})

describe('foo function', ()=> {
    test('foo returns foo', () => {
        expect(foo()).toBe('the foo')
        expect(foo()).toHaveLength(7)
    })
})

describe('Car class', () => {
    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius', 0)
    })
    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make', () => {
        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
        expect(prius.make).toBeDefined()
        expect(prius.model).toBeDefined()
        expect(prius).toMatchObject({make: 'toyota', model: 'prius'})
    })
    test('new cars start with the odometer at zero', () => {
        expect(prius.odometer).toBeDefined()
        expect(prius.odometer).toBe(0)
    })
    test('cars have a drive method', () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test('drive method takes distance and increases odometer by that distance', ()=>{
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    test.todo('drive method returns the updated odometer')
    test.todo('drive method returns the updated odometer')
    test.todo('drive method returns the updated odometer')
    // test.only('drive method returns the updated odometer')
    test.skip('drive method returns the updated odometer', ()=> {
        expect(4).toBe(5)
    })

    test('driveAsync method resolves the updated odometer', async () => {
        let updatedOdometer = await prius.driveAsync(10)
        expect(updatedOdometer).toBe(10)
        updatedOdometer = await prius.driveAsync(5)
        expect(updatedOdometer).toBe(15)
    })

})





