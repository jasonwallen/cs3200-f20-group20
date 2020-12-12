package repositories;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import com.example.myapp2.PlaylistCreator;

public interface PlaylistCreatorRepository extends
    CrudRepository<PlaylistCreator, Integer> {
}
