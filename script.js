document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;
  
    if (taskText) {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
  
      li.innerHTML = `
        ${taskText}
        <button class="deleteBtn">Delete</button>
      `;
  
      taskList.appendChild(li);
      taskInput.value = "";
  
      li.addEventListener("click", function() {
        li.classList.toggle("completed");
      });
  
      li.querySelector(".deleteBtn").addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent the li click event
        taskList.removeChild(li);
      });
    }
  });
  