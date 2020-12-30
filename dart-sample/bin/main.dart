/*
printInteger (int aNumber){
  print('The number is $aNumber');
}

void main(List<String> arguments) {
  print('Hello world!');

  var number = 50;
  printInteger(number);

  dynamic a = 123;
  a = 456;
  a = 'abc';

  var b =123; // int
  b = 456;
  //b = 'abc';
  var getSummation = (a, b){
    return a+b;
  };
   print(getSummation(1,2));
   print(getSummation('1', '2'));

   var getMultiplication = (num a, num b) => a*b;

   print(getMultiplication(5, 6));

   print(fibonacci(5));


}

int fibonacci (int n){
  if(n==0 || n==1) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}

*/

import 'dart:io';
void main(){
  stdout.write('Enter your name: ');
  var name = stdin.readLineSync();

  //stdout.writeln(name);

  stdout.writeln('Your name is $name');
}
