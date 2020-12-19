package se.kth.sda.simba.Announcement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.simba.auth.AuthService;
import se.kth.sda.simba.user.User;
import se.kth.sda.simba.user.UserService;

import java.util.List;
@RestController
@RequestMapping("/announce")
public class AnnouncementController {

    private final AnnouncementService service;
    private final AuthService authService;
    private final UserService userService;

    @Autowired
    public AnnouncementController(AnnouncementService service, AuthService authService,UserService userService ) {
        this.service = service;
        this.authService = authService;
        this.userService = userService;
    }

    //Get all announcements
    @GetMapping("")
    public List<Announcement> getAll() {
        return service.getAll();
    }

    //Get announcement by id
    @GetMapping("/{id}")
    public Announcement getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    //posting a new announcement
    @PostMapping("/new")
    public Announcement create(@RequestBody Announcement newAnnouncement) {
        //newAnnouncement.setEmail(authService.getLoggedInUserEmail());
        String email = authService.getLoggedInUserEmail();
        System.out.println(email);
        User user = userService.findUserByEmail(email);
        newAnnouncement.setUser(user);
        return service.create(newAnnouncement);
    }

    //Updating an existing announcement
    @PutMapping("/update")
    public Announcement update(@RequestBody Announcement updatedAnnouncement) {
        return service.update(updatedAnnouncement);
    }

    // ENd point to Delete an announcement with its id
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
