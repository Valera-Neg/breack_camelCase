function solution(string) {
   return string.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
}

console.log(solution('camelCasing')) //> 'camel Casing'
console.log(solution('camelCasingTest')) //> 'camel Casing Test'
console.log(solution('identifier')) //> 'identifier'
console.log(solution('')) //> ''