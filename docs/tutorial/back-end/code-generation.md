---
sidebar_position: 3
---

# 서버코드 만들기

## 1 Apache + PHP

### (1) 서버 구성
Apache HTTP 서버를 사용하여 PHP와 MySQL로 RESTful API를 제공합니다.

```php title="/var/www/html/api/users.php"
<?php
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    echo json_encode([
        ["id" => 1, "name" => "John Doe", "email" => "john@example.com"],
        ["id" => 2, "name" => "Jane Smith", "email" => "jane@example.com"]
    ]);
} elseif ($method === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    echo json_encode([
        "id" => rand(3, 100),
        "name" => $input["name"],
        "email" => $input["email"]
    ]);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
```


### (2) Apache 설정

```config title="/etc/apache2/sites-available/000-default.conf"
<VirtualHost *:80>
ServerName localhost
DocumentRoot "/var/www/html"

    Alias /api "/var/www/html/api"
    <Directory "/var/www/html/api">
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```
-----

## 2 Amazon EC2 + Oracle

### (1) Amazon EC2 설정
- OS: Amazon Linux 2
- Instance Type: t2.micro (테스트 환경)
- DB: Oracle 19c

##### EC2 인스턴스에서 Java와 Oracle 드라이버 설치
```bash
sudo yum install java-11-openjdk
sudo yum install oracle-instantclient19.8-basic
```
### (2) Spring Boot 데이터베이스 설정
```yaml title="application.yml"
spring:
        datasource:
        url: jdbc:oracle:thin:@ec2-XX-XX-XX-XX.compute-1.amazonaws.com:1521:ORCL
        username: oracle_user
        password: oracle_password
        driver-class-name: oracle.jdbc.OracleDriver
        jpa:
        hibernate:
        ddl-auto: update
        show-sql: true

```

### (3) 사용자 컨트롤러 예제
```java
package com.axboot.controller;

import com.axboot.domain.User;
import com.axboot.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.findAll();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}
```
