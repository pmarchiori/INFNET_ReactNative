import ProdutoForm from "../components/ProdutoForm";

export default function ProdutoFormScreen({ onSubmit }) {
    return (
        <ProdutoForm onSubmit={onSubmit} />
    )
}