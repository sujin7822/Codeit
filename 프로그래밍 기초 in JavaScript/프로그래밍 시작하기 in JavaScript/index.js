//아래 코드는 15를 출력하는 코드입니다.
/*아래 코드는 15를 출력하는 코드입니다.*/

console.log('Hello Codeit!')
console.log(15)

// 변수 선언
let espressoPrice;
espressoPrice = 3000;

console.log(espressoPrice)

//칼로리 계산기 실습
let EspressoPrice;
let Milk;
let Choco;
let Cream;

EspressoPrice = 10;
Milk = 170;
Choco = 50;
Cream = 60;

console.log(EspressoPrice);
console.log(EspressoPrice + Milk);
console.log(EspressoPrice + Milk + Choco);
console.log(EspressoPrice + Milk + Choco + Cream);

// 함수 선언
function 함수이름() {
  명령; 
  명령;
};

//greatings 실습
function greetings() {
  console.log('Hi');
  console.log('안녕');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
};
//함수호출
greetings();

//자랑스러운 애국가 실습

function printChorus() {
  console.log('무궁화 삼천리 화려 강산');
  console.log('대한 사람 대한으로 길이 보전하세');
};

console.log('1절');
console.log('동해 물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세')
printChorus()
console.log('2절')
console.log('남산 위에 저 소나무 철갑을 두른 듯')
console.log('바람서리 불변함은 우리 기상일세')
printChorus()
console.log('3절')
console.log('가을 하늘 공활한데 높고 구름 없이')
console.log('밝은 달은 우리 가슴 일편단심일세')
printChorus()
console.log('4절')
console.log('이 기상과 이 맘으로 충성을 다하여')
console.log('괴로우나 즐거우나 나라 사랑하세')
printChorus()

// 파라미터 연습
function greetings(sentence) {
  console.log('Hi');
  console.log('안녕');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
  console.log(sentence);
};
//함수호출
greetings('Hola');

// 파라미터 연습2
function welcome(name) {
  console.log('안녕하세요 ' + name + '님!');
};

welcome('코드잇');
welcome('김철수');

// 파라미터 연습3
function printSquare(x) {
  console.log(x*x);
};

printSquare(2);
printSquare(5);
printSquare(6);

// 내 노트북 용량은? 실습
function teraToGiga(x){
  console.log(x + 'TB는');
  console.log(x*1024 + 'GB 입니다.');
};

function teraToMega(x){
  console.log(x + 'TB는');
  console.log(x*1024*1024 + 'MB 입니다.');
};

teraToGiga(2);
teraToMega(2);

// 여러 개의 파라미터 연습
function printSum(num1, num2) {
  console.log(num1 + num2);
};

printSum(10, 5);

// 여러 개의 파라미터 연습2
function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.');
  console.log('제 이름은' + name + '입니다.');
  console.log('생일은' + birth );
};
introduce('김영희','1월 1일','한국','학생')

// 나의 체질량지수는?
function bmiCalculator(name, weight, height) {
  bmi = weight / (height * height / 10000);
  console.log(name + '님의 체질량지수는 ' + bmi + '입니다.')
};

bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);

//return - 1
function getTwo() {
  return 2;
};

console.log(getTwo());
console.log(2);

//return - 2
function getTwice(number) {
  return number * 2;
};

console.log(getTwice(5));

// return - 3
function getTwice(number) {
  return number * 2;
};

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);

// 1년 뒤엔 얼마를 받을까? 실습
function interestCalculator(amount, term, rate) {
  interest = amount*term*rate/100
  console.log('맡긴 금액은 ' + amount + '원 입니다.');
  console.log('이자는 ' + interest + '원 입니다.');
  return amount + interest;
};

let money = interestCalculator(3650000,1, 4);
console.log('최종 받을 금액은 ' + money + '원 입니다.')
