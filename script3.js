class nameField extends React.Component {
    constructor(props) {
        super(props);
        var isValid  = this.validate(props.value);
        this.state = {value: props.value, valid: isValid}
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        var val = e.target.value;
        var isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
        // если прошла валидация то норм
        var color = this.state.valid === true ? "green" : "red";
        return <p>
            <label>Имя: </label> <br/>
            <input type="text" value={this.state.value} onChange={this.onChange} style={{borderColor: color}}></input>
        </p>
    }
}
class UserFrom extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('test', this.refs.nameField.value);
    }
    render() {
        return <form onSubmit={this.handleSubmit}>
            <input ref="nameField"></input>
            <input type="submit" value="Отправить"></input>
        </form>
    }
}

ReactDOM.render(
    <UserFrom />,
    document.getElementById('container')
)
