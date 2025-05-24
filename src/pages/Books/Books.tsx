import { useGetBooks } from "../../services/useQueries/useBooksQueries";

type Props = {};

function Books({}: Props) {
    const { data: books, isLoading, error } = useGetBooks();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log("Books data:", books);

    return <div>Books</div>;
}

export default Books;
