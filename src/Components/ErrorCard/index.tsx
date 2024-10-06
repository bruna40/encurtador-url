import { Card, ErrorContent } from "./style";

export function ErrorCard({ message, onClose }: { message: string; onClose: () => void }) {
    return (
        <Card>
            <ErrorContent>
                <h3>Erro</h3>
                <p>{message}</p>
                <button onClick={onClose}>Fechar</button>
            </ErrorContent>
        </Card>
    );
}
