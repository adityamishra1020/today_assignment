document.addEventListener('turbolinks:load', function() {
  updateProgressTracker();
});

function updateProgressTracker() {
  const tasks = document.querySelectorAll('#tasks-table tbody tr');
  const totalTasks = tasks.length;
  let completedTasks = 0;

  tasks.forEach(task => {
    const completedCell = task.querySelector('td:nth-child(5)');
    if (completedCell.textContent.trim() === 'Yes') {
      completedTasks++;
    }
  });

  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks * 100).toFixed(2) : 0;

  document.getElementById('total-tasks').textContent = totalTasks;
  document.getElementById('completed-tasks').textContent = completedTasks;
  document.getElementById('completion-rate').textContent = completionRate;
}