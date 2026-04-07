// container switch
function showContainer(containerId) {
    // 1. Hide all containers (remove the 'active' class)
    const containers = document.querySelectorAll('.containers');
    containers.forEach(container => {
        container.classList.remove('active');
    });

    // 2. Show the specific container that was requested
    const selectedContainer = document.getElementById(containerId);
    if (selectedContainer) {
        selectedContainer.classList.add('active');
    }
}

//post function
        function postfn(event){
            event.preventDefault();
                       
            const message = document.getElementById("messagepost");
             message.innerHTML="";
           
                submitPost(event);
                 message.classList.remove("alert-warning")
                message.classList.add("alert-success")
                message.innerHTML="Successfully Submitted";
                message.style.display = "block"; 

            }
        
// submit 
        function submitPost(event){
            event.preventDefault();
            const createForm = document.getElementById('createform');
            const studentdata = {
          name: document.getElementById('Pname').value,
          college: document.getElementById('Pcollege').value,
          roll: document.getElementById('Proll').value,
          qualification: document.getElementById('Pqualification').value,
          year: document.getElementById('Pyear').value,
          certificate: document.getElementById('Pcertificate').value
      };

      // Send the form data as JSON to the server using fetch()
      fetch('/api/studentsdata', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(studentdata) // Convert JavaScript object to JSON string
      })
      .then(response => {
          if (response.ok) {
            console.log("Student saved successfully!");
            createForm.reset(); // Clear the form fields
          } else {
              alert("Failed to save student");
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
        }


        function submitUpdate(event){
            event.preventDefault();
            const updateForm = document.getElementById('updateform');
                const studentId = document.getElementById('idu').value;

            const studentdata = {
          name: document.getElementById('Uname').value,
          college: document.getElementById('Ucollege').value,
          roll: document.getElementById('Uroll').value,
          qualification: document.getElementById('Uqualification').value,
          year: document.getElementById('Uyear').value,
          certificate: document.getElementById('Ucertificate').value
      };

      // Send the form data as JSON to the server using fetch()
      fetch(`/api/studentsdata/${studentId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(studentdata)
      })
      .then(response => {
          if (response.ok) {
            console.log("Student updated successfully!");
            updateForm.reset(); // Clear the form fields    
            
          } else {
              alert("Failed to update student");
          }
      })
      .catch(error => {
          console.error('Error:', error);
      });
        }

// update function
function updatefn(event){
            event.preventDefault();
             // Validate the form
             
             const message=document.getElementById("messageupdate");
             message.innerHTML="";
            
                // If validation passes, execute the submit logic
                submitUpdate(event);
                 message.classList.remove("alert-warning")
                message.classList.add("alert-success")
                message.innerHTML="Successfully Updated";
                message.style.display = "block"; 
        }


        function updatefetch(event) {
        event.preventDefault(); // Prevent the default form submission

        const studentId = document.getElementById('idu').value;

        // Send GET request to fetch the student data by ID
        fetch(`/api/studentsdata/${studentId}`, {
            method:'GET'
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Student not found');
            }
        })
        .then(studentdata => {
            // Populate the form fields with the student data
            document.getElementById('Uname').value = studentdata.name;
            document.getElementById('Ucollege').value = studentdata.college;
            document.getElementById('Uroll').value = studentdata.roll;
            document.getElementById('Uqualification').value = studentdata.qualification;
            document.getElementById('Uyear').value = studentdata.year;
            document.getElementById('Ucertificate').value = studentdata.certificate;
        })
        .catch(error => {
            alert("Failed to retrieve student data: " + error.message);
            console.error('Error:', error);
        });
      }


// get by id

        function gbisb(event){
            event.preventDefault();
            const studentId = document.getElementById('idgbi').value;
            const studentTable = document.getElementById('studentTable');
        // Send GET request to fetch the student data by ID
        fetch(`/api/studentsdata/${studentId}`, {
            method: 'GET'
        }
        )
        .then(response => 
        {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Student not found');
            }
        }
        )
        .then(studentdata => 
        {
            const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = ""; // clear existing rows

    // Wrap single object in array if needed
    const students = Array.isArray(studentdata) ? studentdata : [studentdata];
    
    students.forEach(student => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.college}</td>
        <td>${student.roll}</td>
        <td>${student.qualification}</td>
        <td>${student.year}</td>
        <td>${student.certificate}</td>
      `;

      tableBody.appendChild(row);
      studentTable.style.display = "table"; // Show the table
    });
            
        })
        .catch(error => {
            alert("Failed to retrieve student data: " + error.message);
            console.error('Error:', error);
        });

        }


// Get all students function
function getAllStudents(event) {
    event.preventDefault();
    fetch('/api/studentsdata', {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to retrieve students');
        }
    })
    .then(studentsData => {
        const tableBody = document.querySelector("#studentsTable tbody");
        tableBody.innerHTML = ""; // clear existing rows

        // Ensure it's an array
        const students = Array.isArray(studentsData) ? studentsData : [studentsData];

        students.forEach(student => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.id || ''}</td>
                <td>${student.name || ''}</td>
                <td>${student.college || ''}</td>
                <td>${student.roll || ''}</td>
                <td>${student.qualification || ''}</td>
                <td>${student.year || ''}</td>
                <td>${student.certificate || ''}</td>
            `;

            tableBody.appendChild(row);
        });

        // Show the container

        showContainer('container6');
    })
    .catch(error => {
        alert("Failed to retrieve all students: " + error.message);
        console.error('Error:', error);
    });
}

// delete 
function deleteStudent(event) {
        event.preventDefault(); // Prevent the form from reloading the page
        const message = document.getElementById("messagedelete");
        message.innerHTML="";
        const studentId = document.getElementById('did').value;

        // Send DELETE request to the server
        fetch(`/api/studentsdata/${studentId}`, {
          method: 'DELETE',
        })
        .then(response => {
          if (response.ok) {
            console.log(`Student with ID ${studentId} has been deleted successfully!`);
            message.classList.remove("alert-warning")
                message.classList.add("alert-success")
                message.innerHTML="Successfully Deleted";
                message.style.display = "block"; 
          } else {
            throw new Error('Failed to delete student. Please check the ID.');
          }
        })
        .catch(error => {
          alert('Error: ' + error.message);
        });
      }
        