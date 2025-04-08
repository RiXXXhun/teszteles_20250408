const {sum, osszefuz, getGrade, addXTimes, arrayContains, addArrayElement, mapArrayElements, convertItemsToString, getRandomByChance} = require("./app")

test("add 4 + 5 to equal 9", () => {
    expect(sum(4, 5)).toBe(9)
    expect(sum(3, 3)).toBeGreaterThan(3)
    expect(sum(3, 3)).toBeLessThan(10)
})

test("concat apple and orange we get 'apple - orange' ", () => {
    expect(osszefuz("apple", "orange")).toBe("apple - orange")
})

test("get 4  grade for 65 percent", () => {
    expect(getGrade(100, 65)).toBe(4)
})

test("get 5 grade for 85 point", () => {
    expect(getGrade(100, 85)).toBe(5)
})

test("get specific grade", () => {
    expect(getGrade(100, 10)).toBe(1)
    expect(getGrade(100, 25)).toBe(2)
    expect(getGrade(100, 55)).toBe(3)
})

test("adding 2 , 5 times to 10 eqals 20", () => {
    expect(addXTimes(10, 2, 5)).toBe(20)
})

test("array caontains apple ", () => {
    const tomb = [
        'apple',
        'banana',
        'orange'
    ]

    expect(arrayContains(tomb, 'apple')).toBeTruthy()
    expect(arrayContains(tomb, 'egg')).toBeFalsy()
})

test("array lemght will be 1 longer aster add", () => {
    const tomb = [1, 150, 2];
    
    expect(addArrayElement([...tomb], 99)).toHaveLength(tomb.length + 1)
})

test("adding null will be not inscre array lenght", () => {
    const tomb = [1, 150, 2];

    expect(addArrayElement([...tomb], null)).toHaveLength(tomb.length)
})

test("mapped array first elemnt is string", () => {
    const tomb = [1, 2, 3]
    const mapped =  mapArrayElements(tomb);

    expect(mapped[0]).toStrictEqual('1')
})

test("get truo or false", () => {
    expect(getRandomByChance(0)).toBeFalsy()
    expect(getRandomByChance(100)).toBeTruthy()
    expect(typeof getRandomByChance()).toBe("boolean")
})

