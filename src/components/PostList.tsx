import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component<any> {
    componentDidMount() {
        this.props.fetchPosts();
    };

    render() {
        console.log(this.props.posts);

        return (
            <div>PostList</div>
        );
    };
};

const mapStateToProps = (state:any) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);