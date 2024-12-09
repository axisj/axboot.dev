---
sidebar_position: 2
---

# 네이밍 컨벤션

## File Naming

파일의 역할과 내용을 명확히 구분하고, 프로젝트 구조를 직관적으로 이해하도록 돕기 위함입니다.

| **확장자** | **용도**               | **규칙**                                | **예**                              |
|------------|------------------------|-----------------------------------------|-------------------------------------|
| **.ts**    | Function / Library     | CamelCase (첫 시작은 소문자)            | useI18n.ts, useSystemProgramService.ts |
| **.tsx**   | React Component        | PascalCase (첫 시작은 대문자)           | App.tsx, BrandLogo.tsx             |
| **.* **    | Etc                    | CamelCase (첫 시작은 소문자)            |                                     |




---

## TypeScript Naming

타입 및 인터페이스 정의의 목적을 명확히 하여 코드 가독성을 높이고 유지보수를 용이하게 하기 위함입니다.

### Package 

“프로젝트 구조”의 “폴더 및 패키지 구조 참조”

### Interface / class 

| **구분**               | **규칙**                               | **예**                                |
|------------------------|---------------------------------------|---------------------------------------|
| **기본**               | 단어 + 단어 … 단어                        | UploadFile                           |
|                        | 단어의 첫 글자는 대문자로 시작                   | Board                                 |
|                        | 약자일 경우 첫 단어만 대문자로 시작                | NoticeBoardController                |
|                        | 특별한 경우가 아닌 경우 약자를 쓰지 않는다.        | Brd (wrong), Board (ok)              |
| **repositoryInterface**| 업무명 + RepositoryInterface           | BoardRepositoryInterface             |
| **repository**         | 업무명 + Repository                    | BoardRepository                      |
| **service**            | 업무명 + Service                       | BoardService                         |

### Member field

| **구분**  | **규칙**                                  | **예**                 |
|-----------|-------------------------------------------|------------------------|
| **기본**  | 단어 + 단어 … 단어                        |                        |
|           | 단어의 첫 글자는 소문자로 시작                   | couponIdx             |
|           | 약자일 경우 첫 단어만 대문자로 시작              | couponIDX (wrong), couponIdx (ok) |

---

## CSS class Naming

### Selector

#### 규칙
css class 이름은 camelCase를 사용한다.

#### 예
```css
.cardItem {}
.cardItemPrimary {}
```


### Custom-property

#### 규칙
snake-case를 사용한다.

#### 예
```css
:root {
--ifm-color-primary: #0b62af;
--ifm-color-primary-dark: #283d6b;
}
```

---

## URL Naming

#### 규칙
```bash
/{pc(front)/mobile(모바일)/am(관리자)}/{controller name}/{controller method}.do
{controller name}이 controller method에 반복될 경우 생략 가능.
3 Depth로만 지정한다.
```


#### 예
```bash
\am\board\controller\NoticeBoardController.java
/am/board/noticeBoardList.do
}

---
