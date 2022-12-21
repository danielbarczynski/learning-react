import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {items.length ? (
                <ItemsList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p>Your list is empty</p>
            )}
        </main>
    )};

export default Content;