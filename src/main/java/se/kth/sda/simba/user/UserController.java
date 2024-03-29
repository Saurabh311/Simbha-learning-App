package se.kth.sda.simba.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.kth.sda.simba.auth.AuthService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private AuthService authService;

    @GetMapping("")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/me")
    public User getCurrentUser() {
        String email=authService.getLoggedInUserEmail();
        return userService.findUserByEmail(email);
    }

    @GetMapping("/{email}")
    public User getUserByMail(@PathVariable String email) {
        return userService.findUserByEmail(email);
        //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
