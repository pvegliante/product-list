import React from 'react';
import { products, generateVoteCount } from '../seed';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  handleProductUpVote() {
    this.props.onVote(this.props.id);
  }

  render () {
  return (
    <div className="item">
      <div className="image">
        <img className="productimage"
          src={this.props.productImageUrl} />
      </div>
      <div className="content">
        <div className="header">
          <a onClick={this.handleProductUpVote}>
            <img className="uparrow" src='app/images/uparrow.png' />
          </a>
          {this.props.votes}
        </div>
        <div className="description">
          <a href={this.props.url}>
            {this.props.title}
          </a>
          <p>{this.props.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img
            className="avatarimage"
            src={this.props.submitterAvatarUrl}
          />
        </div>
      </div>
    </div>
  );
 }
}

class ProductList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      products: []
    }

    this.handleProductUpVote = this.handleProductUpVote.bind(this)
  }

  componentDidMount() {
    this.setState({ products: products });
  }

  handleProductUpVote(productId) {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes +1
        });
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts
    });
  }
  render() {
    const sortedProducts = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));
    const productComponents = sortedProducts.map((product) =>
        <Product
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          description = {product.description}
          url = {product.url}
          votes = {product.votes}
          submitterAvatarUrl = {product.submitterAvatarUrl}
          productImageUrl = {product.productImageUrl}
          onVote={this.handleProductUpVote}
        />
    );
    return (
      <div className="items">
        {productComponents}
      </div>
    );
  }
}

export default ProductList;
