import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete, catchError, isLoading }) => {
    return (
        <main>
            {isLoading && <p>Loading data...</p>}
            {catchError && <p style={{ color: 'red' }}>{`Error: ${catchError}`}</p>}
            {!isLoading && !catchError &&
                <>
                    {items.length ? (
                        <ItemsList
                            items={items}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                        />
                    ) : (
                        <p>Your list is empty</p>
                    )}
                </>
            }
        </main>
    )
};

export default Content;