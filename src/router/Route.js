export default class Route {
    constructor(name, path, view) {
        this.name = name;
        this.path = path;
        this.view = view;
    }

    setProps(new_props) {
        this.props = new_props;
    }

    renderView() {
        return this.view(this.props);
    }
}
