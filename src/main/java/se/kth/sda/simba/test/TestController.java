package se.kth.sda.simba.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import se.kth.sda.simba.auth.AuthService;
import se.kth.sda.simba.user.User;
import se.kth.sda.simba.user.UserService;

@RestController
public class TestController {
    @Autowired
    AuthService authService;

    @Autowired
    UserService userService;

    @GetMapping("/test")
    public String userEmail() {
        return authService.getLoggedInUserEmail();
    }

    @GetMapping("/user/me")
    public User userData() {
        return userService.findUserByEmail(userEmail());

    }
}








/*

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import se.kth.sda.simba.auth.AuthService;

@RestController
public class TestController {
    @Autowired
    AuthService authService;

    @GetMapping("/test")
    public String foo() {
        return authService.getLoggedInUserEmail();
    }
}


*/