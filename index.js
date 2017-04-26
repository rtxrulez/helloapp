const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra",
        "iPhone 7",
        "Google Pixel",
        "Huawei P9",
        "Meizu Pro 6",
        "Asus Zenfone 3"
    ]
};

// Компонент одного итема
class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>
    }
}

// Компонент списка с полем поиска
class ItemsList extends React.Component {
    // При монтирование инициализируем конструктор
    constructor(props) {
        super(props); // фиг знает че это
        // берем данные из статичного хранилища и добавляем в диномичное.
        // в item будет хранится списко
        this.state = { items: this.props.data.items };

        // Заменяем this по умолчанию у нашей функции поиска
        // Чтобы из функции можно было обратится объекту компонента а не к самой функции
        this.filterList = this.filterList.bind(this);
    }
    filterList(e) {
        // Берем статичный список и проходимся по каждому элементу
        // подставляя введенное значение в input
        var filterList = this.props.data.items.filter(function(item) {
            return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        });

        // обновляем переменное хоранилище
        this.setState({
            items: filterList
        })
    }
    render() {
        return (
            <div>
                <h2>{this.props.data.title}</h2>
                <input placeholder="Поиск" onChange={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item) {
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("container")
)
