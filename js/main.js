const todos = [
    {
      id: 1,
      title: 'Nakupit',
      description: 'Mlieko, syr, vajcia',
      completed: false,
    },
    {
      id: 2,
      title: 'Umyt auto',
      description: '+ povysavat',
      completed: true,
    },
    {
      id: 3,
      title: 'Vyzdvihnut postu',
      completed: true,
    },
  
    {
      id: 4,
      title: 'Urobit domacu ulohu na JS Kurz',
      completed: false,
    },
  ];
  
  
  const renderTodos = (todo) => {
    
    // console.log(todo.description)
    if (todo.description === undefined) {
      todo.description = null;
    }
    const wrapElement = document.getElementById('wrapElement');
    const titleElement = document.createElement('li');
    const descriptionElement = document.createElement('p');
    const checkBox = document.createElement('input');
  
    titleElement.id = `title-${todo.id}`
    descriptionElement.id = `description-${todo.id}`
  
    titleElement.innerText = todo.title;
    descriptionElement.innerText = todo.description;
  
    checkBox.type = 'checkbox';
    checkBox.classList.add('checkbox');
    checkBox.id = `checkbox-${todo.id}`;
    checkBox.checked = todo.completed;
  
    wrapElement.appendChild(checkBox);
    wrapElement.appendChild(titleElement);
    wrapElement.appendChild(descriptionElement);
  
    // console.log(checkBox.checked)
    checkBox.addEventListener('click', () => {
      // console.log(event.target)
      const splitId = event.target.id.split('-')
      // console.log(splitId)
      const id = splitId[1]
      // console.log(id)
      // console.log(todos)
      const todoElement = todos.find(todo => String(todo.id) === id)
      // console.log(todoElement)
      // console.log(event.target.checked)
      todoElement.completed = event.target.checked
      // console.log(todoElement)
    });
  }
  
  const deleteTodos = (todo) => {
    // console.log(todos)
    const wrapElement = document.getElementById('wrapElement')
    const titleElement = document.getElementById(`title-${todo.id}`)
    const descriptionElement = document.getElementById(`description-${todo.id}`)
    const checkBox = document.getElementById(`checkbox-${todo.id}`)
  
    
    wrapElement.removeChild(titleElement) 
    wrapElement.removeChild(descriptionElement)  
    wrapElement.removeChild(checkBox)   
  }
  
  const button = () => {
    const buttonElement = document.getElementById('button')
    // console.log(buttonElement)
  
    buttonElement.addEventListener('click', () => {
  
      // console.log(todos)
      const incompletedTodos = todos.filter( todo => {
  
        return todo.completed === false;
      })
      // console.log(incompletedTodos)
  
      if(buttonElement.value === 'show') {
  
        buttonElement.innerText = 'Show all'
        buttonElement.value = 'hide'
        
        todos.forEach(todo => deleteTodos(todo));
        incompletedTodos.forEach(todo => renderTodos(todo));
  
      } else {
  
        buttonElement.innerText = 'Hide Completed'
        buttonElement.value = 'show'
  
        incompletedTodos.forEach( todo => deleteTodos(todo))
        todos.forEach(todo => renderTodos(todo));
      }
    })
  
  }
  
  
  todos.forEach(todo => renderTodos(todo));
  button()