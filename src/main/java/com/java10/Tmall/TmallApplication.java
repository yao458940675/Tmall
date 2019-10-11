package com.java10.Tmall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@ComponentScan("com.java10.Tmall")
@EnableTransactionManagement
public class TmallApplication {

	public static void main(String[] args) {
		SpringApplication.run(TmallApplication.class, args);
	}

}
