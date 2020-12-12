package com.example.myapp2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.myapp2.models.PlaylistCreator;
import com.example.myapp2.repositories.PlaylistCreatorRepository;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.example.myapp2.repositories", "com.example.myapp2.controllers",
"com.example.myapp2.daos", "com.example.myapp2.models"})
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
