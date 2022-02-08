import Modal from 'react-modal';

export function ReactModal() {
    return (
        <Modal 
            isOpen={false}
            className="react-modal-styles" 
        >
            <div>
                <form action="">
                    <input type="text" placeholder="Logradouro" />
                    <input type="number" placeholder="Número" />
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Cidade" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </Modal>
    );
}