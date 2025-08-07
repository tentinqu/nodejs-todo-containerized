import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoForm from '../components/TodoForm';

describe('TodoForm', () => {
  test('should add a new todo when form is submitted', () => {
    const mockOnAddTodo = jest.fn();
    render(<TodoForm onAddTodo={mockOnAddTodo} />);

    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('todo-form');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(form);

    expect(mockOnAddTodo).toHaveBeenCalledWith('New Todo');
    expect(input.value).toBe('');
  });

  test('should not add empty todo', () => {
    const mockOnAddTodo = jest.fn();
    render(<TodoForm onAddTodo={mockOnAddTodo} />);

    const form = screen.getByTestId('todo-form');
    fireEvent.submit(form);

    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });
});