---
sidebar_position: 1
---

# 개발환경 설정

## 1.프로젝트 요구사항
- **프레임워크:** Spring Boot (Java 기반)
- **프론트엔드:** React 기반 (Vite)
- **데이터베이스:** MySQL 또는 Oracle
- **웹 서버:** Apache 또는 Amazon EC2
- **빌드 도구:** Gradle 또는 Maven

## 2.필수 설치 도구
- Java 8 이상 (권장: Java 11)
- Gradle 또는 Maven
- Node.js & npm
- MySQL/Oracle 데이터베이스
- Apache HTTP 서버 또는 Amazon EC2 인스턴스

## 3.환경 변수 설정
프론트엔드와 백엔드를 연동하기 위해 `.env` 파일과 `application.yml` 파일을 설정합니다.

```env title=".env"
VITE_API_URL=http://localhost/api
```

```yaml title="application.yml"
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/axboot
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
server:
  port: 8080
  servlet:
    context-path: /api
```
