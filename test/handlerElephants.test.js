const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Ilana');
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('verifica se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('verifica se é uma string', () => {
    expect(typeof handlerElephants('averageAge')).toBe('number');
  });
  it('verifica se ao receber nenhum parametro retorna undefinde', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('verifica se ao receber parametro retorna defined', () => {
    expect(handlerElephants('averageAge')).toBeDefined();
  });
  it('verifica se ao receber availability, retorna um array com a quantidade correta', () => {
    expect((handlerElephants('availability')).length).toBe(4);
  });
});
