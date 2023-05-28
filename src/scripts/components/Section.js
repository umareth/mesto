export class Section {
  constructor({ items, renderer }, galleryContainer) {
    this.renderer = renderer;

    this._items = items;

    this._container = galleryContainer;
  }

  renderItems() {
    this._items.forEach((element) => {
      this.addItem(this.renderer(element));
    });
  }
  

  addItem(item) {
    this._container.prepend(item);
  }
}
