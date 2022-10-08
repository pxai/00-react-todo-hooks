import { screen, render, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';


describe('Task List testing', () => {        
    const tasks = [{id: 1, name: 'Sample1'}, {id: 2, name: 'Sample2'}, {id: 3, name: 'Sample3'}];
    const handleDelete = jest.fn();
    const handleUpdate = jest.fn();

    beforeEach(() => {
        render(<TaskList tasks={tasks} handleUpdate={handleUpdate} handleDelete={handleDelete}/>)
    });

    it('renders the title correctly', () => {
        const headingElement = screen.getByRole('heading', {text: 'Tasks'});
        expect(headingElement).toBeInTheDocument();
    });

    it('renders the task elements', () => {
        const listElements = screen.getAllByLabelText('task');
        expect(listElements.length).toBe(tasks.length);

        listElements.forEach( (task, i) => {
            expect(task.innerHTML).toContain(tasks[i].name);
        });
    });

    it('fires delete handler when deletion button is clicked', () => {
        const deleteButtons = screen.getAllByRole('button', {name: 'Delete'});
  
        deleteButtons.forEach((button, i) => {
            fireEvent.click(deleteButtons[i]);
            expect(handleDelete).toBeCalledWith(tasks[i].id);
        })        
    });
});



