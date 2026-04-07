package com.demo.studentdatamodule;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/studentsdata")
public class StudentDataController{
	
	@Autowired
	private StudentDataService dataservice;
	//RETRIEVE ALL
		@GetMapping
		public List<StudentData> list(){
			return dataservice.listAll();
		}
		
		//RETRIEVE BY ID
		@GetMapping("/{id}")
		public ResponseEntity<StudentData> get(@PathVariable("id") Integer id){
			try {
				StudentData studentdata = dataservice.get(id);
				return new ResponseEntity<StudentData>(studentdata, HttpStatus.OK);
			    }
			catch(NoSuchElementException e){
				return new ResponseEntity<StudentData>(HttpStatus.NOT_FOUND);
		                                   }
		}
		
		//CREATE 
		@PostMapping
		public void add(@RequestBody StudentData studentdata) {
				dataservice.save(studentdata);
		}
		
		
		//UPDATE
		@PutMapping("/{id}")
		public ResponseEntity<?> update(@RequestBody StudentData studentdata,@PathVariable("id") Integer id){
			
			try{
				StudentData existstudent = dataservice.get(id);
				studentdata.setId(id);
				dataservice.save(studentdata);
				
				return new ResponseEntity<>(HttpStatus.OK);
			}
			catch (NoSuchElementException e){
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
		
		@DeleteMapping("/{id}")
		public void delete(@PathVariable("id") Integer id) {
			dataservice.delete(id);
		}
		
}