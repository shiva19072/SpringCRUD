package com.demo.studentdatamodule;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import jakarta.transaction.Transactional;
@Service
@Transactional
public class StudentDataService {
	@Autowired
	private StudentDataRepository datarepository;

	public List<StudentData> listAll() {
		// TODO Auto-generated method stub
		return datarepository.findAll();
	}

	public StudentData get(Integer id) {
		// TODO Auto-generated method stub
		return datarepository.findById(id)
				.orElseThrow(() -> new NoSuchElementException("Student not found with id " + id));
	}

	public void save(StudentData studentdata) {
		// TODO Auto-generated method stub
		datarepository.save(studentdata);
	}

	public void delete(Integer id) {
		// TODO Auto-generated method stub
		datarepository.deleteById(id);
	}

}
