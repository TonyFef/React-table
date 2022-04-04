export const ListItem = ({ item, showParent }) => {

    const handleParent = (e, item) => {
        e.preventDefault();
        showParent(item);
    };

    if (item.parentId) {
        return (
            <tr id={item.id} onClick={(e) => handleParent(e, item)}>
                <td>{item.id} &darr; </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.balance}</td>
            </tr>
        );
    } else if (item.child === true) {
        return (
            <tr id={item.id} onClick={(e) => handleParent(e, item)} className="pink">
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.balance}</td>
            </tr>
        );
    } else {
        return (
            <tr id={item.id} onClick={(e) => handleParent(e, item)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.balance}</td>
            </tr>
        );
    }
};
