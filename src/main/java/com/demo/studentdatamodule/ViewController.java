package com.demo.studentdatamodule;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/studentsdata")
public class ViewController{

	@GetMapping({"/", "/index"})
    public String index() {
        return "index"; // Returns index.html from the templates folder
    }
	
	
}