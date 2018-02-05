const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom',function(){
	it('Si termina con ar se le quitan esas dos letras',function(){
		const result = platzom("programar")
		expect(result).to.equal("program")
	});
	it('Si la palabra comienza con z, se le añade pe al final',function(){
		const result = platzom("zorro")
		const result2 = platzom("zarpar")
		expect(result).to.equal("zorrope")
		expect(result2).to.equal("zarppe")
	});
	it('Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y uni con un guion medio',function(){
		const result = platzom("abecedario")
		expect(result).to.equal("abece-dario")
	});
	it('Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas',function(){
		const result = platzom("sometemos")
		expect(result).to.equal("sOmEtEmOs")
	});
})