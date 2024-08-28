import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComment />);

        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        expect(screen.getAllByTestId('comment-item').length).toBe(1);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        expect(screen.getAllByTestId('comment-item').length).toBe(2);
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
