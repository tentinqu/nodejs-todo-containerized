import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  const mockTodos = [
    { id: '1', title: 'Test Todo 1', completed: false },
    { id: '2', title: 'Test Todo 2', completed: true }
  ];

  test('renders todos correctly', () => {
    render(
      <TodoList
        todos={mockTodos}
        onToggleTodo={() => {}}
        onDeleteTodo={() => {}}
      />
    );

    expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  });

  test('calls onToggleTodo when checkbox is clicked', () => {
    const mockOnToggle = jest.fn();
    render(
      <TodoList
        todos={mockTodos}
        onToggleTodo={mockOnToggle}
        onDeleteTodo={() => {}}
      />
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledWith('1', true);
  });

  test('calls onDeleteTodo when delete button is clicked', () => {
    const mockOnDelete = jest.fn();
    render(
      <TodoList
        todos={mockTodos}
        onToggleTodo={() => {}}
        onDeleteTodo={mockOnDelete}
      />
    );

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });
});