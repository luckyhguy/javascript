# javascript

## 1.7 - object
Object
number, string, boolean의 단순 자료형보다 더 복잡한 자료를 표현할 때 사용
객체를 만드는 법
중괄호 {} 를 사용해 정의 가능
객체는 속성의 집합으로 이뤄짐
각 속성은 이름과 값으로 이뤄짐
객체 정의 시 속성이름:값의 형태로 속성 정의 가능
속성의 값은 모든 자료형이 가능, object 포함
객체의 속성에 접근하는 법
객체 이름 뒤에 점(.)을 사용하고 속성 이름에 접근 할 수 있음
객체 이름 뒤에 대괄호([]) 안에 속성 이름을 문자열로 접근할 수 있음
객체의 속성의 값을 변경하는 법
객체 속성에 접근해서 변수에 값을 저장하듯이 사용

## 1.6 - string
따옴표나('), 큰따옴표(")로 감싸서 문자열 표현
문자열 안에 따옴표, 큰따옴표 등의 문자를 활용하려면 escape character를 활용
escape character는 역슬래시(\)로 사용
줄바꿈 : \n
따옴표 : \'
큰따옴표 : \"
역슬래시 : \\


## 1.5 - number
javascript에서는 정수, 실수 상관없이 모두 number라는 자료형으로 표현합니다.
1) parseInt (정수)
2) parseFloat (실수)



## 1.4 - 기본자료형
자료형 종류(number, string, boolean), typeof() 명령어 사용해보기
1) lecture04.js 파일에 변수 선언 및 출력을 통해 종류 확인.
2) number - 64비트를 활용, 10^19정도 표현 (-e^63 ~ e^63-1)

## 1.3 - 변수 선언 및 초기화
변수란? 프로그램 실행 도중 임의의 값을 저장해 두고 읽을 수 있는 공간
1) 크롬 콘솔창에서 >var a; a=10; <10 출력 
2) lecture03.js 파일에 변수 선언 및 alert, prompt, console.log를 통해 실행확인
-prompt를 통해 사용자에게 입력 받는 방법 확인


## 1.2 - console.log 사용하기
1) lecture02.js 파일에 console.log 작성 및 실행 확인
console.log("Hello developer console"); 
2) 크롬 콘솔에서 > 표시에 직접 명령어 사용하여 실행 확인.
순차적으로 진행됨도 확인


## 1.1 - html, js 만들기
1) index.html 만들기 및 스크립트를 통해 자바스크립 실행 구문 추가<script src="lecture01.js"></script>
2) alert 구문 사용시 경고창 띄울 수 있음.
3) 프로그램 변경시 reload!
