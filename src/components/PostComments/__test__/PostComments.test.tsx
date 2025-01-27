import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';

describe('Teste para o componente comentários', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post/>);

        const campo = screen.getByTestId('campo-cadastou')
        const button = screen.getByTestId('btn-cadastrar')

        fireEvent.change(campo, { target: { value: 'Primeiro comentário' } })
        fireEvent.click(button)

        expect(screen.queryByTestId('Primeiro comentário')).toBeInTheDocument()

        fireEvent.change(campo, { target: { value: 'Segundo comentário' } })
        fireEvent.click(button)

        expect(screen.getByTestId('Segundo comentário')).toBeInTheDocument()

        expect(screen.getAllByTestId('post-comment')).toHaveLength(2)
    });

}); 