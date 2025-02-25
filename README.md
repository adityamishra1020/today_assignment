# To-Do List Application

This is a simple to-do list application built with Ruby on Rails. It includes features like adding, editing, deleting, and sorting tasks by priority and due date. Additionally, it includes a progress tracker to show the percentage of completed tasks.

## Features

- Add, edit, and delete tasks
- Sort tasks by priority and due date
- Progress tracker to show the percentage of completed tasks

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/adityamishra1020/today_assignment
   cd today_assignment
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the migrations:
   ```bash
   rails db:migrate
   ```

4. Start the server:
   ```bash
   rails server
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Thought Process

I  created a basic Rails application and generating the necessary models and controllers. I then implemented the CRUD operations for tasks and added sorting by priority and due date. And i have also added a progress tracker feature to showcase creativity.

### Implementation Details

1. **Model**: The `Task` model includes attributes for `title`, `description`, `priority`, `due_date`, and `completed`. Validations ensure that the `title` and `due_date` are present.

2. **Controller**: The `TasksController` handles the CRUD operations and includes actions for listing, creating, editing, updating, and deleting tasks. It also calculates the progress of completed tasks.

3. **Views**: The views include forms for creating and editing tasks, as well as a table to display all tasks. The progress tracker is displayed on the index page.

4. **Routing**: The routes are set up to handle RESTful actions for tasks, with the root route pointing to the `index` action.

