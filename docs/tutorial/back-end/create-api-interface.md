---
sidebar_position: 5
---

# API 인터페이스 만들기 

## 1.MakeInterface 도구
MakeInterface를 사용하여 AXBoot에서 API 명세를 정의합니다.

##### 실행 방법
```bash
./gradlew makeInterface
```

##### 인터페이스 정의 예제
```java title="UserInterface.java"
public interface UserInterface {
    Long getId();
    String getName();
    String getEmail();
}
```
