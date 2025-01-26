describe('Nuestro primer test', ()=>{
    test('Debe revisar que 1+1 =2', ()=>{
        expect(1+1).toBe(2)
    })

    test('Debe revisar que 1 + 1 no sea 3', ()=>{
        expect(1+1).not.toBe(3)
    })
})