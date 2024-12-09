---
sidebar_position: 2
---

# 스프링 시큐리티 설정 

## 1.기본 설정
Spring Security를 설정하여 애플리케이션의 인증 및 권한을 관리합니다.

 
```java title="SecurityConfig.java"
package com.axboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/public/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .httpBasic();
        return http.build();
    }
}
```
## 2.사용자 초기 계정
초기 사용자 계정은 axboot-server의 UserController에 포함되어 있습니다. 기본 계정을 수정하거나 새 계정을 추가하려면 UserDetailService를 사용하여 관리합니다.
