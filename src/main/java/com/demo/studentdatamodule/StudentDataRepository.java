package com.demo.studentdatamodule;

import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentDataRepository extends JpaRepository<StudentData,Integer> {

}
