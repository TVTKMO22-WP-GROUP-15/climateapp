package com.climateapp.climateapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@SpringBootApplication
public class ClimateappApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClimateappApplication.class, args);
		
	}

}
