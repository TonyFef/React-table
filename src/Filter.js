export const Filter = ({ showActive }) => {
    return (
        <>
            <select
                name="Filter"
                id="Filter"
                onChange={(e) => {
                    showActive(e.target.value);
                }}
            >
                <option value={0}>Choose a fiter</option>
                <option value={1}>Fiter by Having parent</option>
                <option value={2}>Fiter by Active</option>
            </select>
        </>
    );
};
