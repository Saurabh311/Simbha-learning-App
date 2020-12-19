package se.kth.sda.simba.Announcement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AnnouncementService {
    private final AnnouncementRepository repository;

        @Autowired
        public  AnnouncementService( AnnouncementRepository repository) {
            this.repository = repository;
        }

        public List<Announcement> getAll() {
            return repository.findAll();
        }

        public Optional<Announcement> getById(Long announceId) {
            return repository.findById(announceId);
        }

        public  Announcement create( Announcement newAnnouncement) {
            return repository.save(newAnnouncement);
        }

        public Announcement update(Announcement  updatedAnnouncement ) {
            return repository.save(updatedAnnouncement);
        }

        public void delete(Long id) {
            repository.deleteById(id);
        }
    }


