import { useState } from "react";
import { Filter } from "./Filter";
import { ListItem } from "./ListItem";
import { ListBasis } from "./ListBasis";

function App() {
    let data = require("./data.json");

    const [table, setTable] = useState([...data]);

    const showParent = (item) => {
        if (item.parentId) {
            const itemIndex = data.findIndex((elem) => elem.id === item.id);
            const before = data.slice(0, itemIndex + 1);
            const after = data.slice(itemIndex + 1);
            const parentItem = table.find((parent) => parent.id === item.parentId);
            const newItem = { email: parentItem.email, name: parentItem.name, balance: parentItem.balance, child: true };
            const newArr = [...before, newItem, ...after];

            setTable(newArr);
        }
    };

    const showActive = (option) => {
        if (option === "0") {
            setTable(data);
        } else if (option === "1") {
            const filteredArr = data.filter((item) => item.parentId);
            setTable(filteredArr);
        } else if (option === "2") {
            const filteredArr = data.filter((item) => item.isActive === true);
            setTable(filteredArr);
        }
    };

    return (
        <div className="App">
            <Filter showActive={showActive} />
            <table className="table">
                <thead>
                    <ListBasis />
                </thead>
                <tbody id="tbody">
                    {table.map((row, index) => {
                        return <ListItem key={index} item={row} showParent={showParent} />;
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
