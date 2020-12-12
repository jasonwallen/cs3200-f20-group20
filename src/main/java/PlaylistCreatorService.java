
import com.example.myapp2.repositories.PlaylistCreatorRepository;
import com.example.myapp2.models.PlaylistCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlaylistCreatorService {
  @Autowired
  PlaylistCreatorRepository repository;
  @GetMapping("/api/plc")
  public Iterable<PlaylistCreator> FindAllPlaylistCreators() {
    return repository.findAll();
  }
}
