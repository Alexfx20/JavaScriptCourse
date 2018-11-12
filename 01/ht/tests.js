/* Написать тесты на функции spiral и quadraticEquation */
"use strict";

describe("quadraticEquation", function() {
  it("возвращает false, если параметры нельзя преобразовать в число", function() {
    return assert.isOk(quadraticEquation('hello',1,2) === false);
  });
  it("возвращает false если один из параметров массив", function() {
    return assert.isOk(quadraticEquation([],1,2) === false);
  });
  it("возвращает false если один из параметров объект", function() {
    return assert.isOk(quadraticEquation({},1,2) === false);
  });
  it("возврщает false если один из параметров не задан", function() {
    return assert.isOk(quadraticEquation(1,2) === false);
  });
  it('возвращает массив при допустимых параметрах', function() {
    return assert.isOk(Array.isArray(quadraticEquation(1, -8, 72)));
  });
  it('возвращает верный корень линейного уравнения', function() {
    return assert.isOk(quadraticEquation(0, 1, -1).toString() === [1].toString());
  });
  it("возвращает пустой массив если решения отсутствуют", function() {
    return assert.isOk(quadraticEquation(1, -8, 72).toString() === [].toString());
  });
  it("возвращает верное решение для уравнения с одним корнем", function() {
    return assert.isOk(quadraticEquation(1, 12, 36).toString() === [-6].toString());
  });
  it("возвращает верное решение для уравнения с двумя корнями", function() {
    return assert.isOk(quadraticEquation(1, 6, 1).toString() === [-0.1715728752538097, -5.82842712474619].toString());
  });
});

describe("spiral", function() {
  it("возвращает false если параметр функции не является массивом", function() {
  	assert.isOk(!Array.isArray(spiral({})));
  	assert.isOk(!Array.isArray(spiral(1)));
  	assert.isOk(!Array.isArray(spiral('1')));
  	assert.isOk(!Array.isArray(spiral()));
    //return assert.isOk(!Array.isArray(spiral({})));
  });
  it("возврщает массив, если параметр функции ялвяется массивом", function() {
    return assert.isOk(Array.isArray(spiral([])));
  });
  it("возвращает вреный массив в спиральном представлении", function() {
  	assert.isOk(spiral([[4,5],[6,7]]).toString() === [4, 5 , 7 ,6].toString());
  	assert.isOk(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]).toString() === [1,2,3,6,9,8,7,4,5].toString());
   // return test1;
  });
  it("возвращает вреный массив в спиральном представлении, если массив не является квадратной матрицей", function() {
  	var notQuadratic = [[1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]];
    return assert.isOk(spiral(notQuadratic).toString() === [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12].toString());
  });
  
});
